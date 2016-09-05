/**
 * Created by admi on 2016/9/2.
 */
var net=require("net");

//创建服务器
/*var server=net.createServer(function(socket){//socket  套间字
    console.info("今天有点小太阳");
    console.info(socket);
});

server.listen(7777,function(){
    console.info("开始监听。。。");
    var addr=server.address();  //获取服务器监听的地址
    console.info("监听地址信息为：%j",addr);  //字符串 %s  整形：%d或%i   浮点型：%f  对象：%o 或%j
});*/

/*var server=net.createServer().listen(8888);//创建并启动服务器监听8888端口

server.on("connection",function(socket){
    console.info("有客户上来了。。。");
    //获得客户端的访问地址
    console.info(socket.address().address);
})*/

/*var server=net.createServer(function(socket){
    server.getConnections(function(err,count){
        console.info("当前有%d 个人在线。。。",count);

        server.maxConnection=2;  //设置最大的连接数

        console.info("当前TCP服务器允许的最大连接数为：%d",server.maxConnections);

        if(count==2){
            console.info("服务器正在被关闭。。。");
            server.close(function(){
                console.info("TCP服务器已经关闭。。。");
            });
        }
    })
});
//当端口设置为0时，有系统自动随机分配一个端口
server.listen(0,function(){
    console.info("服务器开始启动，监听的端口为：%j",server.address());
})*/


//var server=net.createServer(function(socket){
//    socket
//})
var fs=require("fs");
var file=fs.createWriteStream("./temp.txt");
var server=net.createServer(function(socket){
    socket.setEncoding("utf8");
    socket.on("data",function(data){
        socket.pipe(file);
    });

    socket.on("end",function(){
        file.end("\r\n---待续---");
        console.info("用户已经下线，数据写入完成。。。");
    });
});

server.listen(0,function(){
    console.info("服务器开始启动，监听的端口为： %j",server.address() );
});