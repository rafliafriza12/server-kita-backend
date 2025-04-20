import mongoose from "mongoose";

const Auth = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      default: "-",
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      default: "-",
    },
    company: {
      type: String,
      default: "-",
    },
    jobTitle: {
      type: String,
      default: "-",
    },
    address: {
      type: String,
      default: "-",
    },
    profilePhoto: {
      type: String,
      default: "",
    },
    status: {
      type: Boolean,
      default: true,
    },
    role: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Auth", Auth);
