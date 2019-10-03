const Koa = require('koa')
const app = new Koa();

const Router = require('koa-router');
const router = new Router({
    prefix:'zzll'
});
router.get('/abc',(ctx,next)=>{
    // console.log(ctx);
    // console.log(next);
    ctx.body = 'zzll';//加一个前缀
});
router.get('/test',(ctx,next)=>{
    // console.log(ctx);
    // console.log(next);
    ctx.body = 'test';
});
app.use(router.routes());
app.use(router.allowedMethods());

app.use(async ctx => {
    // ctx.body = 
})

app.listen(3000,()=>{
    console.log('ff')
});