import {controller, get} from "koa-dec-router";
import {Context} from "vm";

async function apiHandler(ctx, next) {
  console.log("handle all api and subclass's");
  await next();
}

@controller("/hello", apiHandler)
export default // @ts-ignore
class Hello {
  @get("/test")
  async getApiCommon(ctx: Context) {
    // ...
    return "hello";
  }
}

console.log("Hello loaded");
