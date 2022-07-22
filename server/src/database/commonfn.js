import Mongoose from "mongoose";

/*
 * description: 다수의 다큐먼트를 저장한 함수
 * params:
 *   - bulkData: doc(s) «Array|Object»
 *   - ordered: insert시 실패 처리 유횽
 *     - false(default): 실패가 발생하더라도 끝가지 처리한 후에 마지막에 에러 내용 리포트
 *     - true: 실패가 발생하면 중지하고 에러 내용 리포트
 */
// eslint-disable-next-line func-names
Mongoose.Model.bulk = function ({ bulkData, ordered = false }) {
  return this.insertMany(bulkData, { ordered }).exec();
};

/*
 * description: 다큐먼트 저장한 함수
 * params:
 *   - data: doc
 */
// eslint-disable-next-line func-names
Mongoose.Model.create = function (data) {
  const newDoc = new this(data);

  return newDoc.save(data).exec();
};

/*
 * description: 몽고 ObjectId롤 다큐먼트를 삭제
 * params:
 *   - id: ObjectId
 */
// eslint-disable-next-line func-names
Mongoose.Model.removeOne = function ({ id }) {
  return this.deleteOne({ _id: id }).exec();
};

/*
 * description: 조건에 해당하는 데이터를 삭제
 * params:
 *   - query: mongoose query object
 *     - filter: 삭제할 조건이 저장되는 object
 */
// eslint-disable-next-line func-names
Mongoose.Model.findAndRemove = function ({ query }) {
  return this.deleteMany(query.filter).exec();
};

/*
 * description: 조건에 해당하는 데이터 조회
 * params:
 *   - id: ObjectId
 *   - query: mongoose query object
 *     - select: 조회 대상 field
 *     - populate: join 대상 설정
 */
// eslint-disable-next-line func-names
Mongoose.Model.readOne = function ({ id, query }) {
  let newReadOne = this.findOne({ _id: id });
  if (query.select) newReadOne = newReadOne.select(query.select);
  if (query.populate) newReadOne = newReadOne.populate(query.populate);
  return newReadOne.exec();
};

/*
 * description: 조건에 해당하는 데이터 수정
 * params:
 *   - id: ObjectId
 *   - data: 수정 대상 데이터
 *
 */
// eslint-disable-next-line func-names
Mongoose.Model.updateOne = function ({ id, data }) {
  return this.findByIdAndUpdate(
    // 검색조건
    { _id: id },
    // 업데이트 대상
    {
      ...data,
      updatedAt: new Date(),
    },
    // option: new = false의 업데이트가 완료된 데이터를 결과로 전달
    { new: false },
  ).exec();
};

/*
 * description: 조건에 해당하는 데이터 조회
 * params:
 *   - query: mongoose query object
 *     - filter: 조회 조건이 저장되는 object
 *     - select: 조회 대상 field
 *     - populate: join 대상 설정
 *     - limit: 출력 크기
 *     - skip: 출력 시작점
 *     - sort: 정렬 조건
 *
 */
// eslint-disable-next-line func-names
Mongoose.Model.readAll = function ({ query }) {
  let newFind = this.find(query.filter);

  if (query.limit) newFind = newFind.limit(query.limit);
  if (query.select) newFind = newFind.select(query.select);
  if (query.skip) newFind = newFind.skip(query.skip);
  if (query.populate) newFind = newFind.populate(query.populate);
  if (query.sort) newFind = newFind.sort(query.sort);

  return newFind.exec();
};

/*
 * description: 조건에 해당하는 데이터 개수 조회
 * params:
 *   - query: mongoose query object
 *     - filter: 조회 조건이 저장되는 object
 *     - populate: join 대상 설정
 */
// eslint-disable-next-line func-names
Mongoose.Model.countAll = function ({ query }) {
  let newFind = this.find(query.filter);

  if (query.populate) newFind = newFind.populate(query.populate);

  return newFind.countDocuments();
};
