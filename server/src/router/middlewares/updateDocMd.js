const updateDocMd = async (ctx, next) => {
  const {
    curDb, id, userid, username, alias,
  } = ctx.state;

  const receiveData = { userid, username, alias, };

  // console.log("updateDocMd ================ receiveData", receiveData);

  const data = await curDb.updateOne({
    id, data: receiveData,
  });

  ctx.state.response = {
    data,
  };

  // console.log("updateDocMd ================ data", data);

  await next();
};

export default updateDocMd;
