/**
 * Created by admi on 2016/9/4.
 */
var http=require("http");
var options={
    host:"127.0.0.1",
    port:6868,
    path:"/",
    method:"post"
}

var req=http.request(options,function(res){
    console.info(res.statusCode);//获取验证码
    console.info(JSON.stringify(res.headers) );//获取响应头信息并将其转为一个json格式的字符串
    res.on("data",function(data){
        console.info(data.toString());
    });
});

req.write("你好啊！");

req.on("error",function(err){
    console.info(err);
})
req.end();