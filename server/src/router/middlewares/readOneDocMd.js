const readoneDoc = async (ctx, next) => {
  const { curDb, id, } = ctx.state;

  const data = await curDb.readOne({
    id,
  });

  ctx.state.response = {
    status: 200,
    data,
  };
  await next();
};

export default readoneDoc;
