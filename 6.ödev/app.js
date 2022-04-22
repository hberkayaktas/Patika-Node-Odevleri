//npm i koa-router
//npm i koa
const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

router.get("/", (ctx) => {
      paths = ctx.url.slice(1,);
      paths===''?paths='index':0;
      ctx.body = `<h1>${paths} sayfasina hosgeldiniz</h1>`;
      ctx.status = 200;
});

router.get("/hakkimda", (ctx) => {
      paths = ctx.url.slice(1,);
      paths===''?paths='index':0;
      ctx.body = `<h1>${paths} sayfasina hosgeldiniz</h1>`;
      ctx.status = 200;
});

router.get("/iletisim", (ctx) => {
      paths = ctx.url.slice(1,);
      paths===''?paths='index':0;
      ctx.body = `<h1>${paths} sayfasina hosgeldiniz</h1>`;
      ctx.status = 200;
});

app.use(router.routes());
const port = 3000;

app.listen(port, () => {
      console.log(`Server ${port} Portunda Çalışıyor.`);
});
