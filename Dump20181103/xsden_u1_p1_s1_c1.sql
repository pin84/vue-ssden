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
-- Table structure for table `u1_p1_s1_c1`
--

DROP TABLE IF EXISTS `u1_p1_s1_c1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `u1_p1_s1_c1` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `span` varchar(200) NOT NULL,
  `p` varchar(200) NOT NULL,
  `fk_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `u1_p1_s1_c1`
--

LOCK TABLES `u1_p1_s1_c1` WRITE;
/*!40000 ALTER TABLE `u1_p1_s1_c1` DISABLE KEYS */;
INSERT INTO `u1_p1_s1_c1` VALUES (1,'1)	I saw him in town the other day. ','我前几天在镇上见过他。',1),(2,'2)	It was a terrible piece of work you turned in the other day. ','那天你交的作业太糟糕了。',1),(3,'1)	They arranged to meet at seven o’clock.	','他们约好7点钟见面。',2),(4,'2)	I have arranged to meet him at the restaurant. ','	我和他约好了在饭馆见面。',2),(5,'1)	I particularly like the brown shoes. ','我尤其喜爱棕色的鞋。',3),(6,'2)	I didn’t particularly want to go, but I had to. ','我本来不太想去，但还是不得不去了。',3),(7,'1)	It was quite a rough part of our town. ','这是我们小镇上比较危险的一个区域。',4),(8,'2)	They complained rough handling by the police. ','他们抱怨受到警察粗野的对待。',4);
/*!40000 ALTER TABLE `u1_p1_s1_c1` ENABLE KEYS */;
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
