export const read = async (ctx, next) => {
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

export const create = async (ctx, next) => {
  ctx.status = 200;
  ctx.body = {
    data: "create",
  };
};
