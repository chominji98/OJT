import mongoose from "mongoose";
import commonSchema from "./common";

const { Schema } = mongoose;

const userSchema = new Schema({
  userid: {
    type: String,
    unique: true,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  alias: {
    type: String,
    default: "",
  },
  role: {
    type: String,
    enum: ["ADMIN", "USER"],
    default: "USER",
  },
  ...commonSchema.obj,
});

export default mongoose.model("User", userSchema);
