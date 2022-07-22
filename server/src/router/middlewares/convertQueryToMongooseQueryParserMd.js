import { MongooseQueryParser } from "mongoose-query-parser";

const convertQueryToMongooseQueryParserMd = async (ctx, next) => {
  const mqp = new MongooseQueryParser();

  console.log(mqp.parse(ctx.request.query));

  await next();
};

export default convertQueryToMongooseQueryParserMd;
