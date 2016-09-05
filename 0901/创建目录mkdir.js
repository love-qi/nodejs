/**
 * Created by admi on 2016/9/1.
 */
var fs=require("fs");

//异步方式创建目录
/*fs.mkdir("./test",function(err){
    if(err){
        console.info("目录创建失败。。。");
    }else{
        console.info("目录创建成功。。。");
    }
})

//同步方式创建目录
fs.mkdir("./temp");*/

//可以通过fs.readdir(path,callback)来读取 目录
/*fs.readdir("./",function(err,files){
    if(err){
        console.info("读取目录失败...");
    }else{
        console.info(files);//files指定目录下的所有文件或目录
    }
});

var fls=fs.readdirSync("./test");
console.info(fls);
*/
//查看文件或目录信息  fs.stat(path,callback)
fs.stat("./yc.txt",function(err,stats){
    if(err){
        console.info("出错 了。。。");
    }else{
        console.info("文件大小："+stats.size);  //72
    }
})

fs.stat("./yc",function(err,stats){
    if(err){
        console.info("出错了。。。");  //出错
    }else{
        console.info(stats.size);
    }
});

//获取文件夹的大小

//fs.exists(path,callback); 判断文件或目录是否存在
fs.exists("./yc.txt",function(exists){
    console.info(exists);
})

//fs.realpath(path,[cache],callback); //获取文件或目录的绝对路径

//cache:一个对象，其中存放一些预先指定的路径
fs.realpath("./yc.txt",function(err,path){
    if(!err){
        console.info(path); //输出指定的绝对路径
    }
})