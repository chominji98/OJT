const createDocMd = async (ctx, next) => {
  // create 작업에 필요한 공통된 것:
  // ctx.state의 현재 사용할 모델db와 create의 기준이 될 newDoc 데이터
  const { curDb, newDoc, } = ctx.state;

  const data = await curDb.create(newDoc);

  // ctx.state에 response객체를 만들어 결과 data를 저장
  // 클라이언트에 응답 데이터를 보내는 미들웨어를 만들어 분리(sendResponseMd.js)
  ctx.state.response = {
    data,
  };

  await next();
};

export default createDocMd;
