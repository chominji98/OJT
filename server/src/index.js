import Koa from "koa";
import helmet from "koa-helmet";
import KoaCompose from "koa-compose";
import errorHandlerMd from "@/middlewares/errorHandlerMd";
import koaBodyMd from "@/middlewares/koaBodyMd";
import mongoose from "mongoose";
import routerMd from "./middlewares/routerMd";

// const Koa = require("koa");
// import Koa from "Koa";

const startApp = () => {
  mongoose.connect("mongodb://localhost:27017/test");

  const app = new Koa(); // 웹 서버 인스턴스 생성

  // .use - 자바의 클래스 선언과 비슷

  // compose를 쓰는 목적 - 조합하기 위해서
  const middlewares = [
    errorHandlerMd,
    helmet(),
    koaBodyMd,
    ...routerMd, // spread 연산자 배열을 풀어헤쳐 배열 안에 하나씩 넣어줌. (순서 보장)
  ];

  app.use(KoaCompose(middlewares));

  app.listen(3000);
};

startApp();
