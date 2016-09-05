/**
 * Created by admi on 2016/8/29.
 */
var http=require("http");
var server=http.createServer();

server.on("request",function(req,res)){
    console.info("<meta charset='utf-8'/>");
}