import KoaRouter from "koa-router";
import convertQueryToMongooseQueryParserMd from "../middlewares/convertQueryToMongooseQueryParserMd";
import createDocMd from "../middlewares/createDocMd";
import joiValidateMd from "../middlewares/joiValidateMd";
import sendResponseMd from "../middlewares/sendResponseMd";
import * as UserApi from "./user.ctrl";

const router = new KoaRouter();

router.get(
  "/",
  convertQueryToMongooseQueryParserMd,
  UserApi.read,
);
router.post(
  "/",
  UserApi.setJoiSchematoState,
  joiValidateMd,
  UserApi.setDb,
  UserApi.setNewDoc,
  createDocMd,
  sendResponseMd,
);
router.put("/", UserApi.update);
router.delete("/", UserApi.remove);

export default router;
