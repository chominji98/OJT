const createDocMd = async (ctx, next) => {
  const { curDb, newDoc } = ctx.state;

  const data = await curDb.create(newDoc);

  ctx.state.response = {
    data,
  };

  await next();
};

export default createDocMd;
