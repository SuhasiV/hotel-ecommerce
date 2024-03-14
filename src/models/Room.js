import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    hotelId: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    features: {
      balcony: {
        type: Boolean,
        default: false,
      },
      bathtub: {
        type: Boolean,
        default: false,
      },
      breakfast: {
        type: Boolean,
        default: false,
      },
      personalJacuzzi: {
        type: Boolean,
        default: false,
      },
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
    bedType: {
      required: true,
      type: String,
    },
    price: {
      type: Number, // Changed from `number` to `Number`
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Room = mongoose.models.Room || mongoose.model("Room", roomSchema);

export default Room;
