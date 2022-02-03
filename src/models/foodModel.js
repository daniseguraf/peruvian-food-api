import mongoose from 'mongoose';

const foodSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  keyWords: {
    type: [],
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  origin: {
    type: String,
    required: true,
  },
});

const Food = mongoose.model('Food', foodSchema);
