const removeOneDocMd = async (ctx, next) => {
  const { curDb, id, } = ctx.state;

  const data = await curDb.removeOne({ id, });

  ctx.state.response = {
    data,
  };

  await next();
};

export default removeOneDocMd;
