import mongoose from "mongoose";
import "./commonfn";

const { Schema, } = mongoose;

const commonSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default commonSchema;
