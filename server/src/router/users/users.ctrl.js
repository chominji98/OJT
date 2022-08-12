import Joi from "joi";
import UserDb from "@/database/user";// 모델 가져오기

// 스키마를 state로 선언함
export const setJoiSchematoState = async (ctx, next) => {
  /*
    Joi - Api에서 들어오는 데이터를 검증하는 라이브러리
    1. 스키마 정의 - Joi.object()
    2. 정의된 스키마를 validate
  */
  const schema = Joi.object({
    userid: Joi.string().required(),
    username: Joi.string().required(),
    alias: Joi.string().optional().allow(null).allow(""),

  });

  ctx.state.joiSchema = schema;

  // 스키마는 달라질 수 있으나 에러 처리는 어떤 상황이든 같은 로직이기 때문에
  // 에러처리는 미들웨어로 만들어 나눈다.(joiValadateMd.js)

  await next();
};

// create 작업에 쓸 DB의 Date 저장(미들웨어 생성)
export const setDb = async (ctx, next) => {
  ctx.state.curDb = UserDb;

  await next();
};

// create 작업에 쓸 새로운 Document Data 저장(미들웨어 생성)
export const setNewDoc = async (ctx, next) => {
  // 검증이 끝난 데이터니까 request.body에서 가져옴
  // ctx.request.body를 그대로 쓰지 않는 이유는
  // 넘어온 데이터 뿐 아니라 다른 데이터가 추가될 수 있기 때문임.
  const { userid, username, alias, } = ctx.request.body;// destruturing 구문

  ctx.state.newDoc = {
    userid,
    username,
    alias,
  };

  await next();
};

// 따로 함수를 만들 필요 없이 그냥 ctx.params로 받으면 됨

// UserDb에만 사용하는 것이 아니라 모든 create, read, update, delete 등의 작업에 사용해야 하기 때문에
// 미들웨어로 만들어 분리해준다.

// 외부에서 이 모듈을 임포트하기 위한 기본값
// export default create;
