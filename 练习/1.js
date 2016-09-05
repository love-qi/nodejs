/**
 * Created by admi on 2016/9/5.
 */
var net=require("net");
//创建服务器
var server=net.createServer(function(socket){
    console.info("有客户端连接上来了。。。");
    console.info(socket);
});
server.listen(8888,function(){
    console.info("服务器开始监听...");
    var addr=server.address();//获取服务器监听的地址
    console.info("监听的地址为：",addr);
});