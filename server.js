import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import workshopRoutes from './routes/workshop.js';
import connectDB from './config/db.js';
import cors from 'cors';
import logToCloudWatch from './utils/cloudwatchLogger.js';

dotenv.config();
await connectDB()

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/workshops', workshopRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  logToCloudWatch('Server Start', { status: 'success', port })
});

export default app;
