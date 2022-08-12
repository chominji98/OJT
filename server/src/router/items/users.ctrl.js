export const read = async (ctx, next) => {
  ctx.status = 200;
  ctx.body = {
    data: "read",
  };
};

export const create = async (ctx, next) => {
  ctx.status = 200;
  ctx.body = {
    data: "create",
  };
};

export const update = async (ctx, next) => {
  ctx.status = 200;
  ctx.body = {
    data: "update",
  };
};

export const remove = async (ctx, next) => {
  ctx.status = 200;
  ctx.body = {
    data: "remove",
  };
};

// 외부에서 이 모듈을 임포트하기 위한 기본값
// export default create;
