import mongoose from "mongoose";

const spaSchema = new mongoose.Schema(
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
    photos: {
      type: [String],
    },
    city: {
      type: String,
      required: true,
    },
    address: {
      type: [String],
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
    features: {
      type: [String],
      required: true,
    },
    isfeatured: {
      type: Boolean,
      default: false,
    },
    spaNumbers: [
      {
        number: Number,
        unavailableDates: { type: [Date] },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Spa = mongoose.models.Spa || mongoose.model("Spa", spaSchema);

export default Spa;
