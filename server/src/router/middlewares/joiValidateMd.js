import Boom from "@hapi/boom";

const joiValidateMd = async (ctx, next) => {
  const { joiSchema } = ctx.state;

  if (!joiSchema) throw Boom.internal("joi schema not found");

  const isValid = joiSchema.validate(ctx.request.body);
  if (isValid.error) {
    throw Boom.badRequest(isValid.error);
  }

  await next();
};

export default joiValidateMd;
