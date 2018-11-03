-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: xsden
-- ------------------------------------------------------
-- Server version	8.0.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `u1_p1_s2`
--

DROP TABLE IF EXISTS `u1_p1_s2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `u1_p1_s2` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `strong` varchar(150) DEFAULT NULL,
  `p1` varchar(150) DEFAULT NULL,
  `p2` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `u1_p1_s2`
--

LOCK TABLES `u1_p1_s2` WRITE;
/*!40000 ALTER TABLE `u1_p1_s2` DISABLE KEYS */;
INSERT INTO `u1_p1_s2` VALUES (1,'1.	…but recently I’ve started thinking about what the places you arrange to meet say about you. [Para. 1]','【句意】……但最近我开始思考这么一个问题：人们安排的会面地点能反映出这个人的哪些方面呢？','【解析】what引导宾语从句，又在宾语从句中作动词say的宾语。'),(2,'2.	...Moss Side, a particularly rough area of Manchester. [Para. 1]','【句意】莫斯赛德是曼彻斯特犯罪率较高的区域。','【解析】a particularly rough area of Manchester是Moss Side的同位语，解释说明 Moss Side。a rough area指犯罪率较高的区域，如贩毒和卖淫等。'),(3,'3.	I had to wait for half an hour in the street, watching the police drive by and the rain come down. [Para. 1]','【句意】我只好在街上等了半小时，看着警车经过，天也开始下雨了。','【解析】watching the police drive by and the rain come down是现在分词结构，其作用相当于状语从句，表示伴随状态。'),(4,'4.	When I was younger, I used to meet people at bus stops because I didn’t want my parents to see who I was going out with. [Para. 2]','【句意】在年少时我常常和人相约在公交车站见面，因为我不希望父母看到我和谁外出。','【解析】when引导时间状语从句；because引导原因状语从句；who引导宾语从句。'),(5,'5.	I’d rather look a bit lonely than be outside, getting cold and wet. [Para. 2]','【句意】我宁可看起来有点寂寞，也不想等在外面受寒淋雨。','【解析】would rather do sth. than do sth.表示“宁愿做……而不愿做……”；getting cold and wet是状语，修饰 be outside。'),(6,'6.	…worried about being left on her own in a bar… [Para. 3]','【句意】……担心被单独留在酒吧里……','【解析】being left为动名词的被动态，是worried about的宾语。'),(7,'7.	And off we go. [Para. 3]','【句意】接着我们一起离开。','【解析】这是倒装句，off 引起完全倒装。为了使描述生动形象，增强语言的印象效果，可将某些表示方向、方位的副词如down, up, out, in, off, away等置于句首，用完全倒装。'),(8,'8.	I guess it’s a sign that I must be getting old. [Para. 3]','【句意】我想这是我正变得成熟的一个标志。','【解析】that I must be getting old 是 sign 的同位语从句。');
/*!40000 ALTER TABLE `u1_p1_s2` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-11-03 16:29:38
