import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
<<<<<<< HEAD
  },
  type: {
    type: String,
    required: true,
=======
    unique: true,
>>>>>>> 3b454d8286f5d2f453c85002bc7dd52234cfacc3
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: [String],
<<<<<<< HEAD
=======
    required: true,
>>>>>>> 3b454d8286f5d2f453c85002bc7dd52234cfacc3
  },
  desc: {
    type: [String],
    required: true,
  },
  photos: {
    type: [String],
  },
<<<<<<< HEAD

  features: {
    gym: {
      available: {
        type: Boolean,
        default: false,
      },
      imagePath: {
        type: String,
      },
    },
    pool: {
      available: {
        type: Boolean,
        default: false,
      },
      imagePath: {
        type: String,
      },
    },
    breakfast: {
      available: {
        type: Boolean,
        default: false,
      },
      imagePath: {
        type: String,
      },
    },
    couplefriendly: {
      available: {
        type: Boolean,
        default: false,
      },
      imagePath: {
        type: String,
      },
    },
    wifi: {
      available: {
        type: Boolean,
        default: false,
      },
      imagePath: {
        type: String,
      },
    },
    bar: {
      available: {
        type: Boolean,
        default: false,
      },
      imagePath: {
        type: String,
      },
=======
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
>>>>>>> 3b454d8286f5d2f453c85002bc7dd52234cfacc3
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
<<<<<<< HEAD
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
=======
>>>>>>> 3b454d8286f5d2f453c85002bc7dd52234cfacc3
  cheapestPrice: {
    type: Number,
    required: true,
  },
<<<<<<< HEAD
  isfeatured: {
    type: Boolean,
    default: false,
=======
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
>>>>>>> 3b454d8286f5d2f453c85002bc7dd52234cfacc3
  },
});

const Hotel = mongoose.models.Hotel || mongoose.model("Hotel", hotelSchema);

export default Hotel;
