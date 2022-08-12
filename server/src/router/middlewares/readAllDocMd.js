const readAllDocMd = async (ctx, next) => {
  const { curDb, } = ctx.state;

  const data = await curDb.readAll({ query: { skip: 2, }, });

  ctx.state.response = {
    data,
  };

  await next();
};

export default readAllDocMd;
