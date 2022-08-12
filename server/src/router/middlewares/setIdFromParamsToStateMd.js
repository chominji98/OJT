const setIdFromParamsToStateMd = async (ctx, next) => {
  // params로 들어오는 id값을 state에 넣음.
  const { id, } = ctx.params;
  const { state, } = ctx;

  // 현재 state값을 유지하면서 id라는 값을 업데이트 시킴
  ctx.state = {
    ...state,
    id,
  };

  await next();
};

export default setIdFromParamsToStateMd;
