/**
 * Created by admi on 2016/8/31.
 */

/*
  fs.writeFile(fileName,data,[options],callback);
  第一个参数是要写入文件的路径和名称
  第二个参数是要写入的数据
  第三个参数是写入数据时的一些参数信息，这一项可选
      options参数为一个对象
         flag属性：用于指定以什么方式操作，默认是w
         mode属性：用于指定文件被打开时的读写权限，默认是0666（可读写）
                  使用四个数据表示mode属性的 值，其中第一个数字必须是0
                  第二个文件所有者的权限
                  第三个文件或目录所有者所属组的其他成员的权限
                  第四个是指跟文件或目录所有者不在同一个组的其他用户的权限
               1：执行权限  001
               2：写权限    010
               4：读权限   100
               encoding属性：指定编码集，可选项有：utf8 ASCII base64
  第四个参数是回调函数
* */
var fs=require("fs");
//fs.writeFile("./yc.txt","源辰信息","utf8",function(err){
//    if(err){
//        console.info("写入文件失败。。。");
//    }else{
//        console.info("写入文件成功。。。");
//    }
//})

//异步
fs.readFile("./yc.txt","utf8",function(err,data){
    if(err){
        console.error("出错了。。。");
    }else{
        console.info(data);
    }
});

////同步方式
//var data=fs.readFileSync("./buffer.js","utf8");
//console.info(data);

//异步
fs.appendFile("./yc.txt","\r\n这是后面添加的数据",{encoding:"utf8"},function(err){
    if(err){
        console.error("出错了。。。");
    }else{
        console.info("文件追加...");
    }
})

//var arr=[1,2,3,6,10,4,23,21,7,13];
//arr.sort(campare);  //排序
//console.info(arr);//[ 1, 10, 13, 2, 21, 23, 3, 4, 6, 7 ]
//
//function campare(num1,num2){
//    num1=parseInt(num1);
//    num2=parseInt(num2);
//    if(num1>num2){
//        return 1; //返回正数则说明降序排序，返回负数说明要升序排序
//    }else if(num1==num2){
//        return 0;
//    }else{
//        return -1;
//    }
//}