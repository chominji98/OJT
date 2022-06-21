import Router from "@/router";
import Boom from "@hapi/boom";

const routerMd = [
  Router.routes(),
  Router.allowedMethods({
    throw: true,
    notImplemented: () => Boom.notImplemented(),
    methodNotAllowed: () => Boom.methodNotAllowed(),
  }),
];

export default routerMd;
