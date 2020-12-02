const Koa = require("koa");
import {Context} from "koa";
import * as path from "path";

const logger = require("koa-logger");
const kStatic = require("koa-static");
const errorHandler = require("koa-better-error-handler");
const koa404Handler = require("koa-404-handler");
const Router = require("koa-router");
const helmet = require("koa-helmet");
const respond = require("koa-respond");
const json = require("koa-json");
const BodyParser = require("koa-bodyparser");
const markdown = require("koa-markdown");
const health = require("koa-ping");

const app = new Koa();
app.context.onerror = errorHandler();

app.use(helmet({
  contentSecurityPolicy: false
  // contentSecurityPolicy: {
  //   directives: {
  //     ...helmet.contentSecurityPolicy.getDefaultDirectives,
  //     "script-src": ["'self'", "'unsafe-inline'"],
  //   }
  // },
}));
app.use(logger());
app.use(
  BodyParser({
    enableTypes: ["json", "form", "text"],
    jsonLimit: "5mb",
    strict: true,
    multipart: true,
    returnRawBody: true,
    onerror: function (err: any, ctx: Context) {
      ctx.throw("body parse error", 422);
    },
  })
);

app.use(respond());
app.use(json());
app.use(kStatic('build', {}));

app.use(health("/ping"));
app.use(
  markdown({
    root: path.resolve(__dirname, ".."),
    baseUrl: "/docs",
  })
);

const router = new Router();
router.get("/404", (ctx: Context) => ctx.throw(404));
router.get("/500", (ctx: Context) => ctx.throw(500));

// const decRouter = DecRouter({
//   controllersDir: `${__dirname}/controllers`,
//   before: null, // global middleware
//   after: null, // global middleware
//   autoLoadControllers: true,
// });
// app.use(decRouter.router.routes());
// app.use(decRouter.router.allowedMethods());

router.get("/hello", (ctx: Context) => {
  ctx.body = "Hello Koa";
});

app.use(router.routes()).use(router.allowedMethods());
app.use(koa404Handler);
app.listen(3000);
