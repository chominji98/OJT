import Boom from "@hapi/boom";

const errorHandlerMd = async (ctx, next) => {
  try {
    await next();

    if (ctx.status === 404) throw Boom.notFound("Not found");
  } catch (e) {
    let berr = e;
    if (!Boom.isBoom(e)) {
      berr = Boom.boomify(e);
    }

    if (berr.code) {
      berr.ouput.statusCode = berr.code;
      berr.output.payload.statusCode = berr.code;
      berr.output.payload.error = "";
    }

    if (berr.message) {
      berr.output.payload.message = berr.message;
    }

    ctx.status = (berr.output && berr.output.statusCode && berr.output.statusCode <= 511)
      ? berr.output.statusCode : 500;

    ctx.body = (berr.output && berr.output.payload)
      ? berr.output.payload : {
        statusCode: ctx.status,
        error: "Internal Server Error",
        message: "Unknown Error",
      };
  }
};

export default errorHandlerMd;
