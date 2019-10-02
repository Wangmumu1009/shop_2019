const Koa = require('koa');
const app = new Koa();

app.use(async ctx =>{
    console.log(ctx);
    //叠加数据
    let data = '';

    //监听data事件，收到表单的数据的时候就会执行
    ctx.req.on('data',chunk =>{
        // console.log(chunk);
        data += chunk;//二进制 toString
    });

    //接受表单提交数据完成后
    ctx.rea.on('end',()=>{
        data = decodeURI(data);
        console.log(data);
    });

    ctx.body = '123';
});

app.listen(3000,()=>{
    console.log('服务开启在3000端口')
})