import Joi from "joi";
import UserDb from "@/database/user";

export const setJoiSchematoState = async (ctx, next) => {
  const schema = Joi.object({
    userid: Joi.string().required(),
    username: Joi.string().required(),
    alias: Joi.string().optional().allow(null).allow(""),
  });

  ctx.state.joiSchema = schema;

  await next();
};

export const setDb = async (ctx, next) => {
  ctx.state.curDb = UserDb;

  await next();
};

export const setNewDoc = async (ctx, next) => {
  const { userid, username, alias } = ctx.request.body;

  ctx.state.newDoc = {
    userid,
    username,
    alias,
  };

  await next();
};

export const read = async (ctx, next) => {
  console.log(ctx.request.query);

  ctx.status = 200;
  ctx.body = {
    data: "read",
  };
};

export const update = async (ctx, next) => {
  ctx.status = 200;
  ctx.body = {
    data: "update",
  };
};

export const remove = async (ctx, next) => {
  ctx.status = 200;
  ctx.body = {
    data: "remove",
  };
};
