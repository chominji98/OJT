import Joi from "joi";
import oAuthDb from "../../database/authInfo"

export const validateReqData = (ctx, next) => {
  const schema = Joi.object({
    
  });

  ctx.state.joiSchema = schema;

  await next();

}

export const setDb = async (ctx, next) => {
  ctx.state.curDb = oAuthDb;

  await next();
};
