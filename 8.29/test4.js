/**
 * Created by admi on 2016/8/30.
 */
var http=require("http");
var server=http.createServer();
var events=require("events");

server.on("request",function(req,res){
    if(req.url!="/favicon.ico"){
        console.info("接收到了客户端获取图标的信息。。。");
    }
});

server.on("request",function(req,res){
    if(req.url!="/favicon.ico"){
        console.info("发送响应信息。。。");
        res.write("<!doctype html><head><title>haha</title><meta charset='utf-8'/></head>");
        res.write("<body><h1>欢迎光临</h1></h1></body>");
        res.end();
    }
});
server.once("request",function(req,res){
    if(req.url!="/favicon.ico"){
        console.info("发送响应完毕。。。");
    }
});

server.listen(8881);
//获取server上request事件的事件处理函数的个数
console.info(events.EventEmitter.listenerCount(server,"request"));