import { controller, get, post } from "koa-dec-router";

async function apiHandler(ctx, next) {
  console.log("handle all api and subclass's");
  await next();
}

@controller("/hello", apiHandler)
export default class Hello {
  @get("/test")
  async getApiCommon(ctx) {
    // ...
    return "hello";
  }
}

console.log("Hello loaded");
