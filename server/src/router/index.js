import KoaRouter from "koa-router";
import UserRouter from "@/router/users";
import ItemRouter from "@/router/items";

const router = new KoaRouter({
  prefix: "/api/v1",
});

router.use("/users", UserRouter.routes());
router.use("/items", ItemRouter.routes());

export default router;
