// eslint-disable-next-line import/no-unresolved
import mongoose from "Mongoose";

const { Schema, } = mongoose;

const tokenSchema = new Schema({
  accessToken: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: String,
  },
  accessTokenExpiresIn: {
    type: Date,
    required: true,
  },
  refreshTokenExpiresIn: { 
    type: Date,
    required: true,
  },
});

export default mongoose.model("token", tokenSchema);
