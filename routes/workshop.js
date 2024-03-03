import express from 'express';
import { getAllWorkshops } from '../controllers/workshopController.js';

const router = express.Router();

router.get('/', getAllWorkshops);
//router.get('/:id', getWorkshop);

export default router;