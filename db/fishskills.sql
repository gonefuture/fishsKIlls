-- MySQL dump 10.13  Distrib 5.5.36, for Win32 (x86)
--
-- Host: localhost    Database: fishskills
-- ------------------------------------------------------
-- Server version	5.5.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin` (
  `adminid` varchar(36) NOT NULL,
  `password` varchar(32) NOT NULL,
  `adminname` varchar(36) NOT NULL,
  `pid` int(6) DEFAULT NULL,
  `adminphone` varchar(36) DEFAULT NULL,
  `adminemail` varchar(50) DEFAULT NULL,
  `note` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`adminid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `admin_privilege`
--

DROP TABLE IF EXISTS `admin_privilege`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin_privilege` (
  `adminid` varchar(36) DEFAULT NULL,
  `pid` int(6) DEFAULT NULL,
  KEY `adminid` (`adminid`),
  KEY `pid` (`pid`),
  CONSTRAINT `admin_privilege_ibfk_1` FOREIGN KEY (`adminid`) REFERENCES `admin` (`adminid`),
  CONSTRAINT `admin_privilege_ibfk_2` FOREIGN KEY (`pid`) REFERENCES `privilege` (`pid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_privilege`
--

LOCK TABLES `admin_privilege` WRITE;
/*!40000 ALTER TABLE `admin_privilege` DISABLE KEYS */;
/*!40000 ALTER TABLE `admin_privilege` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dictionary`
--

DROP TABLE IF EXISTS `dictionary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dictionary` (
  `did` int(36) NOT NULL,
  `name` varchar(50) NOT NULL,
  `pi` int(36) NOT NULL,
  PRIMARY KEY (`did`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dictionary`
--

LOCK TABLES `dictionary` WRITE;
/*!40000 ALTER TABLE `dictionary` DISABLE KEYS */;
/*!40000 ALTER TABLE `dictionary` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `download`
--

DROP TABLE IF EXISTS `download`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `download` (
  `id` varchar(36) NOT NULL,
  `name` varchar(32) NOT NULL,
  `downloadtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `downloadsource` varchar(50) NOT NULL,
  `adminid` varchar(36) DEFAULT NULL,
  `dictionaryid` int(36) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `download_admin` (`adminid`),
  KEY `download_dictionary` (`dictionaryid`),
  CONSTRAINT `download_admin` FOREIGN KEY (`adminid`) REFERENCES `admin` (`adminid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `download_dictionary` FOREIGN KEY (`dictionaryid`) REFERENCES `dictionary` (`did`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `download`
--

LOCK TABLES `download` WRITE;
/*!40000 ALTER TABLE `download` DISABLE KEYS */;
/*!40000 ALTER TABLE `download` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fish`
--

DROP TABLE IF EXISTS `fish`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fish` (
  `fishname` varchar(50) DEFAULT NULL,
  `fid` int(36) NOT NULL AUTO_INCREMENT,
  `type` varchar(50) DEFAULT NULL,
  `size` varchar(50) DEFAULT NULL,
  `price` int(36) DEFAULT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `adminid` varchar(36) DEFAULT NULL,
  `dictionaryid` int(36) DEFAULT NULL,
  PRIMARY KEY (`fid`),
  KEY `fish_admin` (`adminid`),
  KEY `fish_dictionary` (`dictionaryid`),
  CONSTRAINT `fish_admin` FOREIGN KEY (`adminid`) REFERENCES `admin` (`adminid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fish_dictionary` FOREIGN KEY (`dictionaryid`) REFERENCES `dictionary` (`did`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fish`
--

LOCK TABLES `fish` WRITE;
/*!40000 ALTER TABLE `fish` DISABLE KEYS */;
/*!40000 ALTER TABLE `fish` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `information`
--

DROP TABLE IF EXISTS `information`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `information` (
  `informationid` int(36) NOT NULL AUTO_INCREMENT,
  `informationname` varchar(50) DEFAULT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `name` varchar(50) DEFAULT NULL,
  `phone` int(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `address` char(50) DEFAULT NULL,
  `post` int(36) DEFAULT NULL,
  `information` text,
  `adminid` varchar(36) DEFAULT NULL,
  `source` char(50) DEFAULT NULL,
  `sourcename` char(50) DEFAULT NULL,
  `dictionaryid` int(36) DEFAULT NULL,
  PRIMARY KEY (`informationid`),
  KEY `information_admin` (`adminid`),
  KEY `information_dictionary` (`dictionaryid`),
  CONSTRAINT `information_admin` FOREIGN KEY (`adminid`) REFERENCES `admin` (`adminid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `information_dictionary` FOREIGN KEY (`dictionaryid`) REFERENCES `dictionary` (`did`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `information`
--

LOCK TABLES `information` WRITE;
/*!40000 ALTER TABLE `information` DISABLE KEYS */;
/*!40000 ALTER TABLE `information` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `market`
--

DROP TABLE IF EXISTS `market`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `market` (
  `marketid` int(36) NOT NULL AUTO_INCREMENT,
  `marketname` varchar(50) DEFAULT NULL,
  `province` char(50) DEFAULT NULL,
  `dictionaryid` int(36) DEFAULT NULL,
  `adminid` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`marketid`),
  KEY `market_admin` (`adminid`),
  KEY `market_dictionary` (`dictionaryid`),
  CONSTRAINT `market_admin` FOREIGN KEY (`adminid`) REFERENCES `admin` (`adminid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `market_dictionary` FOREIGN KEY (`dictionaryid`) REFERENCES `dictionary` (`did`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `market`
--

LOCK TABLES `market` WRITE;
/*!40000 ALTER TABLE `market` DISABLE KEYS */;
/*!40000 ALTER TABLE `market` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `news` (
  `nid` int(8) NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL,
  `pubdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `content` text,
  `lockflag` int(2) DEFAULT '1',
  `soucename` varchar(50) DEFAULT NULL,
  `adminid` varchar(36) DEFAULT NULL,
  `dictionaryid` int(36) DEFAULT NULL,
  PRIMARY KEY (`nid`),
  KEY `news_admin` (`adminid`),
  KEY `news_dictionary` (`dictionaryid`),
  CONSTRAINT `news_admin` FOREIGN KEY (`adminid`) REFERENCES `admin` (`adminid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `news_dictionary` FOREIGN KEY (`dictionaryid`) REFERENCES `dictionary` (`did`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `privilege`
--

DROP TABLE IF EXISTS `privilege`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `privilege` (
  `pid` int(6) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `note` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`pid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `privilege`
--

LOCK TABLES `privilege` WRITE;
/*!40000 ALTER TABLE `privilege` DISABLE KEYS */;
/*!40000 ALTER TABLE `privilege` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question`
--

DROP TABLE IF EXISTS `question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `question` (
  `questionid` int(50) NOT NULL AUTO_INCREMENT,
  `name` varchar(36) DEFAULT NULL,
  `phone` varchar(36) DEFAULT NULL,
  `theme` varchar(50) DEFAULT NULL,
  `details` text,
  `answer` text,
  `dictionaryid` int(36) DEFAULT NULL,
  `adminid` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`questionid`),
  KEY `question_admin` (`adminid`),
  KEY `question_dictionary` (`dictionaryid`),
  CONSTRAINT `question_admin` FOREIGN KEY (`adminid`) REFERENCES `admin` (`adminid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `question_dictionary` FOREIGN KEY (`dictionaryid`) REFERENCES `dictionary` (`did`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question`
--

LOCK TABLES `question` WRITE;
/*!40000 ALTER TABLE `question` DISABLE KEYS */;
/*!40000 ALTER TABLE `question` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-06-24 17:06:32
