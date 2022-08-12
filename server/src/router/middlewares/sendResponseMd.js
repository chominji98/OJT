const sendResponseMd = async (ctx) => {
  const { response, } = ctx.state;

  // console.log("sendResponseMd ========== response", response);

  // 기본값 할당
  // status 값이 설정되어있지 않으면 200으로 하겠다
  // data 값이 없다면 공백으로 두겠다
  const { status = 200, data = {}, } = response;

  ctx.body = data;
  ctx.status = status;

  // await next; 마지막이니까 next를 부르지 않아도 됨
};

export default sendResponseMd;
