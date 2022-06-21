import Koa from "koa";
import helmet from "koa-helmet";
import KoaCompose from "koa-compose";
import errorHandlerMd from "@/middlewares/errorHandlerMd";
import koaBodyMd from "@/middlewares/koaBodyMd";
import routerMd from "@/middlewares/routerMd";

const startApp = () => {
  const app = new Koa();

  const middlewares = [
    errorHandlerMd,
    helmet(),
    koaBodyMd,
    ...routerMd,
  ];

  app.use(KoaCompose(middlewares));

  app.listen(3000);
};

startApp();
