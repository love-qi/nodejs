/**
 * Created by admi on 2016/9/2.
 */
//var http=require("http");
//第一种方法
 /*var server=http.createServer(function(req,res){
    console.info("有人连接上来了哟。。。");
    res.write("<meta charset='utf-8'/>");
    res.write("呵呵");
    res.end();
}).listen(7788,function(){
    console.info("服务器已经启动。。。");
});

//第二种方法
var server=http.createServer().listen(7688,function(){
    console.info("服务器已启动...");
});

server.on("request",function(req,res){
    console.info("有人连接上来了哟。。。");
    res.write("<meta charset='utf-8'/>");
    res.write("呵呵");
    res.end();
})*/


/*var server=require("http").createServer().listen(6688,function(){
    console.info("服务器已经启动。。。");
});
//当有客户端请求时，触发这个事件
server.on("request",function(req,res){
    console.info("有人连接上来了哟。。。");
    res.write("<meta charset='utf-8'/>");
    res.write("呵呵");
    res.end();
    server.close();  //关闭服务器
});
//当有客户端连接到服务器时触发
server.on("connection",function(socket){
    console.info(socket.address().address);
});

server.on("close",function(){
    console.info("服务器被关闭。。。");
});

server.on("error",function(err){
    console.info(err);
    if(err.code=="EADDRINUSE"){
        console.info("端口号被占用");
    }
});*/

var fs=require("fs");
var server=require("http").createServer().listen(6688,function(){
    console.info("服务器已经启动。。。");
});
//当有客户端请求时，触发这个事件
server.on("request",function(req,res){
    console.info(req.url);//获取客服端请求的资料地址
    fs.readFile("."+req.url,function(err,data){
        if(!err){
            //res.write("<meta charset='utf-8'/>");
            res.write(data.toString());
            res.end();
        }else{
            console.info(err);
        }
    })

   // server.close();  //关闭服务器
});
//当有客户端连接到服务器时触发
server.on("connection",function(socket){
    console.info(socket.address().address);
});

server.on("close",function(){
    console.info("服务器被关闭。。。");
});

server.on("error",function(err){
    console.info(err);
    if(err.code=="EADDRINUSE"){
        console.info("端口号被占用");
    }
});