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
-- Table structure for table `u1_p2_01`
--

DROP TABLE IF EXISTS `u1_p2_01`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `u1_p2_01` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `p` varchar(200) DEFAULT NULL,
  `p2` varchar(200) DEFAULT NULL,
  `p3` varchar(200) DEFAULT NULL,
  `p4` varchar(200) DEFAULT NULL,
  `p5` varchar(200) DEFAULT NULL,
  `p6` varchar(200) DEFAULT NULL,
  `p7` varchar(200) DEFAULT NULL,
  `p8` varchar(200) DEFAULT NULL,
  `p9` varchar(200) DEFAULT NULL,
  `p10` varchar(200) DEFAULT NULL,
  `p11` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `u1_p2_01`
--

LOCK TABLES `u1_p2_01` WRITE;
/*!40000 ALTER TABLE `u1_p2_01` DISABLE KEYS */;
INSERT INTO `u1_p2_01` VALUES (1,'1.1 专有名词','专有名词是个人、国家、地方、机构、组织等专有的名称，如Bill Clinton, China, Hangzhou, Zhejiang University等。专有名词的首字母要大写，一般不用冠词。','1)	Harvard University is the oldest institution of higher education in the United States.','2)	The new show will open on Broadway next month.','当表示组织、机构、杂志、书籍等专有名词时，有时也与the或其他限定词连用。','1)	The Beatles was an English rock band, active throughout the 1960s.','2)	The United Nations officially came into existence on October 24, 1945.','很多专有名词已经接近于或转化为普通名词，前面可以带不定冠词或其他限定词，也可以有复数形式。','1)	My school’s basketball team met their Waterloo(滑铁卢；惨败) yesterday.','2)	LeBron does not have the desire to do what it takes to be a Michael Jordan.',NULL,NULL),(2,'1.2 个体名词','个体名词表示作为个体而存在的人或东西。个体名词有复数形式，单数形式可以和不定冠词连用。','1)	Don’t sign anything until you’ve consulted a lawyer.','2)	The computers are all down(崩溃) at the moment.',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(3,'1.3 集体名词','集体名词表示若干个体组成的集合体，如class, committee(委员会), family, staff, public等。集体名词有时作单数看待，有时作复数看待。通常说来，视为整体时作单数看待，强调个体成员时作复数看待。','1)	The Webb family has a farm over there.','2)	Our entire family are going to Grandpa’s 80th birthday party.',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(4,'1.4 物质名词','物质名词表示无法切分为个体的实物。物质名词往往是不可数的，但有些物质名词可用作可数名词，表示“一份”“一杯”“一种”。','1)	Let’s go for a coffee when you’ve finished your essay.','2)	Longjing is a well-known tea in China.','值得注意的是，有些名词既可以作物质名词，也可以作个体名词，但意思会产生一些变化。','1)	Write it down on a piece of paper. (这里paper指的是纸)','2)	Do you subscribe to a daily paper? (这里paper指的是报纸)','类似的词还有：iron(铁；熨斗), glass(玻璃；玻璃杯), wood(木头；树林)等。',NULL,NULL,NULL,NULL),(5,'1.5 抽象名词','抽象名词表示动作、状态、品质、感情等抽象概念。一般来说，抽象名词也是不可数的，因此没有复数形式，前面也不加不定冠词。','1)	Paul’s face was filled with anger.','2)	Honesty is the best policy.','也有一些抽象名词，当意思转变而表示某类个体时，就成了个体名词。','1)	Gardening gives many people great pleasure. (这里pleasure是抽象名词，指的是喜悦)','2)	Swimming is one of my greatest pleasures. (这里pleasure是个体名词，指的是令人开心的事)','类似的词还有：youth(青春；青年人), necessity(必要性；必需品), beauty(美丽；美丽的人或物)等。',NULL,NULL,NULL,NULL),(6,'1.6 可数名词与不可数名词','在英语中，可数名词与不可数名词的区分显得尤为重要，因为它涉及一个名词的形式和它前面是否可以加冠词以及加哪种冠词的问题。一般来说，个体名词和集体名词可以用数目来计算，称为可数名词；物质名词和抽象名词一般无法用数目来计算，称为不可数名词。','可数名词前可用定冠词、不定冠词、数词等充当限定词，有复数形式。','1)	I took the dog for a walk.','2)	There are many dogs in the village.','不可数名词没有复数形式，前面不能加不定冠词或数词，但可用the或不用。','1)	Bread is made from flour.','2)	If you pay for the bread, I will pay for the meat.','有不少名词在英语中是不可数的，但在汉语中却是可数的，在使用这类词时，学习','1)	Each piece of furniture in their home suited the style of the house.','2)	I have one or two useful pieces of information to pass on to you.','类似的词还有：equipment, clothing, news, paper, chocolate, grass等。');
/*!40000 ALTER TABLE `u1_p2_01` ENABLE KEYS */;
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
