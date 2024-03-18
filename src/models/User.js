import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Email already exists. Please login"],
      unique: true,
    },
    password: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    signUpType: {
      type: String,
    },
  },
  {
    timestamps: true, // Corrected 'timestamp' to 'timestamps'
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
