import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      require: true,
    },
    features: {
      balcony: {
        available: {
          type: Boolean,
          default: false,
        },
      },
      bathtub: {
        available: {
          type: Boolean,
          default: false,
        },
      },
    },
    amenities: {
      type: [String],
    },
    photo: {
      type: String,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    roomNumbers: [
      {
        number: Number,
        unavailableDates: { type: [Date] },
      },
    ],
    price: {
      number: Number,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Room = mongoose.models.Room || mongoose.model("Room", roomSchema);

export default Room;
