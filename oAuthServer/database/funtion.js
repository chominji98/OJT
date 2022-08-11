import Mongoose from "mongoose";

// eslint-disable-next-line func-names
Mongoose.Model.create = function (data) {
  const newDoc = new this(data);
  return newDoc.save(data).exec();
};