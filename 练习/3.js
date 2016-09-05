/**
 * Created by admi on 2016/9/5.
 */
var net=require("net");
var server=net.createServer(function(socket){
    server.getConnections(function(err,count){
        console.info("当前有%d 个人在线...",count);
        server.maxConnections=2; //最大的连接数
        console.info("当前TCp服务器允许的最大连接数为：%d",server.maxConnections);
    })
})