import mongoose from "mongoose";

const { Schema, } = mongoose;

const oAuthSchema = new Schema({
  clientId: {
    type: String,
    required: true,
  },
  clientSecret: {
    type: String,
    required: true,
  },
  redirectUrl: {
    type: String,
  },
  grantType: {
    type: String,
    required: true,
  },
  scope: {// 요청 접근 범위
    type: String,
  },
  state: {
    //클라이언트가 요청과 콜백 사이의 상태를 유지하기 위해 사용하는 값.
    //인증 서버는 사용자 에이전트를 클라이언트로 다시 리다이렉션할 때 이 값을 포함함.
    type: String,
  },
  authorizationCode: {
    type: String,
    required: true,
  },
  accessToken: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: String,
  },
  expiresIn: {//만료 기간
    type: Date,
    required: true,
  },


});

export default mongoose.model("OAuth", oAuthSchema);