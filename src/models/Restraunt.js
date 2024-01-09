import mongoose from "mongoose";

const restrauntSchema = new mongoose.Schema(
  {
    name: {
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
      required: true,
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
    tableNumbers: [
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

const Restraunt =
  mongoose.models.Restraunt || mongoose.model("Restraunt", restrauntSchema);

export default Restraunt;
