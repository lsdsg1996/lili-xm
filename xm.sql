SET NAMES UTF8;
DROP DATABASE IF EXISTS xm;
CREATE DATABASE xm CHARSET=UTF8;
USE xm;

CREATE TABLE xm_user(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	gender VARCHAR(5),
	name VARCHAR(32),
	username VARCHAR(32),
	gamename VARCHAR(32),
	password VARCHAR(32),
	user_text VARCHAR(50),
	user_img VARCHAR(50) DEFAULT 'moren.png' COMMENT '�û�ͷ��'
);

INSERT INTO xm_user VALUES
(1,1,'liusheng','dsgls1996','MR.LEO','19960324','我认你做大哥,你教我写代码','head.jpg'),
(2,2,'lishuxiao','lishuxiao','lishuxiao','lishuxiao','代码王!',NULL);