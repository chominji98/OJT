import koaBody from "koa-body";
import Path from "path";

// koa body paser - (multipart, URL 인코딩 및 json 요청 지원)
const koaBodyMd = koaBody({
  // koa-body의 설정중에 기본값을 바뀌야 할 것만 객체로 묶어서 전달.
  multipart: true,
  jsonStrict: false, // 엄격한 제이슨 체크는 하지X
  formidable: { // formidable은 object를 매핑
    keepExtensions: true, // 확장자를 유지시킴
    uploadDir: Path.join(`${__dirname}/../upload`),
    // C:\OJT\server\src\middlewares의 상위 디렉토리 src밑의 upload폴더를 가리킴.
  },
});

export default koaBodyMd;
