import KoaRouter from "koa-router";
import * as UserApi from "./user.ctrl";

const router = new KoaRouter();

router.get("/", UserApi.read);
router.post("/", UserApi.create);
router.put("/", UserApi.update);
router.delete("/", UserApi.remove);

export default router;
