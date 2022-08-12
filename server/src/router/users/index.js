/* eslint-disable import/no-named-as-default */
import KoaRouter from "koa-router";
import convertQueryToMongooseQueryParserMd from "../middlewares/convertQueryToMongooseQueryParserMd";
import joiValidateMd from "../middlewares/joiVaildateMd";
import sendResponseMd from "../middlewares/sendResponseMd";
import createDocMd from "../middlewares/createDocMd";
import readAllDocMd from "../middlewares/readAllDocMd";
import readOneDocMd from "../middlewares/readOneDocMd";
// import CRUD, {read} from "./user.ctrl"; //default
import * as UserApi from "./users.ctrl"; // UserApi에"./user.ctrl"의 모든 미들웨어를 저장
import setIdFromParamsToStateMd from "../middlewares/setIdFromParamsToStateMd";
import removeOneDocMd from "../middlewares/removeOneDocMd";
import updateDocMd from "../middlewares/updateDocMd";
import setDataToBeUpdateMd from "../middlewares/setDataToBeUpdateMd";

const router = new KoaRouter();

// 상위 라우터에서 users를 이미 정의 했기 때문에 url은 '/'만 정의
// readAll
router.get(
  "/",
  convertQueryToMongooseQueryParserMd,
  UserApi.setDb,
  readAllDocMd,
  sendResponseMd,
);

// readOne(id를 받아 해당 id를 read함)
// ':' - pathParam
router.get(
  "/:id",
  convertQueryToMongooseQueryParserMd,
  // UserApi.setJoiSchematoState,
  // joiValidateMd,
  // UserApi.findId,
  UserApi.setDb,
  setIdFromParamsToStateMd,
  readOneDocMd,
  sendResponseMd,
);

// create
router.post(
  "/",
  UserApi.setJoiSchematoState,
  joiValidateMd,
  UserApi.setDb,
  UserApi.setNewDoc,
  createDocMd,
  sendResponseMd,
);

// updateOne
// 수정은 되는데(updateAt) request로 보낸 data가 수정되지 않음
// updateDocMd에 request에서 보낸 값은 잘 확인됨.
router.put(
  "/:id",
  convertQueryToMongooseQueryParserMd,
  UserApi.setJoiSchematoState,
  joiValidateMd,
  UserApi.setDb,
  setIdFromParamsToStateMd,
  setDataToBeUpdateMd,
  updateDocMd,
  sendResponseMd,
);

// deleteOne
router.delete(
  "/:id",
  convertQueryToMongooseQueryParserMd,
  UserApi.setDb,
  setIdFromParamsToStateMd,
  removeOneDocMd,
  sendResponseMd
);

export default router;
