import Workshop from '../models/workshopModel.js';

export const getWorkshops = async (filters = {}) => {
  try {
    const queryConditions = {};

    // Filter by location
    if (filters.location) {
      queryConditions.location = filters.location;
    }

    // Filter by date range
    if (filters.startDate || filters.endDate) {
      queryConditions.date = {};
      if (filters.startDate) {
        queryConditions.date.$gte = new Date(filters.startDate);
      }
      if (filters.endDate) {
        queryConditions.date.$lte = new Date(filters.endDate);
      }
    }

    // Filter by tags, assuming tags are an array of strings
    if (Array.isArray(filters.tags) && filters.tags.length > 0) {
      queryConditions.$or = [
        { tags: { $in: filters.tags } },
        { category: { $in: filters.tags } } // Assuming you want to use the same array for categories; adjust if needed
      ];
    }

    // Execute the query
    const workshops = await Workshop.find(queryConditions).exec();

    console.log(`Found ${workshops.length} workshops matching filters`);
    return workshops;
  } catch (error) {
    console.error(`Error fetching workshops from MongoDB: ${error.message}`);
    throw error;
  }
};

export const getWorkshopById = async (id) => {
  try {
    const workshop = await Workshop.findById(id);
    return workshop;
  } catch (error) {
    console.error(`Error fetching workshop by ID from MongoDB: ${error.message}`);
    throw error;
  }
};
