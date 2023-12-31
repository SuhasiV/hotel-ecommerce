import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: [String],
  },
  desc: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
  },
  features: {
    type: [String],
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  rooms: {
    type: [String],
  },
  restId: [
    {
      type: String,
    },
  ],
  spaId: [
    {
      type: String,
    },
  ],
  cheapestPrice: {
    type: Number,
    required: true,
  },
  isfeatured: {
    type: Boolean,
    default: false,
  },
});

const Hotel = mongoose.models.Hotel || mongoose.model("Hotel", hotelSchema);

export default Hotel;
