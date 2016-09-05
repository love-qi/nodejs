/**
 * Created by admi on 2016/9/4.
 */
var http=require("http");
var querystring=require("querystring");
var server=http.createServer().listen(7777,function(){
    console.info("服务器已经启动...");
});

//当有客户端请求时，触发这个事件
server.on("request",function(req,res){
    if(req.url!='/favicon.ico'){
        var urls=req.url;
        urls=urls.replace("/?","");
        var obj=querystring.parse(urls);
        console.info(obj);
        console.info("用户名："+obj.uname);
        console.info("密码："+obj.pwd);
        res.end();
    }
});
server.on("close",function(){
    console.info("服务器被关闭。。。");
})