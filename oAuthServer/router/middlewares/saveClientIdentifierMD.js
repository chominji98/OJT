const saveClientIdentifierMd = async (ctx, next) => {

  const { clientId, clientSecret,} = ctx.state;
  ctx.state.data = {
    clientId,
    clientSecret,
  };
  const { curDb, data } = ctx.state;

  await curDb.create(data);
  
  await next();
  
}

export default saveClientIdentifierMd;