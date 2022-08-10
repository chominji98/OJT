import mongoose from "mongoose";

const { Schema, } = mongoose;

const oAuthSchema = new Schema({
  clientId: {
    type: String,
    required: true,
  },
  clientPw: {
    type: String,
    required: true,
  },
  redirectUrl: {
    type: String,
  },
  scope: {// 요청 접근 범위
    type: String,
  },
  authorizationCode: {
    type: Object,
  },
  accessToken: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: String,
  },
  expires_in: {//만료 기간
    type: Date,
    required: true,
  }
  //만료 기간, 사용 기간

});

export default mongoose.model("OAuth", oAuthSchema);