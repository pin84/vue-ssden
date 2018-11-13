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
-- Table structure for table `u1_p1_s1`
--

DROP TABLE IF EXISTS `u1_p1_s1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `u1_p1_s1` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `strong` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `mp3` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `c1` varchar(100) DEFAULT NULL,
  `zh1` varchar(100) DEFAULT NULL,
  `c2` varchar(100) DEFAULT NULL,
  `zh2` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `u1_p1_s1`
--

LOCK TABLES `u1_p1_s1` WRITE;
/*!40000 ALTER TABLE `u1_p1_s1` DISABLE KEYS */;
INSERT INTO `u1_p1_s1` VALUES (1,'1.	the other day 前几天；不久前的一天','a01','1)	I saw him in town the other day. ','我前几天在镇上见过他。','2)	It was a terrible piece of work you turned in the other day. ','那天你交的作业太糟糕了。'),(2,'2.	arrange []  v. 安排；准备','a02','1)	They arranged to meet at seven o’clock.	','他们约好7点钟见面。','2)	I have arranged to meet him at the restaurant. ','	我和他约好了在饭馆见面。'),(3,'3.	particularly []  adv. 很大程度上；特别地','a03','1)	I particularly like the brown shoes. ','我尤其喜爱棕色的鞋。','2)	I didn’t particularly want to go, but I had to. ','我本来不太想去，但还是不得不去了。'),(4,'4.	rough []  adj. 危险的；粗暴的','a04','1)	It was quite a rough part of our town. ','这是我们小镇上比较危险的一个区域。','2)	They complained rough handling by the police. ','他们抱怨受到警察粗野的对待。'),(5,'5.	as usual 照例；和平常一样','a05','1)	As usual, I slept late that Saturday night. ','和平常一样，那个星期六晚上我又睡晚了。','2)	He should be bringing his guitar tonight, as usual. ','他今晚肯定跟平常一样会带吉他来。'),(6,'6.	guy []  n. [非正式用语]人；家伙','a06','1)	He’s a really nice guy.',' 他是个很好的人。','2)	Who’s that guy she’s with? ','跟她在一起的家伙是谁？'),(7,'7.	bar []  n. 酒吧','a07','1)	There are several bars in the hotel.',' 旅馆里有好几个酒吧。','2)	We went to a bar for a drink. ','我们去一家酒吧喝点东西。'),(8,'8.	lonely []  adj. 孤独的；寂寞的','a08','1)	I feel very lonely without my dog. ','我的狗不在身边，我觉得很寂寞。','2)	I live alone but I hardly feel lonely. ','我虽独居，但几乎不感到孤寂。'),(9,'9.	manager []  n. 经理','a09','1)	Our manager has a strong will.','我们经理有着坚强的意志。','2)	I’d like to speak to the manager, please. ','我想找你们经理谈一下。'),(10,'10.	somewhere []  adv. 在某处；到某处','a10','1)	I’ve seen you somewhere before. ','我以前在哪里见过你。','2)	Go and play somewhere else—I’m trying to work. ','到别的地方去玩——我要工作了。'),(11,'11.	on one’s own 独自；独立地','a11','1)	She got the job on her own. ','她靠自己找到了这份工作。','2)	I like living on my own.',' 我喜欢独自生活。'),(12,'12.	finally []  adv. 最后；终于','a12','1)	We finally got home at midnight. ','我们终于在午夜到了家。','2)	After months of looking he finally found a job. ','经过数月的寻找，他终于有了工作。'),(13,'13.	turn up 出现；到达','a13','1)	Several old friends turned up at the reunion. ','好几个老朋友出现在聚会上。','2)	He turned up for dinner in the end. ','他最终还是出席了晚餐。'),(14,'14.	typical []  adj. 典型的','a14','1)	It is typical of her to forget birthdays. ','她这人老忘记别人的生日。','2)	This is a typical British pub. ','这是典型的英式小酒馆。'),(15,'15.	conversation []  n. 交谈；谈话','a15','1)	I had an interesting conversation with your uncle. ','我和你叔叔有过一次有趣的交谈。','2)	He is a talkative guy, and I struck up a conversation with him. ','他很健谈，我刚和他聊上了。'),(16,'16.	awful []  adj. 极坏的；糟糕的','a16','1)	The film was awful. ','那部电影糟透了。','2)	It was awful to see him in such pain. ','看到他这样痛苦真叫人难过。'),(17,'17.	vary []  v. （体积、容积或力量等）呈现不同','a17','1)	Opinions vary on this point. ','对这一点看法各异。','2)	Test scores vary from school to school.',' 各个学校的测验成绩有差异。'),(18,'18.	completely []  adv. 完全地；彻底地','a18','1)	The operation was completely successful.',' 手术相当成功。','2)	It’s completely different from what I expected. ','这与我的预期完全不同。'),(19,'19.	hopeless []  adj. 绝望的；没有希望的','a19','1)	Leave me alone. I’m hopeless. ','别管我。我已经彻底绝望了。','2)	He’s hopeless at math. ','他的数学很糟糕。'),(20,'20.	basically []  adv. 基本上；主要地','a20','1)	They basically do what they are supposed to. ','他们基本上做些该做的工作。','2)	The village has remained basically unchanged for over 300 years. ','三百年来，这个村子基本保持不变。'),(21,'21.	at least 至少','a21','1)	You’ll have to wait at least an hour.',' 你至少得等一个小时。','2)	She’s completely homeless, but at least I have my parents to fall back on.','她是真正的无家可归，但我至少有父母可以依靠。'),(22,'22.	suppose []  v. 假定；猜想','a22','1)	I suppose you want to borrow money from me again? ','我猜你又要找我借钱了吧？','2)	Scientists supposed that large dinosaurs lived in swamps. ','科学家们猜想大型恐龙栖居于沼泽地中。'),(23,'23.	spoil []  v. 毁掉；损坏','a23','1)	The bad news spoiled my day. ','坏消息把我这一天给毁了。','2)	The new road has completely spoiled the character of the village. ','新修的路彻底毁掉了那个村庄的特色。'),(24,'24.	guess []  v. 猜测；猜中','a24','1)	I didn’t know the answer, so I had to guess. ','我不知道答案，所以只能猜测。','2)	She’s guessed where we’re going. ','她已猜出我们要去哪里。'),(25,'25.	sign []  n. 征兆；迹象','a25','1)	There was no sign of life in the place. ','那儿没有生命迹象。','2)	She shows no sign of interest.',' 她没有表示出任何的兴趣。');
/*!40000 ALTER TABLE `u1_p1_s1` ENABLE KEYS */;
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
