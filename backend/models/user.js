import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    about: {
      type: String,
    },
    linkdin: {
      type: String,
    },
    facebook: {
      type: String,
    },
    github: {
      type: String,
    },
    instagram: {
      type: String,
    },
    twitter: {
      type: String,
    },
    website: {
      type: String,
    },
    ed: {
      type: String,
    },
    current_ed: {
      type: String,
    },
    interests: {
      type: [String],
    },
  },
  { timestamps: true }
);

export default model("User", UserSchema);
