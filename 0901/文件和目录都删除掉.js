/**
 * Created by admi on 2016/9/1.
 */
var fs=require("fs");
function del(path){
    var stats=fs.lstatSync(path);
    if(stats.isFile() ){//如果是一个文件
        fs.unlinkSync(path);
    }else if(stats.isDirectory()){//如果是一个目录

    }
}