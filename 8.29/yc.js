/**
 * Created by admi on 2016/8/29.
 */

//var test=function(msg){
//    console.info(msg);
//}
////多少毫秒之后执行指定的方法一次，第一次参数是要执行的方法，第二个参数是多少毫秒之后，第三个是运行的方法的参数
//var timer=setTimeout(test,1000,"hello world");
//
//var count=1;
//function test1(msg){
//    console.info(msg+" "+count);
//    count++;
//    if(count==10){
//        clearInterval(mytimer);
//    }
//}
//var mytimer=setInterval(test1,1000,"您好");

console.info("hello world");

var output=function(){
    console.info("haha");
}

exports.output=output;