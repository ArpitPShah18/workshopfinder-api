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
  tags: [String]
}, {
  timestamps: true
});

workshopSchema.index({ location: 1 });
workshopSchema.index({ date: 1 });

workshopSchema.index({ tags: 'text', category: 'text' });

const Workshop = mongoose.model('Workshop', workshopSchema);

export default Workshop;
