 import * as workshopService from '../services/workshopService.js';
 import logToCloudWatch from '../utils/cloudwatchLogger.js';
export const getAllWorkshops = async (req, res) => {
  try {
    const { location, keywords, startDate, endDate } = req.query;
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

    const workshops = await workshopService.getWorkshops({ location, keywords, startDate, endDate });
    
    if(workshops.length === 0){
      return res.status(404).json({ message: "Workshop Not Found" });
    }
    res.json(workshops);
  } catch (error) {
    logToCloudWatch('Server error:', error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getWorkshopById = async (req, res) => {
  try {
    const workshop = await workshopService.getWorkshopById(req.params.id);
    
    if (!workshop) {
      return res.status(404).json({ message: "Workshop not found" });
    }

    res.json(workshop);
  } catch (error) {
    logToCloudWatch('Server error:', error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
