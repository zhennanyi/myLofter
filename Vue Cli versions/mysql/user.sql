#更改数据库编码
SET NAMES UTF8;
#删除可能存在的数据库
DROP DATABASE IF EXISTS lofter;
#创建一个学子数据库
CREATE DATABASE lofter CHARSET=UTF8;
USE lofter;
#创建用户信息表
CREATE TABLE lofteruser(
	  lid INT PRIMARY KEY AUTO_INCREMENT,
	  uname VARCHAR(16),#括号必须加值
	  phone VARCHAR(16),
	  email VARCHAR(32),
	  upwd  VARCHAR(16)
);

CREATE TABLE xm_index_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  details VARCHAR(128),
  pic VARCHAR(128),
  price DECIMAL(10,2),
  href VARCHAR(128),
);

