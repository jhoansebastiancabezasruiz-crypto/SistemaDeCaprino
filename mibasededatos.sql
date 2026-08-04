-- MySQL dump 10.13  Distrib 8.0.46, for Win64 (x86_64)
--
-- Host: localhost    Database: capritech
-- ------------------------------------------------------
-- Server version	8.0.46

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `births`
--

DROP TABLE IF EXISTS `births`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `births` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fechaNacimiento` datetime NOT NULL,
  `raza` varchar(50) NOT NULL,
  `sexo` varchar(20) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `chapeta` int NOT NULL,
  `pesoNacimiento` decimal(10,2) NOT NULL,
  `chapetaMadre` int NOT NULL,
  `nombreMadre` varchar(100) NOT NULL,
  `razaMadre` varchar(50) NOT NULL,
  `chapetaPadre` int NOT NULL,
  `nombrePadre` varchar(100) NOT NULL,
  `razaPadre` varchar(50) NOT NULL,
  `gananciaPeso` decimal(10,2) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `chapeta` (`chapeta`),
  UNIQUE KEY `chapeta_2` (`chapeta`),
  UNIQUE KEY `chapeta_3` (`chapeta`),
  UNIQUE KEY `chapeta_4` (`chapeta`),
  UNIQUE KEY `chapeta_5` (`chapeta`),
  UNIQUE KEY `chapeta_6` (`chapeta`),
  UNIQUE KEY `chapeta_7` (`chapeta`),
  UNIQUE KEY `chapeta_8` (`chapeta`),
  UNIQUE KEY `chapeta_9` (`chapeta`),
  UNIQUE KEY `chapeta_10` (`chapeta`),
  UNIQUE KEY `chapeta_11` (`chapeta`),
  UNIQUE KEY `chapeta_12` (`chapeta`),
  UNIQUE KEY `chapeta_13` (`chapeta`),
  UNIQUE KEY `chapeta_14` (`chapeta`),
  UNIQUE KEY `chapeta_15` (`chapeta`),
  UNIQUE KEY `chapeta_16` (`chapeta`),
  UNIQUE KEY `chapeta_17` (`chapeta`),
  UNIQUE KEY `chapeta_18` (`chapeta`),
  UNIQUE KEY `chapeta_19` (`chapeta`),
  UNIQUE KEY `chapeta_20` (`chapeta`),
  UNIQUE KEY `chapeta_21` (`chapeta`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `births`
--

LOCK TABLES `births` WRITE;
/*!40000 ALTER TABLE `births` DISABLE KEYS */;
INSERT INTO `births` VALUES (1,'2026-08-03 00:00:00','Boer','Macho','Capitán',1001,3.80,501,'Luna','Boer',301,'Max','Boer',0.75,'2026-08-03 14:13:40','2026-08-03 14:13:40'),(2,'2026-07-15 00:00:00','Saanen','Hembra','Estrella',1002,3.20,502,'Blanca','Saanen',302,'Rayo','Saanen',0.60,'2026-08-03 14:14:51','2026-08-03 14:14:51');
/*!40000 ALTER TABLE `births` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `famachas`
--

DROP TABLE IF EXISTS `famachas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `famachas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `chapeta` int NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `resultadoPrueba` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `famachas`
--

LOCK TABLES `famachas` WRITE;
/*!40000 ALTER TABLE `famachas` DISABLE KEYS */;
/*!40000 ALTER TABLE `famachas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feedings`
--

DROP TABLE IF EXISTS `feedings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feedings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fecha` datetime NOT NULL,
  `hora` varchar(255) NOT NULL,
  `responsable` varchar(255) NOT NULL,
  `alimento` varchar(255) NOT NULL,
  `cantidad` decimal(10,2) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feedings`
--

LOCK TABLES `feedings` WRITE;
/*!40000 ALTER TABLE `feedings` DISABLE KEYS */;
/*!40000 ALTER TABLE `feedings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `livestock`
--

DROP TABLE IF EXISTS `livestock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `livestock` (
  `id` int NOT NULL AUTO_INCREMENT,
  `chapeta` varchar(255) NOT NULL,
  `raza` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `fechaNacimiento` datetime NOT NULL,
  `sexo` varchar(255) NOT NULL,
  `etapaProduccion` varchar(255) NOT NULL,
  `observaciones` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `livestock`
--

LOCK TABLES `livestock` WRITE;
/*!40000 ALTER TABLE `livestock` DISABLE KEYS */;
/*!40000 ALTER TABLE `livestock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mastitis`
--

DROP TABLE IF EXISTS `mastitis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mastitis` (
  `id` int NOT NULL AUTO_INCREMENT,
  `chapeta` int NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `fecha` datetime NOT NULL,
  `resultadoPrueba` varchar(255) NOT NULL,
  `observaciones` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mastitis`
--

LOCK TABLES `mastitis` WRITE;
/*!40000 ALTER TABLE `mastitis` DISABLE KEYS */;
/*!40000 ALTER TABLE `mastitis` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mortalities`
--

DROP TABLE IF EXISTS `mortalities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mortalities` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `date` datetime NOT NULL,
  `sex` varchar(255) NOT NULL,
  `production` varchar(255) NOT NULL,
  `diagnosis` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mortalities`
--

LOCK TABLES `mortalities` WRITE;
/*!40000 ALTER TABLE `mortalities` DISABLE KEYS */;
/*!40000 ALTER TABLE `mortalities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mounts`
--

DROP TABLE IF EXISTS `mounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mounts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fechaMonta` datetime NOT NULL,
  `numeroMonta` int NOT NULL,
  `nombreMacho` varchar(255) NOT NULL,
  `razaMacho` varchar(255) NOT NULL,
  `chapetaMacho` int NOT NULL,
  `nombreHembra` varchar(255) NOT NULL,
  `razaHembra` varchar(255) NOT NULL,
  `chapetaHembra` int NOT NULL,
  `posibleFechaParto` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mounts`
--

LOCK TABLES `mounts` WRITE;
/*!40000 ALTER TABLE `mounts` DISABLE KEYS */;
/*!40000 ALTER TABLE `mounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `production`
--

DROP TABLE IF EXISTS `production`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `production` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fecha` datetime NOT NULL,
  `descripcionElemento` varchar(255) NOT NULL,
  `unidadMedida` varchar(255) NOT NULL,
  `cantidad` decimal(10,2) NOT NULL,
  `valorUnitario` decimal(10,2) NOT NULL,
  `valorTotal` decimal(10,2) NOT NULL,
  `fechaVencimiento` datetime NOT NULL,
  `centroCosto` varchar(255) NOT NULL,
  `nombreTraslada` varchar(255) NOT NULL,
  `nombreRecibe` varchar(255) NOT NULL,
  `instructorTecnico` varchar(255) NOT NULL,
  `observaciones` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `production`
--

LOCK TABLES `production` WRITE;
/*!40000 ALTER TABLE `production` DISABLE KEYS */;
/*!40000 ALTER TABLE `production` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `responsibles`
--

DROP TABLE IF EXISTS `responsibles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `responsibles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `documento` int NOT NULL,
  `tipoResponsable` varchar(255) NOT NULL,
  `actividad` varchar(255) NOT NULL,
  `frecuencia` varchar(255) NOT NULL,
  `diaSemana` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `responsibles`
--

LOCK TABLES `responsibles` WRITE;
/*!40000 ALTER TABLE `responsibles` DISABLE KEYS */;
/*!40000 ALTER TABLE `responsibles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `documentId` varchar(255) NOT NULL,
  `postJobs` varchar(255) DEFAULT 'false',
  `verifyEmail` tinyint(1) DEFAULT '0',
  `active` tinyint(1) DEFAULT '0',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `documentId` (`documentId`),
  UNIQUE KEY `email_2` (`email`),
  UNIQUE KEY `documentId_2` (`documentId`),
  UNIQUE KEY `email_3` (`email`),
  UNIQUE KEY `documentId_3` (`documentId`),
  UNIQUE KEY `email_4` (`email`),
  UNIQUE KEY `documentId_4` (`documentId`),
  UNIQUE KEY `email_5` (`email`),
  UNIQUE KEY `documentId_5` (`documentId`),
  UNIQUE KEY `email_6` (`email`),
  UNIQUE KEY `documentId_6` (`documentId`),
  UNIQUE KEY `email_7` (`email`),
  UNIQUE KEY `documentId_7` (`documentId`),
  UNIQUE KEY `email_8` (`email`),
  UNIQUE KEY `documentId_8` (`documentId`),
  UNIQUE KEY `email_9` (`email`),
  UNIQUE KEY `documentId_9` (`documentId`),
  UNIQUE KEY `email_10` (`email`),
  UNIQUE KEY `documentId_10` (`documentId`),
  UNIQUE KEY `email_11` (`email`),
  UNIQUE KEY `documentId_11` (`documentId`),
  UNIQUE KEY `email_12` (`email`),
  UNIQUE KEY `documentId_12` (`documentId`),
  UNIQUE KEY `email_13` (`email`),
  UNIQUE KEY `documentId_13` (`documentId`),
  UNIQUE KEY `email_14` (`email`),
  UNIQUE KEY `documentId_14` (`documentId`),
  UNIQUE KEY `email_15` (`email`),
  UNIQUE KEY `documentId_15` (`documentId`),
  UNIQUE KEY `email_16` (`email`),
  UNIQUE KEY `documentId_16` (`documentId`),
  UNIQUE KEY `email_17` (`email`),
  UNIQUE KEY `documentId_17` (`documentId`),
  UNIQUE KEY `email_18` (`email`),
  UNIQUE KEY `documentId_18` (`documentId`),
  UNIQUE KEY `email_19` (`email`),
  UNIQUE KEY `documentId_19` (`documentId`),
  UNIQUE KEY `email_20` (`email`),
  UNIQUE KEY `documentId_20` (`documentId`),
  UNIQUE KEY `email_21` (`email`),
  UNIQUE KEY `documentId_21` (`documentId`),
  UNIQUE KEY `email_22` (`email`),
  UNIQUE KEY `documentId_22` (`documentId`),
  UNIQUE KEY `email_23` (`email`),
  UNIQUE KEY `documentId_23` (`documentId`),
  UNIQUE KEY `email_24` (`email`),
  UNIQUE KEY `documentId_24` (`documentId`),
  UNIQUE KEY `email_25` (`email`),
  UNIQUE KEY `documentId_25` (`documentId`),
  UNIQUE KEY `email_26` (`email`),
  UNIQUE KEY `documentId_26` (`documentId`),
  UNIQUE KEY `email_27` (`email`),
  UNIQUE KEY `documentId_27` (`documentId`),
  UNIQUE KEY `email_28` (`email`),
  UNIQUE KEY `documentId_28` (`documentId`),
  UNIQUE KEY `email_29` (`email`),
  UNIQUE KEY `documentId_29` (`documentId`),
  UNIQUE KEY `email_30` (`email`),
  UNIQUE KEY `documentId_30` (`documentId`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Jhoan Sebastian','jhoan@gmail.com','123456','1001234567','Programador Backend',0,0,'2026-08-03 12:32:01','2026-08-03 12:32:01'),(2,'Laura Gómez','laura.gomez@gmail.com','Laura2026','1023456789','Analista de Software',0,0,'2026-08-03 12:33:19','2026-08-03 12:33:19'),(3,'Sebastian cabezas','jhoansebastiancabezasruiz@gmail.com','123456','1098765432','Desarrollador Backend',0,0,'2026-08-03 16:10:54','2026-08-03 16:10:54'),(4,'Sebastian cabezas','caperatatiana822@gmail.com','123457','1098765438','Desarrollador Backend',0,0,'2026-08-03 16:30:41','2026-08-03 16:30:41'),(6,'Sebastian cabezas','enbo98@hotmail.com','123456','1098765433','Desarrollador Backend',0,0,'2026-08-03 16:41:04','2026-08-03 16:41:04');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vaccinations`
--

DROP TABLE IF EXISTS `vaccinations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vaccinations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `chapeta` int NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `fechaVacunacion` datetime NOT NULL,
  `horaVacunacion` varchar(20) NOT NULL,
  `nombreVacuna` varchar(100) NOT NULL,
  `responsable` varchar(100) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vaccinations`
--

LOCK TABLES `vaccinations` WRITE;
/*!40000 ALTER TABLE `vaccinations` DISABLE KEYS */;
INSERT INTO `vaccinations` VALUES (1,1001,'Capitán','2026-08-03 00:00:00','08:30','Clostridial','Jhoan Sebastian','2026-08-03 14:18:45','2026-08-03 14:18:45'),(2,1002,'Estrella','2026-08-05 00:00:00','10:15','Brucelosis','María López','2026-08-03 14:18:59','2026-08-03 14:18:59');
/*!40000 ALTER TABLE `vaccinations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `weighings`
--

DROP TABLE IF EXISTS `weighings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `weighings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fechaPesaje` datetime NOT NULL,
  `chapeta` int NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `peso` decimal(10,2) NOT NULL,
  `etapaProduccion` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `weighings`
--

LOCK TABLES `weighings` WRITE;
/*!40000 ALTER TABLE `weighings` DISABLE KEYS */;
/*!40000 ALTER TABLE `weighings` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-08-04  7:33:59
