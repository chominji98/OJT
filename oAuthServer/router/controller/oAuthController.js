import Joi from "joi";
import oAuthDb from "../../database/model/client";

export const validateReqData = async (ctx, next) => {
  const schema = Joi.object({

  });

  ctx.state.joiSchema = schema;

  await next();
};

export const setDb = async (ctx, next) => {
  ctx.state.curDb = oAuthDb;

  await next();
};
