var yc=require("./yc");

var myyc=new yc();
console.info("获取公有属性name："+myyc.name);
console.info("获取公有属性age："+myyc.age);

console.info(myyc.getName());

var myyc1=new yc("lqq","18");
console.info(myyc1.getName());
console.info(myyc1.getAge());

myyc1.setAge(110);
console.info(myyc1.getAge());

myyc1.setName("哈哈");
console.info(myyc1.getName());
