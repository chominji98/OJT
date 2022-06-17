import Koa from "koa";

const app = new Koa();
const app2 = new Koa();

// java xml -> DI
// javascript koa DI -> cb

const callback1 = async (ctx, next) => {
  ctx.state.data = "callback 1";

  await next();
};

const callback2 = async (ctx) => {
  ctx.body = `${ctx.state.data} Hello World`;
};

app.use(callback1);
app.use(callback2);

app.listen(3000);

app2.use(async (ctx) => {
  ctx.body = "Hello World2";
});

app2.listen(3001);
