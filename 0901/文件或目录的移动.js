/**
 * Created by admi on 2016/9/1.
 */
var fs=require("fs");

//文件或目录的移动 fs.rename(oldpath,newpath,callback);

/*fs.rename("./yc.txt","./temp/abc.txt",function(err){  //将yc.txt的内容移动到temp文件中创建的abc中
    if(err){
        console.info("文件移动失败。。。");
    }else{
        console.info("文件移动成功。。。");
    }
});*/

//文件或目录的删除  fs.rmdir(path,callback);

/*fs.rmdir("./temp",function(err){  //只能删除目录
    if(err){
        console.info(err);
    }else{
        console.info("目录删除成功。。。");
    }
})*/

//用来删除文件
fs.unlink("./temp/abc.txt",function(err){
    if(err){
        console.info(err);
    }else{
        console.info("文件删除成功。。。");
    }
})

//文件和目录都删掉
//function del(path){
//    var stats=fs.statSync(path);
//    if(stats.isDirectory()){
//        var files=fs.readdirSync(path);
//        if(files==null){
//            fs.rmdir(path);
//        }else{
//            for(var i=0;i<files.length;i++){
//                all(del+"/"+files[i]); //yc/index.js
//            }
//        }
//        fs.rmdir(path);
//    }else if(stats.isFile){
//        fs.unlink(path);
//    }
//}
//del("./test");

