/**
 * Created by admi on 2016/8/29.
 */
/*outter:for(var i=1;i<10;i++){
    for(var j=1;j<5;j++){
        if(i*j==15){
            //可以跳出多重循环
            break outter;
        }
        console.info(i+"  "+j);
    }
    console.info(i+"----");
}*/

var req={
    session:{
        user:{
            uname:"lqq",
            age:"21"
        }
    }
}

console.info(req.session.user.uname);

//依次输出
for(var attr in req.session.user){
    console.log(req.session.user[attr]);
}

//第二种方法
with(req.session.user){
    console.log(name+'  '+age);
}