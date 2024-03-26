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
  tags: [String] // Array of strings
}, {
  timestamps: true // Adds createdAt and updatedAt timestamps
});

// Existing indexes on 'location' and 'date' can remain as they optimize other types of queries
workshopSchema.index({ location: 1 });
workshopSchema.index({ date: 1 });

// Replace individual indexes on 'tags' and 'category' with a compound text index
workshopSchema.index({ tags: 'text', category: 'text' }); // Compound text index

const Workshop = mongoose.model('Workshop', workshopSchema);

export default Workshop;
