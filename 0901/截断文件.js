/**
 * Created by admi on 2016/9/1.
 */
//截断文件
var fs=require("fs");
 /*fs.truncate("./abc.txt",30,function(err){  //只保留文件的前30个字节
    if(err){
        console.info(err);
    }else{
        console.info("文件截取成功。。。");
    }
})*/

//监视文件fs.watchFile(file,options,listener)
//options是一个整形的数据，用来指定每隔多少毫秒监视文件是否发生变化
fs.watchFile("./abc.txt",function(curr,prev){//current:当前  previous：前面
    console.info(curr);
})