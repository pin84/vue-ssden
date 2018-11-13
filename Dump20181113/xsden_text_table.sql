-- MySQL dump 10.13  Distrib 8.0.12, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: xsden
-- ------------------------------------------------------
-- Server version	8.0.12

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
-- Table structure for table `text_table`
--

DROP TABLE IF EXISTS `text_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `text_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `text` text NOT NULL,
  `text_ch` text,
  `mp3` varchar(45) NOT NULL,
  `chapter` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `text_table`
--

LOCK TABLES `text_table` WRITE;
/*!40000 ALTER TABLE `text_table` DISABLE KEYS */;
INSERT INTO `text_table` VALUES (1,'Text A Waiting for Ages!','[1]  I know it might sound strange, but recently I’ve started thinking about what the places you arrange to meet say about you. Let me give you an example of what I mean. The other day, I arranged to meet a friend of mine outside the post office in Moss Side, a particularly rough area of Manchester. My friend was late—as usual. I had to wait for half an hour in the street, watching the police drive by and the rain come down. While I was there, two people asked me for money and a big guy came up to me and said, “What are you looking at?” I suddenly thought, “What am I doing here? This is a terrible place to meet!”','[1] 我知道这听起来或许有些奇怪，但最近我开始思考这么一个问题：人们安排的会面地点能反映出这个人的哪些方面呢？让我来举例说明一下。前些天，我安排和一个朋友在莫斯赛德的邮局外会面，莫斯赛德是曼彻斯特犯罪率较高的区域。像往常一样，我的朋友迟到了。我只好在街上等了半小时，看着警车经过，天也开始下雨了。当我等在那里时，两个人向我要钱，一个大块头走近我说：“你在看什么？”我突然想：“我在这里做什么？这是一个槽糕的会面地点！”','t01',1),(2,'Text A Waiting for Ages!','[2]  When I was younger, I used to meet people at bus stops because I didn’t want my parents to see who I was going out with. I didn’t want to meet in a bar because if I was the first one there, I’d look lonely and the manager might ask me my age. Now that I’m older and don’t live with my parents, I don’t care if I have to sit in a café or somewhere like that by myself. I’d rather look a bit lonely than be outside, getting cold and wet.','[2] 在年少时我常常和人相约在公交车站见面，因为我不希望父母看到我和谁外出。我也不想在酒吧与朋友会面，因为如果我先到那里，我会显得很孤单，酒吧经理也可能会查问我的年龄。现在，我长大了，不再与父母同住，我不在乎单独坐在咖啡馆或类似的地方。我宁可看起来有点寂寞，也不想等在外面受寒淋雨。','t02',1),(3,'Text A Waiting for Ages!','[3]  The friend I met the other day is always worried about being left on her own in a bar, so I had to wait in the street. When she finally turned up, we had our typical opening conversation. “Jane, there you are. I was beginning to worry.” “Sorry. I’m late. The traffic was awful.” The excuse can vary, but it’s never, “I’m sorry, I’m completely hopeless. I was basically just wasting time window shopping because I wanted to make sure you were here first so that I didn’t have to wait around for you.” And then I said, “Oh, well, never mind. At least you’re here now.” “Have you been waiting long?” She asked. “No, only five minutes.” And off we went. I suppose I should have got angry, but I didn’t want to spoil the evening. I guess it’s a sign that I must be getting old.','[3] 那天我要见的那位朋友总是担心她被单独留在酒吧里，所以我不得不在街上等她。她终于出现了，接着是典型的开场白：“简，你终于来了，我都开始担心你了。”“对不起我来晚了，路上太堵了。”她可以换个借口，但她从来不这样做：“对不起，我彻底没救了，我基本上都是在逛街打发时间，因为我想要确定你先到这里，这样我就不用等你了。”我说：“噢，没关系。至少你现在到了。”“你等了很长时问吧？”她问道。“不，仅仅五分钟。”接着我们一起离开。我想我该生气，但我不想破坏那个晚上。我想这是我正变得成熟的一个标志。','t03',1),(4,'2',' arranged to meet a friend of mine outside the post office in Moss Side, a particularly rough area of Manchester. My friend was late—as usual. I had to wait for half an hour in the street, watching the police drive by and the rain come down. While I was there, two people asked me for money and a big guy came up to me and said,',NULL,'a01',2),(5,'2','ho I was going out with. I didn’t want to meet in a bar because if I was the first one there, I’d look lonely and the manager might ask me my age. Now that I’m older and don’t live with my parents, I don’t care if I have to sit in a ca',NULL,'a02',2),(11,'3','aaa',NULL,'a01',3),(12,'3','bb',NULL,'a02',3),(13,'3','cccc',NULL,'a03',3),(14,'4','dd',NULL,'a01',4),(15,'5','ee',NULL,'a02',5);
/*!40000 ALTER TABLE `text_table` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-11-13 15:36:11
