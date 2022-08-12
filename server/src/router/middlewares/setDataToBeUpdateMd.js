const setDataToBeUpdateMd = async (ctx, next) => {
  const { userid, username, alias, } = ctx.request.body;
  const { state, } = ctx;

  ctx.state = {
    ...state,
    userid,
    username,
    alias,
  };

  await next();
};

export default setDataToBeUpdateMd;
