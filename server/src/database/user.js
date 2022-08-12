import mongoose from "mongoose";
import commonSchema from "./common";

const { Schema, } = mongoose;

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
    // enum : 열거형. enumerated type의 줄임말.
    // 배열 혹은 객체 안에 상수들을 선언함.
    // eslint-disable-next-line array-bracket-spacing
    enum: ["ADMIN", "USER", ],
    default: "USER",
  },
  ...commonSchema.obj, // 상속. .obj - 원형
}, {
  // 버전 키 사용X
  versionKey: false,
});

export default mongoose.model("User", userSchema);
