import Boom from "@hapi/boom";
import Router from "@/router";
// router폴더에 작성한 router임포트

const routerMd = [
  // 라우터 등록
  Router.routes(), // 리퀘스트에 부합된 라우트를 불러들여 해당 미들웨어를 리턴
  Router.allowedMethods({
    // 경로를 찾아봤음에도(routes()) 결과가 없다면
    // Boom을 사용해 에러 처리
    throw: true,
    notImplemented: () => Boom.notImplemented(), // 구현이 되지 않을 때
    methodNotAllowed: () => Boom.methodNotAllowed(), // 메서드가 허용되지 않을 때
  }),
];

export default routerMd;
