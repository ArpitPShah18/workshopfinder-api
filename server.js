import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import workshopRoutes from './routes/workshop.js';
import connectDB from './config/db.js';
import cors from 'cors';

dotenv.config();
await connectDB()

const app = express();
const port = process.env.PORT || 3000;


// const mongoDBUri = process.env.MONGODB_URI;
// console.log("uri",mongoDBUri,process.env.MONGODB_URI)
// mongoose.connect(mongoDBUri, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB...'))
//   .catch(err => console.error('Could not connect to MongoDB...', err));


/*mongoose.connect('mongodb://localhost/workshopFinder', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));*/
app.use(cors());
app.use(express.json());
app.use('/workshops', workshopRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
