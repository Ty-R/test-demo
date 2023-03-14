import mongoose, { Schema } from 'mongoose';

const factSchema = new Schema({
  fact: {
    type: String,
    minLength: 1,
    maxLength: 255,
    required: true
  }
});

export default mongoose.model('animal-facts', factSchema);
