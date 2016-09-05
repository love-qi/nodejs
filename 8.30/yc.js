/**
 * Created by admi on 2016/8/30.
 */
var __name,__age;  //两个私有变量，注意：私有变量用两个下划线
var name="匿名",age=20;//公有变量
var yc=function(name,age){//构造方法，放我们new这个对象的时候调用
    console.info("调用了构造方法。。。");
    __name=name;
    __age=age;
}
//提供一个获取私有变量__name的值的方法
yc.prototype.getName=function(){
    return __name;
}

//提供一个获取私有变量的__age的值的方法
yc.prototype.getAge=function(){
    return __age;
}

//提供一个公有方法，用来修改私有属性
yc.prototype.setName=function(name){
    __name=name;
}

//提供一个公有方法,用来允许修改私有属性age的值
yc.prototype.setAge=function(age){
    if(age<10 || age>100){
        __age=18;
    }else{
        __age=age;
    }
}

yc.prototype.toString=function(){
    return "name="+__name+"age="+__age;
}
yc.prototype.name=name;
module.exports=yc;