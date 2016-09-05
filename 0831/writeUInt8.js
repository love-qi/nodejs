/**
 * Created by admi on 2016/8/31.
 */
/*var buf=new Buffer([0x10,0x20]);
console.info(buf.readUInt8(0));  //用十进制
console.info(buf.readUInt8(1));

buf.writeUInt8(30,0);  //索引为0的改为30
console.info(buf);*/

var buf1=new Buffer("源辰信息科技有限公司");
console.info(buf1);

//将buffer对象中保存的数据转化为一个json格式的字符串
var json=JSON.stringify(buf1);
var jsonObj=JSON.parse(json);  //将json类型的字符串转为json对象
console.info(json);  //转为json对象
console.info(jsonObj.data); //这个时候就可以通过对象名.属性名取值

//将字符串对象转为一个buffer对象
var str=new Buffer(JSON.parse(json));
console.info(str);
console.info(str.toString() );


var buf=new Buffer("源辰信息科技有限公司");
var copyBuf=new Buffer(40);
//第一个参数是将原数据复制到新对象
//第二个参数是从新对象的哪个文职开始存放复制过来的数据
//第三个参数是从原数据的哪个文具开始复制
//第四个参数是从原数据中复制的长度，默认是原数据的长度
buf.copy(copyBuf,0,0,12);
console.info(copyBuf.toString());

////Buffer对象的常用方法
////toString(); //将buffer对象中的数据，以字符串的方式输出
////isBuffer（）；判断是否是一个buffer对象
//console.info(Buffer.isBuffer(buf) ); //true
var str="哈哈";
//console.info(Buffer.isBuffer(str));//false
//
////byteLength(); 计算一个字符串的字节数
console.info(Buffer.byteLength(str,"utf8"));//6
console.info(Buffer.byteLength(str,"utf16le")); //4
//
////concat（）；拼接多个buffer对象中的值
////isEncoding(); 检查是否是一个有效编码
//console.info(Buffer.isEncoding("utf8"));
//console.info(Buffer.isEncoding("GBK"));
//
////length
//console.info(copyBuf.length); //注意这是一个属性，而不是方法