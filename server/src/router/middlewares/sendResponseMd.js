const sendResponseMd = async (ctx) => {
  const { response } = ctx.state;
  const { status = 200, data = {} } = response;

  ctx.status = status;
  ctx.body = data;
};

export default sendResponseMd;
