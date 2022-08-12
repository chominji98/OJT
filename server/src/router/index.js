import KoaRouter from "koa-router";
// import CRUD, {read} from "./user.ctrl"; //default

// 하위 라우터
import UserRoute from "@/router/users";
import ItemRoute from "@/router/items";
// import * as UserApi from "./users.ctrl"; UserApi에"./user.ctrl"의 모든 미들웨어를 저장

// 중첩 라우팅

const router = new KoaRouter({
  prefix: "/api/v1", // 접두사
});

// router.use(URL,하위 라우터)
router.use("/users", UserRoute.routes());// UserRoute에 정의된 모든 라우터를 사용하겠다는 뜻
router.use("/items", ItemRoute.routes());

export default router;
