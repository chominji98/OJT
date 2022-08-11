const getClientIdentifierMd = async (ctx, next) => {
  const { curDb, newData } = ctx.state;

  const data = await curDb.create(newData);
  
  
}