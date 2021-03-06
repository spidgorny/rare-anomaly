import {controller, get} from 'koa-dec-router';
import {Context} from 'koa';

async function apiHandler(ctx: Context, next: () => void) {
    console.log("handle all api and subclass's");
    await next();
}

@controller('/hello', apiHandler)
export default class Hello {
    @get('/test')
    async getApiCommon(ctx: Context) {
        // ...
        return 'hello';
    }
}

console.log('Hello loaded');
