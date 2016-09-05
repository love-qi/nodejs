/**
 * Created by admi on 2016/9/4.
 */
var http=require("http");
var querystring=require("querystring");
var fs=require("fs");
var url=require("url");

var server=http.createServer().listen(6667,function(){
    console.info("服务器已经启动...");
});

//当有客户端请求时，触发这个事件
server.on("request",function(req,res){
    if(req.url!='/favicon.ico'){
       var urlObj=url.parse(req.url); //把请求地址变成一个对象
        console.info(urlObj)
        //根据不同的请求地址，进行不同处理并返回不同的结果
        if(urlObj.pathname=='/'){//默认返回index.html
            readFile("./index.html",res);
        }else if(urlObj.pathname=="/addUser"){//如果是添加用户请求
            //先获取用户和密码
            var dataObj=querystring.parse(urlObj.query);
            if(dataObj.uname=="yc" && dataObj.pwd=="123"){
                readFile("./success.html",res);
            }else{
                readFile("./error.html",res);
            }
        }else if(urlObj.pathname=="/showreg"){  //说明用户是注册，服务器应该返回注册页面给他
            readFile("./reg.html",res);
        }else if(urlObj.pathname=="/userReg"){  //将用户提交过来的用户名和密码保存到数据中

        }
    }
});
function readFile(path,res){
    var file=fs.createReadStream(path);
    file.on("data", function(data){
        res.write(data);
    });

    file.on("end",function(){
        res.end();
    })
}
server.on("close",function(){
    console.info("服务器被关闭。。。");
})

server.on("error",function(err){
    console.info(err);
    if(err.code=="EADDRINUSE"){
        console.info("端口号被占用。。。");
    }
})