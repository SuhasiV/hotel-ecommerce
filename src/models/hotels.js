import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: [String],
    required: true,
  },
  desc: {
    type: [String],
    required: true,
  },
  photos: {
    type: [String],
  },
  couplefriendly: {
    type: Boolean,
    default: true,
  },
  pool: {
    type: Boolean,
    default: true,
  },
  inRoomAmenities: {
    wifi: {
      type: Boolean,
      default: true,
    },
    espressoMachine: {
      type: Boolean,
      default: true,
    },
    miniBar: {
      type: Boolean,
      default: true,
    },
    service: {
      type: Boolean,
      default: true,
    },
    care: {
      type: Boolean,
      default: true,
    },

    safe: {
      type: Boolean,
      default: true,
    },
  },
  facilities: {
    spaId: {
      type: String,
      default: null,
    },
    restId: {
      type: String,
    },
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  rooms: {
    type: [String],
  },
  cheapestPrice: {
    type: Number,
    required: true,
  },
  type: {
    isNew: {
      type: Boolean,
      default: false,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    isPopular: {
      type: Boolean,
      default: false,
    },
  },
});

const Hotel = mongoose.models.Hotel || mongoose.model("Hotel", hotelSchema);

export default Hotel;
