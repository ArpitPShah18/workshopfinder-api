import mongoose from 'mongoose';

const workshopSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  skillLevel: {
    type: String,
    required: true,
    enum: ['Beginner', 'Intermediate', 'Advanced', 'All Levels'] // Adjust based on your specific skill levels
  },
  price: {
    type: Number,
    required: true
  },
  participantLimit: {
    type: Number,
    required: true
  },
  registrationCount: {
    type: Number,
    required: true
  },
  instructorBio: {
    type: String,
    required: true
  },
  tags: [String] // Array of strings
}, {
  timestamps: true // Adds createdAt and updatedAt timestamps
});

const Workshop = mongoose.model('Workshop', workshopSchema);

export default Workshop;
