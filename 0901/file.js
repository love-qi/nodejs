/**
 * Created by admi on 2016/9/1.
 */
/*if(){

}else{
    var buffer=new Buffer(255);
    fs.read(fd,buffer,0,12,0,function(err,len,bf){
        console.info(bf.slice(0,len).toString() );
        fs.read(fd,buffer,12,12,null,function(err,len1,bf1){
            console.info(buffer.toString() );
            console.info(bf1.slice(12,len1).toString() );
        });
    });
}*/
/*
var fd=fs.openSync("./yc.txt","r");
var buf=new Buffer(100);
var len=fs.readSync(fd,buf,0,12);
console.info(buf.slice(0,len).toString());
len=fs.readSync(fd,buf,12,12,null);
console.info(buf.slice(0,24).toString() );*/
/*var fs=require("fs");
var buf=new Buffer("哈哈嘻嘻");
fs.open("./yc.txt","a",function(err,fd){
    if(err){
        console.info("打开文件失败...");
    }else{
        fs.write(fd,buf,0,buf.length,12,function(err,writeLen,buffer){
            if(err){
                console.info("写入文件失败...");
            }else{
                console.info(writeLen);
                console.info(buffer.toString());
            }
        });
    }
});*/

var fs=require("fs");
var buf=new Buffer("哈哈嘻嘻");
fs.open("./yc.txt","a",function(err,fd){
    if(err){
        console.info("打开文件失败...");
    }else{
        fs.write(fd,buf,0,6,0,function(err,writeLen,buffer){
            if(err){
                console.info("写入文件失败...");
            }else{
                fs.write(fd,buf,6,12,null,function(err,len,buffer){
                    if(err){
                        console.info("写入文件失败");
                    }else{
                        console.info("文件写入完成");
                    }
                })
            }
        });
    }
});