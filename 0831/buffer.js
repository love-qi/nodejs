/**
 * Created by admi on 2016/8/31.
 */

 var buf=new Buffer("源辰科技信息技术有限公司");
//var str=buf.slice(3,6);
//console.info(str.toString());
//console.info(buf.toString());
//
////此时buf对象中的值也被修改了，由于Buffer对象的slice（）方法并不是复制缓存区中的数据，而是与该数据共享内存区域，因此，如果修改使用slice方法
////取出的数据，则缓存区中保存的数据也将被修改
//str[0]=buf[0];
//str[1]=buf[1];
//str[2]=buf[2];
//console.info(buf.toString() );

//buffer对象与字符串对象
//buf.toString([encoding],[start],[end])

console.info(buf.toString("utf8",0,12)); //从0开始截取
console.info(buf.toString("utf8",12));  //从第12个开始截取到最后


//buffer对象的write方法
//buf.write(string,[offset],[length],[encoding]);

var str="源辰信息科技有限共享";
var buf=new Buffer(str);

console.info(buf.toString() );  //将buffer对象转为字符串
//重写buf对象中的值   并不能追加
var num="yyyyyyy";
buf.write(num,3,3);  //从第三个字节（第二个字开始）开始替换，替换3个字节
console.info(buf.toString());

