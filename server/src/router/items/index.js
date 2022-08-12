import KoaRouter from "koa-router";
// import CRUD, {read} from "./user.ctrl"; //default
import * as UserApi from "./users.ctrl"; // UserApi에"./user.ctrl"의 모든 미들웨어를 저장

const router = new KoaRouter();

// 상위 라우터에서 items를 이미 정의 했기 때문에 url은 '/'만 정의
router.get("/", UserApi.read);
router.post("/", UserApi.create);
router.put("/", UserApi.update);
router.delete("/", UserApi.remove);

export default router;
