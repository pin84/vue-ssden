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
-- Table structure for table `u1_p2_02`
--

DROP TABLE IF EXISTS `u1_p2_02`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `u1_p2_02` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `p` varchar(200) DEFAULT NULL,
  `p_copy1` varchar(200) DEFAULT NULL,
  `p_copy2` varchar(200) DEFAULT NULL,
  `p_copy3` varchar(200) DEFAULT NULL,
  `p_copy4` varchar(200) DEFAULT NULL,
  `p_copy5` varchar(200) DEFAULT NULL,
  `p_copy6` varchar(200) DEFAULT NULL,
  `p_copy7` varchar(200) DEFAULT NULL,
  `p_copy8` varchar(200) DEFAULT NULL,
  `p_copy9` varchar(200) DEFAULT NULL,
  `p_copy10` varchar(200) DEFAULT NULL,
  `p_copy11` varchar(200) DEFAULT NULL,
  `p_copy12` varchar(200) DEFAULT NULL,
  `p_copy13` varchar(200) DEFAULT NULL,
  `p_copy14` varchar(200) DEFAULT NULL,
  `p_copy15` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `u1_p2_02`
--

LOCK TABLES `u1_p2_02` WRITE;
/*!40000 ALTER TABLE `u1_p2_02` DISABLE KEYS */;
INSERT INTO `u1_p2_02` VALUES (1,'2.1 名词所有格的构成','英语中，有很多名词都是由名词加-’s来表示所有关系的，此形式称为名词所有格，其构成主要有以下几种情况：','(1)	单数名词和不以-s结尾的复数名词一般在词尾加-’s，如：','my sister’s book, Linda’s pen, policemen’s opinions, women’s hobbies','(2)	以-s结尾的复数名词，则只要加一个-’即可，如：','the teachers’ office, workers’ time','(3)	复合名词和作为一个整体的名词短语则在最后一个词的词尾加-’s，如：','the Secretary of State’s visit, my brother-in-law’s friend','(4)	以-s结尾且其发音为[]的专有名词，其所有格形式用-’s或-’均可，如：','Mr. Jones’ house或Mr. Jones’s house','但以-s结尾且其发音不是[]的专有名词，其所有格形式用-’s, 如：',NULL,NULL,NULL,NULL,NULL,NULL),(2,'2.2 名词所有格的用法','(1)	表示有生命的名词，尤其用于人或较高级动物的名词：','1)	What’s your favorite children’s book from when you were a kid?','2)	From the plane, we had a bird’s eye view of Manhattan.','(2)	表示时间、距离、价格等名词：','1)	The winner will receive eighty pounds’ worth of books.','2)	It’s about half an hour’s train ride from here.','(3)	表示地理、国家、城市等地方的名词：','1)	The Burj Khalifa, now the world’s tallest building, is 2,717 feet high.','2)	How is Chicago’s weather in spring?','(4)	表示集体、机构等的名词：','1)	They asked for further clarification of the government’s plans.','2)	The school’s music group will be giving a big show tomorrow night.','(5)	用在某些固定的词组中：','1)	She was at her wit’s end wondering how she’d manage to finish it in time.','2)	She paused, imagining the scene in her mind’s eye.',NULL),(3,'2.3 所有格所修饰词省略的情况','(1)	名词所有格所修饰的词在上文已经出现过，可以省略，以避免重复：','1)	—Whose car is this?\n—It’s Peter’s.\n','2)	Her father seems to be stricter than Mary’s.','(2)	可以用来表示店铺、教堂、公司的名字或表示某人的家：','1)	She often does her shopping at Macy’s.','2)	I went to Jason’s, only to find that he was at his cousin’s.','(3)	定冠词the加上某些名词的所有格表示一种场所：','1)	I’m going to the barber’s to get my hair cut.','2)	They’re freshly baked. I fetched them from the baker’s this morning.',NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `u1_p2_02` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-11-13 15:36:10
