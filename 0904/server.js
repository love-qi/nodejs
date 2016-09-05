/**
 * Created by admi on 2016/9/4.
 */
var http=require("http");

var server=http.createServer(function(req,res){
    if(req.url!="/favicon.ico"){
        req.on("data",function(data){
            console.info("服务器接收的数据为："+data.toString());
            res.end("你是笨蛋。。");
        });
    }
}).listen("6868",function(err){
    if(!err){
        console.info("服务器启动了...");
    }else{
        console.info(err);
    }
})