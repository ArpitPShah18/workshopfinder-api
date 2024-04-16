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
    if (filters.keywords) {
      // Directly using the comma-separated string for text search
      const keywordsForSearch = filters.keywords.replace(/,/g, ' ');
      queryConditions.$text = { $search: keywordsForSearch };
    }
    const workshops = await Workshop.find(queryConditions).lean().exec();

    return workshops;

    
    //return workshops;
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
