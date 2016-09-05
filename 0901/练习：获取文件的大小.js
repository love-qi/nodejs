/**
 * Created by admi on 2016/9/1.
 */
var fs=require("fs");
var total=0;

function getSize(path){
    var stats=fs.statSync(path); //根据文件路径获取到文件
    if(stats.isDirectory()){
        var files=fs.readdirSync(path);
        for(var i=0;i<files.length;i++){
            getSize(path+"/"+files[i]); //yc/index.js
        }
    }else if(stats.isFile() ){
        total+=stats.size;
    }
}
getSize("./test");
console.info("总大小："+total);