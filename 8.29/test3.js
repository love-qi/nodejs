/**
 * Created by admi on 2016/8/30.
 */
var http=require("http");
var server=http.createServer();

//手动触发某个事件 emitter.emit(event,[arg1],...]
server.on("ycEvent",function(arg1,arg2,arg3){
    console.info("自定义事件。。。");
    console.info(arg1+arg2+arg3);
});

server.emit("ycEvent",10,20,30); //触发自定义事件
server.listen(8887);