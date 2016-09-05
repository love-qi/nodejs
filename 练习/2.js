/**
 * Created by admi on 2016/9/5.
 */
var net=require("net");
var server=net.createServer().listen(8884);//创建
server.on("connection",function(socket){
    console.info("yourenlianjieshanglai...");
    //获取客户端的访问地址
    console.info(socket.address().address);
})