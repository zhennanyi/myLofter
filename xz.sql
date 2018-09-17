

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `xz_index_carousel`
-- ----------------------------
DROP TABLE IF EXISTS `xz_index_carousel`;
CREATE TABLE `xz_index_carousel` (
  `cid` int(11) NOT NULL auto_increment,
  `img` varchar(128) default NULL,
  `title` varchar(64) default NULL,
  `href` varchar(128) default NULL,
  PRIMARY KEY  (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xz_index_carousel
-- ----------------------------
INSERT INTO `xz_index_carousel` VALUES ('9', 'img/index/banner1.png', '轮播广告商品1', 'product_details.html?lid=28');
INSERT INTO `xz_index_carousel` VALUES ('10', 'img/index/banner2.png', '轮播广告商品2', 'product_details.html?lid=19');
INSERT INTO `xz_index_carousel` VALUES ('11', 'img/index/banner3.png', '轮播广告商品3', 'lookforward.html');
INSERT INTO `xz_index_carousel` VALUES ('12', 'img/index/banner4.png', '轮播广告商品4', 'lookforward.html');

-- ----------------------------
-- Table structure for `xz_index_product`
-- ----------------------------
DROP TABLE IF EXISTS `xz_index_product`;
CREATE TABLE `xz_index_product` (
  `pid` int(11) NOT NULL auto_increment,
  `title` varchar(64) default NULL,
  `details` varchar(128) default NULL,
  `pic` varchar(128) default NULL,
  `price` decimal(10,2) default NULL,
  `href` varchar(128) default NULL,
  `seq_recommended` tinyint(4) default NULL,
  `seq_new_arrival` tinyint(4) default NULL,
  `seq_top_sale` tinyint(4) default NULL,
  PRIMARY KEY  (`pid`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xz_index_product
-- ----------------------------
INSERT INTO `xz_index_product` VALUES ('13', '戴尔灵越燃7000 轻薄窄边', '酷睿双核i5处理器|512GB SSD|2GB内存|英特尔HD显卡', 'img/index/study_computer_img3.png', '5199.00', 'product_details.html?lid=19', '6', '6', '6');
INSERT INTO `xz_index_product` VALUES ('14', '神州战神Z7M 高性价比游戏本', '酷睿双核i7处理器|1TGB SSD|8GB内存|英特尔HD游戏机独立显卡', 'img/index/study_computer_img4.png', '5799.00', 'product_details.html?lid=38', '0', '0', '0');

-- ----------------------------
-- Table structure for `xz_laptop`
-- ----------------------------
DROP TABLE IF EXISTS `xz_laptop`;
CREATE TABLE `xz_laptop` (
  `lid` int(11) NOT NULL auto_increment,
  `family_id` int(11) default NULL,
  `title` varchar(128) default NULL,
  `subtitle` varchar(128) default NULL,
  `price` decimal(10,2) default NULL,
  `promise` varchar(64) default NULL,
  `spec` varchar(64) default NULL,
  `lname` varchar(32) default NULL,
  `os` varchar(32) default NULL,
  `memory` varchar(32) default NULL,
  `resolution` varchar(32) default NULL,
  `video_card` varchar(32) default NULL,
  `cpu` varchar(32) default NULL,
  `video_memory` varchar(32) default NULL,
  `category` varchar(32) default NULL,
  `disk` varchar(32) default NULL,
  `details` varchar(1024) default NULL,
  `shelf_time` bigint(20) default NULL,
  `sold_count` int(11) default NULL,
  `is_onsale` tinyint(1) default NULL,
  PRIMARY KEY  (`lid`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xz_laptop
-- ----------------------------
INSERT INTO `xz_laptop` VALUES ('38', '10', '神舟(HASEE)战神Z7M-KP7GT 15.6英寸游戏本笔记本电脑(i7-7700HQ 8G 1T+128G SSD GTX1050Ti 1080P)IPS屏', '超强性价比！！', '6199.00', ' *退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货', 'Z7M GT【i7 128G+1T GTX1050Ti】', '神舟战神Z7M-KP7GT', 'Windows 10', '8G', '全高清屏(1920×1080)', 'GTX1050Ti', 'Intel i7标准电压版', '4G', '游戏本', '128G+1T', '<div class=\"content_tpl\"><div class=\"formwork\"><div class=\"formwork_img\"><img class=\"\" src=\"img/product/detail/58c67b22Ned66fcb8.jpg\"> <img class=\"\" src=\"img/product/detail/58c67b23Nfffc2f8b.jpg\"> <img class=\"\" src=\"img/product/detail/58c67b22N04b18388.jpg\"> <img class=\"\" src=\"img/product/detail/58c67b24N6d5ce71c.jpg\"> <img class=\"\" src=\"img/product/detail/58c67b24Nac3dc074.jpg\"> <img class=\"\" src=\"img/product/detail/58c67b22N8aa1905c.jpg\"> <img class=\"\" src=\"img/product/detail/58c67b24N9aa8a252.jpg\"></div></div></div>', '151123456789', '441', '0');
INSERT INTO `xz_laptop` VALUES ('39', '10', '神舟(HASEE)战神Z7M-SL7D2 15.6英寸游戏本笔记本电脑(i7-6700HQ 8G 1T+128GB SSD GTX965M 1080P)IPS', '六代i7 SSD GTX965M还预装WIN10，一步到位，你赢了！', '5499.00', ' *退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货', '战神Z7M【四核i7 GTX965M】', '神舟战神Z7M', 'Windows 10', '8G', '全高清屏(1920×1080)', 'GTX965M', 'Intel i7标准电压版', '4G', '游戏本', '128G+1T', '<div class=\"content_tpl\"><div class=\"formwork\"><div class=\"formwork_img\"><img class=\"\" src=\"img/product/detail/58c67b22Ned66fcb8.jpg\"> <img class=\"\" src=\"img/product/detail/58c67b23Nfffc2f8b.jpg\"> <img class=\"\" src=\"img/product/detail/58c67b22N04b18388.jpg\"> <img class=\"\" src=\"img/product/detail/58c67b24N6d5ce71c.jpg\"> <img class=\"\" src=\"img/product/detail/58c67b24Nac3dc074.jpg\"> <img class=\"\" src=\"img/product/detail/58c67b22N8aa1905c.jpg\"> <img class=\"\" src=\"img/product/detail/58c67b24N9aa8a252.jpg\"></div></div></div>', '152123456789', '1289', '1');
INSERT INTO `xz_laptop` VALUES ('40', '10', '神舟(HASEE)战神Z7M-SL5D1 15.6英寸游戏本笔记本电脑(i5-6300HQ 8G 1TB GTX965M 1080P)IPS屏', '超强性价比！！', '4499.00', ' *退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货', '战神Z7M【四核i5 GTX965M】', '神舟战神Z7M-SL5D1', 'Windows 10', '8G', '全高清屏(1920×1080)', 'GTX965M', 'Intel i7标准电压版', '2G', '游戏本', '1T', '<div class=\"content_tpl\"><div class=\"formwork\"><div class=\"formwork_img\"><img class=\"\" src=\"img/product/detail/58c67b22Ned66fcb8.jpg\"> <img class=\"\" src=\"img/product/detail/58c67b23Nfffc2f8b.jpg\"> <img class=\"\" src=\"img/product/detail/58c67b22N04b18388.jpg\"> <img class=\"\" src=\"img/product/detail/58c67b24N6d5ce71c.jpg\"> <img class=\"\" src=\"img/product/detail/58c67b24Nac3dc074.jpg\"> <img class=\"\" src=\"img/product/detail/58c67b22N8aa1905c.jpg\"> <img class=\"\" src=\"img/product/detail/58c67b24N9aa8a252.jpg\"></div></div></div>', '153123456789', '231', '0');
INSERT INTO `xz_laptop` VALUES ('41', '10', '神舟(HASEE)战神Z6-KP5GT 15.6英寸游戏本笔记本电脑(i5-7300HQ 8G 1T+128G SSD GTX1050 1080P)黑色', '超强性价比！！', '5199.00', ' *退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货', 'Z6 GT【i5 128G+1T GTX1050】', '神舟战神Z6-KP5GT', 'Windows 10', '8G', '全高清屏(1920×1080)', 'GTX1050', 'Intel i5标准电压版', '4G', '游戏本', '128G+1T', '<div class=\"content_tpl\"><div class=\"formwork\"><div class=\"formwork_img\"><img class=\"\" src=\"img/product/detail/58c67b22Ned66fcb8.jpg\"> <img class=\"\" src=\"img/product/detail/58c67b23Nfffc2f8b.jpg\"> <img class=\"\" src=\"img/product/detail/58c67b22N04b18388.jpg\"> <img class=\"\" src=\"img/product/detail/58c67b24N6d5ce71c.jpg\"> <img class=\"\" src=\"img/product/detail/58c67b24Nac3dc074.jpg\"> <img class=\"\" src=\"img/product/detail/58c67b22N8aa1905c.jpg\"> <img class=\"\" src=\"img/product/detail/58c67b24N9aa8a252.jpg\"></div></div></div>', '154123456789', '469', '1');
INSERT INTO `xz_laptop` VALUES ('42', '10', '神舟(HASEE) 战神G6-SL7S2 17.3英寸游戏笔记本(i7-6700HQ 8G 256G SSD GTX960M 2G独显 1080P)黑色', '17.3英寸大屏游戏本，纯固态硬盘，秒速开启超神之路！', '5499.00', ' *退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货', '战神G6【17.3英寸 GTX960M】', '神舟战神G6', 'Windows 10', '8G', '全高清屏(1920×1080)', 'GTX960M', 'Intel i7标准电压版', '4G', '游戏本', '256固态', '<div class=\"content_tpl\"><div class=\"formwork\"><div class=\"formwork_img\"><img class=\"\" src=\"img/product/detail/58c67b22Ned66fcb8.jpg\"> <img class=\"\" src=\"img/product/detail/58c67b23Nfffc2f8b.jpg\"> <img class=\"\" src=\"img/product/detail/58c67b22N04b18388.jpg\"> <img class=\"\" src=\"img/product/detail/58c67b24N6d5ce71c.jpg\"> <img class=\"\" src=\"img/product/detail/58c67b24Nac3dc074.jpg\"> <img class=\"\" src=\"img/product/detail/58c67b22N8aa1905c.jpg\"> <img class=\"\" src=\"img/product/detail/58c67b24N9aa8a252.jpg\"></div></div></div>', '155123456789', '1223', '0');
INSERT INTO `xz_laptop` VALUES ('43', '10', '神舟(HASEE)战神Z6-KP7GT 15.6英寸游戏本笔记本电脑(i7-7700HQ 8G 1T+128G SSD GTX1050 1080P)黑色', '预约享5499抢！【128G SSD+1T HDD】双硬盘，春风“十”里，期待是你！', '5699.00', ' *退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货', 'Z6 GT【i7 128G+1T GTX1050】', '神舟战神Z6-KP7GT', 'Windows 10', '8G', '全高清屏(1920×1080)', 'GTX1050', 'Intel i7标准电压版', '2G', '游戏本', '128G+1T', '<div class=\"content_tpl\"><div class=\"formwork\"><div class=\"formwork_img\"><img class=\"\" src=\"img/product/detail/58c67b22Ned66fcb8.jpg\"> <img class=\"\" src=\"img/product/detail/58c67b23Nfffc2f8b.jpg\"> <img class=\"\" src=\"img/product/detail/58c67b22N04b18388.jpg\"> <img class=\"\" src=\"img/product/detail/58c67b24N6d5ce71c.jpg\"> <img class=\"\" src=\"img/product/detail/58c67b24Nac3dc074.jpg\"> <img class=\"\" src=\"img/product/detail/58c67b22N8aa1905c.jpg\"> <img class=\"\" src=\"img/product/detail/58c67b24N9aa8a252.jpg\"></div></div></div>', '156123456789', '1844', '1');

-- ----------------------------
-- Table structure for `xz_laptop_family`
-- ----------------------------
DROP TABLE IF EXISTS `xz_laptop_family`;
CREATE TABLE `xz_laptop_family` (
  `fid` int(11) NOT NULL auto_increment,
  `fname` varchar(32) default NULL,
  PRIMARY KEY  (`fid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xz_laptop_family
-- ----------------------------
INSERT INTO `xz_laptop_family` VALUES ('1', 'AppleMacBookAir');
INSERT INTO `xz_laptop_family` VALUES ('2', '小米Air');
INSERT INTO `xz_laptop_family` VALUES ('3', 'ThinkPadE480C');
INSERT INTO `xz_laptop_family` VALUES ('4', '华硕RX310UQ');
INSERT INTO `xz_laptop_family` VALUES ('5', '联想小新700');
INSERT INTO `xz_laptop_family` VALUES ('6', '戴尔燃7000');
INSERT INTO `xz_laptop_family` VALUES ('7', '戴尔灵越15PR-5745B');
INSERT INTO `xz_laptop_family` VALUES ('8', 'ThinkPadE470 C');
INSERT INTO `xz_laptop_family` VALUES ('9', '华硕FH5900V');
INSERT INTO `xz_laptop_family` VALUES ('10', '神舟战神Z7M-KP7GT');

-- ----------------------------
-- Table structure for `xz_laptop_pic`
-- ----------------------------
DROP TABLE IF EXISTS `xz_laptop_pic`;
CREATE TABLE `xz_laptop_pic` (
  `pid` int(11) NOT NULL auto_increment,
  `laptop_id` int(11) default NULL,
  `sm` varchar(128) default NULL,
  `md` varchar(128) default NULL,
  `lg` varchar(128) default NULL,
  PRIMARY KEY  (`pid`)
) ENGINE=InnoDB AUTO_INCREMENT=297 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xz_laptop_pic
-- ----------------------------
INSERT INTO `xz_laptop_pic` VALUES ('295', '43', 'img/product/sm/58a2c668N0be41fb0.jpg', 'img/product/md/58a2c668N0be41fb0.jpg', 'img/product/lg/58a2c668N0be41fb0.jpg');
INSERT INTO `xz_laptop_pic` VALUES ('296', '43', 'img/product/sm/58a2c66aNcd10ee32.jpg', 'img/product/md/58a2c66aNcd10ee32.jpg', 'img/product/lg/58a2c66aNcd10ee32.jpg');

-- ----------------------------
-- Table structure for `xz_order`
-- ----------------------------
DROP TABLE IF EXISTS `xz_order`;
CREATE TABLE `xz_order` (
  `aid` int(11) NOT NULL auto_increment,
  `user_id` int(11) default NULL,
  `address_id` int(11) default NULL,
  `status` int(11) default NULL,
  `order_time` bigint(20) default NULL,
  `pay_time` bigint(20) default NULL,
  `deliver_time` bigint(20) default NULL,
  `received_time` bigint(20) default NULL,
  PRIMARY KEY  (`aid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xz_order
-- ----------------------------

-- ----------------------------
-- Table structure for `xz_order_detail`
-- ----------------------------
DROP TABLE IF EXISTS `xz_order_detail`;
CREATE TABLE `xz_order_detail` (
  `did` int(11) NOT NULL auto_increment,
  `order_id` int(11) default NULL,
  `product_id` int(11) default NULL,
  `count` int(11) default NULL,
  PRIMARY KEY  (`did`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xz_order_detail
-- ----------------------------

-- ----------------------------
-- Table structure for `xz_receiver_address`
-- ----------------------------
DROP TABLE IF EXISTS `xz_receiver_address`;
CREATE TABLE `xz_receiver_address` (
  `aid` int(11) NOT NULL auto_increment,
  `user_id` int(11) default NULL,
  `receiver` varchar(16) default NULL,
  `province` varchar(16) default NULL,
  `city` varchar(16) default NULL,
  `county` varchar(16) default NULL,
  `address` varchar(128) default NULL,
  `cellphone` varchar(16) default NULL,
  `fixedphone` varchar(16) default NULL,
  `postcode` char(6) default NULL,
  `tag` varchar(16) default NULL,
  `is_default` tinyint(1) default NULL,
  PRIMARY KEY  (`aid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xz_receiver_address
-- ----------------------------

-- ----------------------------
-- Table structure for `xz_shoppingcart_item`
-- ----------------------------
DROP TABLE IF EXISTS `xz_shoppingcart_item`;
CREATE TABLE `xz_shoppingcart_item` (
  `iid` int(11) NOT NULL auto_increment,
  `user_id` int(11) default NULL,
  `product_id` int(11) default NULL,
  `count` int(11) default NULL,
  `is_checked` tinyint(1) default NULL,
  PRIMARY KEY  (`iid`)
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xz_shoppingcart_item
-- ----------------------------
INSERT INTO `xz_shoppingcart_item` VALUES ('63', '72', '9', '1', '1');
INSERT INTO `xz_shoppingcart_item` VALUES ('64', '82', '1', '1', '1');
INSERT INTO `xz_shoppingcart_item` VALUES ('65', '83', '17', '1', '1');
INSERT INTO `xz_shoppingcart_item` VALUES ('66', '35', '28', '4', '0');
INSERT INTO `xz_shoppingcart_item` VALUES ('67', '65', '40', '2', '0');

-- ----------------------------
-- Table structure for `xz_user`
-- ----------------------------
DROP TABLE IF EXISTS `xz_user`;
CREATE TABLE `xz_user` (
  `uid` int(11) NOT NULL auto_increment,
  `uname` varchar(32) default NULL,
  `upwd` varchar(32) default NULL,
  `email` varchar(64) default NULL,
  `phone` varchar(16) default NULL,
  `avatar` varchar(128) default NULL,
  `user_name` varchar(32) default NULL,
  `gender` int(11) default NULL,
  PRIMARY KEY  (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xz_user
-- ----------------------------
INSERT INTO `xz_user` VALUES ('81', 'hushuang', '123456', '850248813@qq.com', '15802507525', null, null, null);
INSERT INTO `xz_user` VALUES ('82', 'test713', '2017713', '12458148@qq.com', '13596542654', null, null, null);
INSERT INTO `xz_user` VALUES ('83', 'fhr9588', '000009588', '111111111@qq.com', '12345666666', null, null, null);
INSERT INTO `xz_user` VALUES ('84', 'baibaidexue', '13809024377', '408130701@qq.com', '18301973827', null, null, null);
INSERT INTO `xz_user` VALUES ('85', 'tom10', '123456', '123@163.com', '12323456', null, null, null);
INSERT INTO `xz_user` VALUES ('86', '12121', '121212', '516898@qq.com', '15163222922', null, null, null);
INSERT INTO `xz_user` VALUES ('87', 'qwer', 'qwer123', '519808982@qq.com', '15163222923', null, null, null);
INSERT INTO `xz_user` VALUES ('88', '芳芳。。', '111111', '627265@qq.com', '17704622223', null, null, null);
INSERT INTO `xz_user` VALUES ('89', 'smm123456', '963852741', '974255093@qq.com', '15098807312', null, null, null);
INSERT INTO `xz_user` VALUES ('90', 'Wenhua.Li', 'libenka', 'wenhua.li@tedu.cn', '13912345678', null, null, null);
