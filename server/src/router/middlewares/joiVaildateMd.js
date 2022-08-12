import Boom from "@hapi/boom";

const joiValidateMd = async (ctx, next) => {
  // 컨트롤러에서 선언한 joiSchema를 ctx.state에서 가져옴
  const { joiSchema, } = ctx.state;
  // 에러가 발생할 경우 실행됨

  // joiSchema가 존재하지 않는 경우
  if (!joiSchema) throw Boom.internal("joi schema not found");

  const isValid = joiSchema.validate(ctx.request.body);
  if (isValid.error) {
    throw Boom.badRequest(isValid.error);
  }

  await next();
};

export default joiValidateMd;
