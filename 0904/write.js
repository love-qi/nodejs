/**
 * Created by admi on 2016/9/4.
 */
var http=require("http");
//var options={   //  http://www.baidu.com:80/index.html
//    host:"www.baidu.com",
//    post:80,
//    path:"/index.html",
//    method:"GET"
//}

var req=http.request("http://www.baidu.com",function(res){
    console.info(res.statusCode); //获取响应码
    console.info(JSON.stringify(res.headers) );  //获取响应头信息并将其转为字符形式
    res.on("data",function(data){
        console.info(data.toString());
    })
});
req.on("error",function(err){
    console.info(err);
});
req.end();