import { Schema, model } from "mongoose";


const BrandSchema: Schema = new Schema({
  name: {
    type: String
  },
  artist: {
    type: String
  }
}, {
  collection: 'brands'
});

export default model('Brand', BrandSchema);