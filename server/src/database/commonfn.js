/* eslint-disable func-names */
import mongoose from "mongoose";

mongoose.Model.create = function (data) {
  const newData = new this(data);

  return newData.save(newData).exec();
};

// mongoose 함수 학습

// - insertMany
// - deleteOne
// - deleteMany
// - find
// - findOne
// - findByIdAndUpdate
// - countDocuments

// mongoose-query-parser
// npm 설치
// 요것도 사용법이랑 학습

// - filter
// - sort
// - skip
// - limit
// - populate
// - select
