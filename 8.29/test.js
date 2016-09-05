/**
 * Created by admi on 2016/8/29.
 */

//console.info(_dirname); //当前执行的文件所在的目录
//console.info(_filename);//当前执行的文件路劲
//console.log("this is a log");
//console.info("this is a info");
//console.error("this is a error");
//console.warn("this is a warn");
//
//console.time("test"); //任意给定一个字符串，注意跟timeEnd（“”）中的保持前后一致即可
//
//for(var i=0;i<100;i++){
//
//}
//console.timeEnd("test");
//process.stdout.write("this is student");
//process.stderr.write("this is studerr");

//process.stdout.write("请输入：");
//process.stdin.setEncoding("utf-8"); //设置编码级
//process.stdin.on('data',function(data){  //监听用户的输入，用户输入的信息会自动保存到回调函数的data中
//    console.info(data);
//})

//process.stdout.write("请输入：");
//process.stdin.setEncoding("utf-8"); //设置编码级
//process.stdin.on('readable',function(data){  //监听用户的输入，用户输入的信息会自动保存到回调函数的data中
//    console.info(process.stdin.read());//读取用户的输入
//})

//var lqq=require("./lqq");  //var lqq=require("./lqq.js");
//console.info(lqq.test);
//console.info(lqq.info);
//console.info(lqq.txt);  //undefined

var yc1=require("./yc");
var yc2=require("./yc");

//这样就可以输出两次
yc1.output();
yc2.output();