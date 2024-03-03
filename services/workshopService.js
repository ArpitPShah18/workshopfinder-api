import Workshop from '../models/workshopModel.js';

export const getWorkshops = async (filters = {}) => {
  try {
    const queryConditions = {};

    if (filters.category) {
      queryConditions.category = filters.category;
    }
    if (filters.location) {
      queryConditions.location = filters.location;
    }
    if (filters.skillLevel) {
      queryConditions.skillLevel = filters.skillLevel;
    }
    if (filters.startDate || filters.endDate) {
      queryConditions.date = {};
      if (filters.startDate) {
        queryConditions.date.$gte = new Date(filters.startDate);
      }
      if (filters.endDate) {
        queryConditions.date.$lte = new Date(filters.endDate);
      }
    }

    // Adjusting the keywords logic to handle array input
    if (Array.isArray(filters.keywords) && filters.keywords.length > 0) {
      const keywordsRegex = filters.keywords.map(keyword => new RegExp(keyword.trim(), 'i'));
      queryConditions.$or = [
        { tags: { $in: keywordsRegex } },
        { category: { $in: keywordsRegex } }
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
