import Boom from "@hapi/boom";

// errorHandler 미들웨어 생성(가장 상위의 미들웨어)
const errorHandlerMd = async (ctx, next) => {
  try {
    await next(); // 다음 미들웨어 실행

    if (ctx.status === 404) throw Boom.notFound("Not Found");
  } catch (e) {
    let berr = e;

    if (!Boom.isBoom(e)) { // Boom에러가 아닌 경우
      berr = Boom.boomify(e);// 일반에러에서 Boom에러로 만듦
      console.log(berr);
    }

    if (berr.code) { // 일반 에러에 코드가 있을 경우
      berr.output.statusCode = berr.code;
      berr.output.payload.statusCode = berr.code;
      berr.output.payload.error = "";// 일단 비워둔다.
    }

    if (berr.messege) { // 일반 에러에 에러메세지가 있을 경우
      berr.output.payload.messege = berr.messege;
    }

    // status - 응답 메세지
    // berr.output과 berr.output.statusCode가 존재하면서 output의 statusCode가 511보다 작거나 같을때
    // (http statusCode는 511이상이 나올 수 없어서)
    // - berr.output.statusCode 보내고 하나라도 불일치하면 500으로 보냄.
    ctx.status = (berr.output && berr.output.statusCode && berr.output.statusCode <= 511)
      ? berr.output.statusCode
      : 500;

    ctx.body = (berr.output && berr.output.payload)
      ? berr.output.status
      : {
        statusCode: ctx.status,
        error: "Internal Server Error",
        message: "Unknown Error",
      };
  }
};

export default errorHandlerMd;
