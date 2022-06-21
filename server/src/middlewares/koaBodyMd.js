import KoaBody from "koa-body";
import Path from "path";

const koaBodyMd = KoaBody({
  multipart: true,
  jsonStrict: false,
  formidable: {
    keepExtensions: true,
    uploadDir: Path.join(`${__dirname}/../upload`),
  },
});

export default koaBodyMd;
