import Workshop from '../models/workshopModel.js';
import logToCloudWatch from '../utils/cloudwatchLogger.js';
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
      const keywordsForSearch = filters.keywords.replace(/,/g, ' ');
      queryConditions.$text = { $search: keywordsForSearch };
    }
    const workshops = await Workshop.find(queryConditions).lean().exec();

    return workshops;


  } catch (error) {
    logToCloudWatch('Error fetching workshops from MongoDB:', error.message);
    console.error(`Error fetching workshops from MongoDB: ${error.message}`);
    throw error;
  }
};

export const getWorkshopById = async (id) => {
  try {
    const workshop = await Workshop.findById(id);
    return workshop;
  } catch (error) {
    logToCloudWatch('Error fetching workshop by ID from MongoDB:', error.message);
    console.error(`Error fetching workshop by ID from MongoDB: ${error.message}`);
    throw error;
  }
};
