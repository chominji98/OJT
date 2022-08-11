import Joi from "joi";
import oAuthDb from "../database/oAuth"

export const validateReqData = (ctx, next) => {
  const schema = Joi.object({
    clientId:
      Joi.string().required(),
    clientSecret:
      Joi.string().required(),
    redirectUrl:
      Joi.string().optional().allow(null),
    grantType:
      Joi.string().required(),
    scope:
      Joi.string().optional().allow(null),
    state:
      Joi.string().optional().allow(null),
  });

  ctx.state.joiSchema = schema;

  await next();

}

export const setDb = async (ctx, next) => {
  ctx.state.curDb = oAuthDb;

  await next();
};

export const setNewData = async (ctx, next) => {
  const { clientId, clientSecret, grantType, redirectUrl,state } = ctx.request.body;
  ctx.state.newData = {
    clientId,
    clientSecret,
    grantType,
    redirectUrl,
    state
  };

  await next();
};