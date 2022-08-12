import { MongooseQueryParser, } from "mongoose-query-parser";

const convertQueryToMongooseQueryParserMd = async (ctx, next) => {
  // read 작업 전에 query를 몽구스 쿼리로 convert 해야 함.
  // 몽구스 쿼리를 만드는 조건
  // 1. MongooseQueryParser 객체 생성
  // 2. mqp 객체의 parse 메서드 사용
  const mqp = new MongooseQueryParser();

  // ctx.reqeust.qeury
  console.log(mqp.parse(ctx.request.query));

  await next();
};

export default convertQueryToMongooseQueryParserMd;
