/**
 * Created by admi on 2016/9/5.
 */
var mysql=require('mysql');  //导入MySQL模块

//创建数据连接
var connection=mysql.createConnection({
    host:'127.0.0.1',
    port:3306,
    database:'stusys',
    user:'root',
    password:'606040'
});

//连接到数据库
connection.connect(function(err){
    if(err){
        console.info('mysql数据连接失败...');
    }else{
        console.info("mysql数据连接成功...");
        connection.end(function(err){
            if(err){
                console.info('MySQL数据关闭失败...');
            }else{
                console.info("mysql数据关闭成功...");
            }
        });
    }
})