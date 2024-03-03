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

    // Filter by keywords
    if (Array.isArray(filters.keywords) && filters.keywords.length > 0) {
      const keywordsArray = filters.keywords.map(keyword => new RegExp("\\b" + keyword.trim() + "\\b", 'i')); // Assuming keywords is a string
      queryConditions.$or = [
        { tags: { $in: keywordsArray } },
        { category: { $in: keywordsArray } }
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
