-- MySQL dump 10.13  Distrib 8.0.12, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: dfbook
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
-- Table structure for table `content_table`
--

DROP TABLE IF EXISTS `content_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `content_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `text` text NOT NULL,
  `mp3` varchar(45) NOT NULL,
  `chapter` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `content_table`
--

LOCK TABLES `content_table` WRITE;
/*!40000 ALTER TABLE `content_table` DISABLE KEYS */;
INSERT INTO `content_table` VALUES (1,'Waiting for Ages!','I know it might sound strange, but recently I’ve started thinking about what the places you arrange to meet say about you. Let me give you an example of what I mean. The other day, I arranged to meet a friend of mine outside the post office in Moss Side, a particularly rough area of Manchester. My friend was late—as usual. I had to wait for half an hour in the street, watching the police drive by and the rain come down. While I was there, two people asked me for money and a big guy came up to me and said, “What are you looking at?” I suddenly thought, “What am I doing here? This is a terrible place to meet!”','a01',1),(2,'Waiting for Ages!','When I was younger, I used to meet people at bus stops because I didn’t want my parents to see who I was going out with. I didn’t want to meet in a bar because if I was the first one there, I’d look lonely and the manager might ask me my age. Now that I’m older and don’t live with my parents, I don’t care if I have to sit in a café or somewhere like that by myself. I’d rather look a bit lonely than be outside, getting cold and wet.','a02',1),(3,'Waiting for Ages!','The friend I met the other day is always worried about being left on her own in a bar, so I had to wait in the street. When she finally turned up, we had our typical opening conversation. “Jane, there you are. I was beginning to worry.” “Sorry. I’m late. The traffic was awful.” The excuse can vary, but it’s never, “I’m sorry, I’m completely hopeless. I was basically just wasting time window shopping because I wanted to make sure you were here first so that I didn’t have to wait around for you.” And then I said, “Oh, well, never mind. At least you’re here now.” “Have you been waiting long?” She asked. “No, only five minutes.” And off we went. I suppose I should have got angry, but I didn’t want to spoil the evening. I guess it’s a sign that I must be getting old.','a03',1),(4,'2',' arranged to meet a friend of mine outside the post office in Moss Side, a particularly rough area of Manchester. My friend was late—as usual. I had to wait for half an hour in the street, watching the police drive by and the rain come down. While I was there, two people asked me for money and a big guy came up to me and said,','a01',2),(5,'2','ho I was going out with. I didn’t want to meet in a bar because if I was the first one there, I’d look lonely and the manager might ask me my age. Now that I’m older and don’t live with my parents, I don’t care if I have to sit in a ca','a02',2),(11,'3','aaa','a01',3),(12,'3','bb','a02',3),(13,'3','cccc','a03',3),(14,'4','dd','a01',4),(15,'5','ee','a02',5);
/*!40000 ALTER TABLE `content_table` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-10-19 16:39:27
