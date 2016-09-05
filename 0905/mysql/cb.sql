--创建数据库
create database stusys character set utf8;

--切换数据库到 stusys

use stusys

--创建班级信息表
create table classInfo(
    cid int primary key auto_increment,
    cname varchar(100) not null unique,
    status int
);

--修改自增的起始值
alter table classInfo auto_increment=1001;

--创建学生信息表
create table stuInfo(
    sid int primary key auto_increment,  --学号
    sname varchar(100) not null,  --姓名
    cid int,
    sex varchar(4),
    age int,
    pwd varchar(100),
    tel varchar(15)
);

--修改学号的开始
alter table stuInfo auto_increment=10001;

--添加班级的出事数据  注意：mysql中自增列用0代替
insert into classInfo values(0,'yc24',1);
insert into classInfo values(0,'yc25',1);
insert into classInfo values(0,'yc26',1);

--添加学生的初始数据
insert into stuInfo values(0,"滴滴",1001,男)