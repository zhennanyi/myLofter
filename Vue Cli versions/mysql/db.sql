#更改数据库编码
SET NAMES UTF8;
#删除可能存在的数据库
DROP DATABASE IF EXISTS my;
CREATE DATABASE my CHARSET=utf8;
USE my;
CREATE TABLE lofteruser(
	  lid INT PRIMARY KEY AUTO_INCREMENT,
	  uname VARCHAR(16),#括号必须加值
	  phone VARCHAR(16),
	  email VARCHAR(32),
	  upwd  VARCHAR(16)
);
INSERT INTO lofteruser VALUES(null,"aa",'18912345678','qq@qq.com',md5("123"));

CREATE TABLE xz_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(25),
    upwd VARCHAR(32)
);
INSERT INTO xz_user VALUES(null,"aa",md5("123"));
INSERT INTO xz_user VALUES(null,"bb",md5("123"));
INSERT INTO xz_user VALUES(null,"cc",md5("123"));

SELECT COUNT(uid) as c FROM xz_user WHERE uname = 'yuyu' AND upwd = md5('123');

CREATE TABLE xz_imagelist(
 id INT PRIMARY KEY AUTO_INCREMENT,
 img_url VARCHAR(255),
 title VARCHAR(50)
);

INSERT INTO xz_imagelist VALUES(null,'http://127.0.0.1:3000/img/banner1.png','ͼƬ1');
INSERT INTO xz_imagelist VALUES(null,'http://127.0.0.1:3000/img/banner2.png','ͼƬ2');
INSERT INTO xz_imagelist VALUES(null,'http://127.0.0.1:3000/img/banner3.png','ͼƬ3');
INSERT INTO xz_imagelist VALUES(null,'http://127.0.0.1:3000/img/banner4.png','ͼƬ4');

CREATE TABLE picurl(
 id INT PRIMARY KEY AUTO_INCREMENT,
 pic VARCHAR(255),
 title VARCHAR(70),
 author VARCHAR(70)
);

INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/box-drawing/01.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/box-drawing/04.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/box-drawing/01.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/box-drawing/04.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/box-drawing/01.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/box-drawing/04.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/box-drawing/01.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/box-drawing/04.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/box-drawing/01.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/box-drawing/04.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/box-drawing/01.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/box-drawing/04.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO');
INSERT INTO picurl VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO');



CREATE TABLE addproduct(
 lid INT PRIMARY KEY AUTO_INCREMENT,
 pic VARCHAR(255),
 title VARCHAR(70),
author VARCHAR(70),
spec VARCHAR(70),
price VARCHAR(20)

);

INSERT INTO addproduct VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO','黑色','140');
INSERT INTO addproduct VALUES(null,'http://127.0.0.1:5000/img/8888.jpg','陪伴是最长情的告白', '儿童插画师-MO','黑色','140');

CREATE TABLE xz_news(
 id INT PRIMARY KEY AUTO_INCREMENT,
 title VARCHAR(255),
 content VARCHAR(2000),
 click INT,
 img_url VARCHAR(255),
 price DECIMAL(10,2),
 ctime DATETIME
);
INSERT INTO xz_news VALUES(null,'123','123','0','http://127.0.0.1:3000/banner1.png',0,now());
INSERT INTO xz_news VALUES(null,'111','123','0','http://127.0.0.1:3000/banner1.png',0,now());
INSERT INTO xz_news VALUES(null,'222','123','0','http://127.0.0.1:3000/banner1.png',0,now());
INSERT INTO xz_news VALUES(null,'333','123','0','http://127.0.0.1:3000/banner1.png',0,now());
INSERT INTO xz_news VALUES(null,'444','123','0','http://127.0.0.1:3000/banner1.png',0,now());
INSERT INTO xz_news VALUES(null,'555','123','0','http://127.0.0.1:3000/banner1.png',0,now());
INSERT INTO xz_news VALUES(null,'666','123','0','http://127.0.0.1:3000/banner1.png',0,now());
INSERT INTO xz_news VALUES(null,'777','123','0','http://127.0.0.1:3000/banner1.png',0,now());
INSERT INTO xz_news VALUES(null,'888','123','0','http://127.0.0.1:3000/banner1.png',0,now());
INSERT INTO xz_news VALUES(null,'999','123','0','http://127.0.0.1:3000/banner1.png',0,now());
INSERT INTO xz_news VALUES(null,'113','123','0','http://127.0.0.1:3000/banner1.png',0,now());
INSERT INTO xz_news VALUES(null,'765','123','0','http://127.0.0.1:3000/banner1.png',0,now());
INSERT INTO xz_news VALUES(null,'234','123','0','http://127.0.0.1:3000/banner1.png',0,now());
INSERT INTO xz_news VALUES(null,'786','123','0','http://127.0.0.1:3000/banner1.png',0,now());
INSERT INTO xz_news VALUES(null,'112','123','0','http://127.0.0.1:3000/banner1.png',0,now());
INSERT INTO xz_news VALUES(null,'098','123','0','http://127.0.0.1:3000/banner1.png',0,now());
INSERT INTO xz_news VALUES(null,'567','123','0','http://127.0.0.1:3000/banner1.png',0,now());
INSERT INTO xz_news VALUES(null,'789','123','0','http://127.0.0.1:3000/banner1.png',0,now());
INSERT INTO xz_news VALUES(null,'456','123','0','http://127.0.0.1:3000/banner1.png',0,now());
INSERT INTO xz_news VALUES(null,'248','123','0','http://127.0.0.1:3000/banner1.png',0,now());