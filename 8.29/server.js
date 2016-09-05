/**
 * Created by admi on 2016/8/29.
 */
var http=require("http");  //引入http模块<script src=‘’></script>

http.createServer(function(request,response){//创建一个服务器(请求，应答)
    //客户端发送给服务器端的信息被封装在request对象中，即服务器要获取服务端的信息，必须通过request这个对象
    //服务器向客户端回送信息，通过response对象
   // console.info(request);
   // console.info(response);
    request.write('hello World!');
    response.end(); //响应结束

//}).listen(6666,'127.0.0.1');  //指定服务器监听的ip地址和端口，如果监听所有地址，则ip地址可以省略
}).listen(6666); //端口就是确定哪个跟我联系（你是计算机系，在所在的班级）
console.info("服务器已经启动，占用的端口号为：6666");