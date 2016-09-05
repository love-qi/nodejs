/**
 * Created by admi on 2016/8/30.
 */
//创建指定长度的buffer对象
var buf=new Buffer(10);
buf.fill(10);//用10去填充buf对象
console.info(buf.length);
console.info(buf); //所有的值都是16进制表示的

//创建指定值的buffer
//varbuf1=new buffer([10,20,30,40,50]);

var buf2=new Buffer("ycinfo","utf8");
console.info(buf2.length);
console.info(buf2);

var str="衡阳师范学院";
var buf3=new Buffer(str);
console.info(str.length);
console.info(buf3.length);  //18  一个utf—8字符占用三个字节

//可以通过索引下标访问字符串或缓存区中的数据，但是，在获取数据时，字符串对象也是以文字作为一个单位，而缓存区对象以字节一个单位
console.info(str[2]);//师
console.info(buf3[2]);//161

//注意：字符串对象一旦创建，将不能修改
str[1]="李";
console.info(str); //并没有修改
//而buffer对象是可以被修改的，可以通过序号来修改其中的某个字符处的数据

console.info(buf3[3]);
console.info(buf3[4]);
console.info(buf3[5]);

buf3[0]=232;
buf3[1]=190;
buf3[2]=176;

console.info(buf3);  //utf8编码集
console.info(buf3.toString());  //toString（）转为字符串