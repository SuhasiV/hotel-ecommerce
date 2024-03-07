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
    breakfast: {
      type: Boolean,
      default: true,
    },
    bathTub: {
      type: Boolean,
      default: true,
    },
    safe: {
      type: Boolean,
      default: true,
    },
  },
  facilities: {
    spa: {
      available: {
        type: Boolean,
        default: true,
      },
      spaId: {
        type: String,
      },
    },
    dining: {
      available: {
        type: Boolean,
        default: true,
      },
      restId: {
        type: String,
      },
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
  },
  isfeatured: {
    type: Boolean,
    default: false,
  },
});

const Hotel = mongoose.models.Hotel || mongoose.model("Hotel", hotelSchema);

export default Hotel;
