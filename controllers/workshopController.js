 import * as workshopService from '../services/workshopService.js';

export const getAllWorkshops = async (req, res) => {
  try {
    const { category, skillLevel, location, keywords, startDate, endDate } = req.query;
    if (location && /^\d+$/.test(location)) {
      return res.status(400).json({ message: "Invalid location provided. Location must be textual." });
    }

    // Validate 'startDate' and 'endDate' formats
    if (startDate && isNaN(new Date(startDate).valueOf())) {
      return res.status(400).json({ message: "Invalid startDate format." });
    }
    if (endDate && isNaN(new Date(endDate).valueOf())) {
      return res.status(400).json({ message: "Invalid endDate format." });
    }
    if (startDate && endDate && new Date(startDate) > new Date(endDate)) {
      return res.status(400).json({ message: "startDate cannot be after endDate." });
    }

    const keywordsArray = keywords ? keywords.split(',').map(keyword => keyword.trim()) : [];

    const workshops = await workshopService.getWorkshops({ category, skillLevel, location, keywords: keywordsArray, startDate, endDate });
    
    if(workshops.length === 0){
      return res.status(404).json({ message: "Workshop Not Found" });
    }
    res.json(workshops);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
