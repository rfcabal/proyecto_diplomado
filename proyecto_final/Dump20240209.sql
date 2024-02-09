-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: curriculum
-- ------------------------------------------------------
-- Server version	5.7.44

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
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(80) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (1,'experiencia'),(2,'curso'),(3,'certificación'),(4,'portafolio'),(5,'blog');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `curriculum`
--

DROP TABLE IF EXISTS `curriculum`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `curriculum` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) DEFAULT NULL,
  `introduccion` text,
  `correo` varchar(250) DEFAULT NULL,
  `telefono` varchar(45) DEFAULT NULL,
  `nombre` varchar(200) DEFAULT NULL,
  `posicion` varchar(200) DEFAULT NULL,
  `linkedin` varchar(250) DEFAULT NULL,
  `github` varchar(250) DEFAULT NULL,
  `reddit` varchar(250) DEFAULT NULL,
  `foto` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `id_user_idx` (`id_usuario`),
  CONSTRAINT `id_user` FOREIGN KEY (`id_usuario`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `curriculum`
--

LOCK TABLES `curriculum` WRITE;
/*!40000 ALTER TABLE `curriculum` DISABLE KEYS */;
INSERT INTO `curriculum` VALUES (1,1,'Desarrollador con 6 años de experiencia en Proyectos de Desarrollo de Software, incluyendo desarrollo de Aplicaciones Móviles, Desarrollo Web, Desarrollo de Servicios, Desarrollo Electrónico, Automatización de Pruebas, Plataformas de eLearning, Plataforma de seguridad ciudadana y Proyectos de Emprendimiento. Profesional capacidad de trabajo en equipo, capacidad análisis, proactivo, adaptabilidad al cambio, orden y planificación.','rf.cabal@gmail.com','222 555 2445','Ricardo Flores Cabal','Fullstrack Developer','#','#','#','jtfpdxmn4gpsdgpdgkqg');
/*!40000 ALTER TABLE `curriculum` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `entradas`
--

DROP TABLE IF EXISTS `entradas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `entradas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) DEFAULT NULL,
  `titulo` varchar(100) DEFAULT NULL,
  `tiempo` varchar(100) DEFAULT NULL,
  `texto` text,
  `tipo` varchar(100) DEFAULT NULL,
  `media` varchar(250) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_usuario_entrada_idx` (`id_usuario`),
  CONSTRAINT `id_usuario_entrada` FOREIGN KEY (`id_usuario`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `entradas`
--

LOCK TABLES `entradas` WRITE;
/*!40000 ALTER TABLE `entradas` DISABLE KEYS */;
INSERT INTO `entradas` VALUES (1,1,'Fullstack Developer - 3XM Group (an Allata company)','julio de 2021 - julio de 2023','Participación en proyectos de desarrollo de software para diferentes clientes e industrias a través del Desarrollo de Software Empresarial.\r\n\r\n• Project “DonkeyKong”: create interceptors for the correct authentication and log-in to the platform, using SpringBoot.\r\n\r\n• Project “Clinical”: Creación de herramienta de validación de mensajes HL7 v2.x con React y Node.\r\n\r\n• Project “P2P”: Creación de ambiente de Desarrollo y aplicación para la extracción de datos de paciente usando OAuth y Bulkdata. Tecnologías: Node + Express, Docker, FHIR, SmileCDR, HAPI.\r\n\r\n• Project “EMO-Trans”: Creación de nuevos features para el monitoreo y gestión de contenedores marítimos y naves áreas de cargo, usando Springboot, JPA, Oracle y JSP.','experiencia','','2024-01-27 00:00:00'),(3,1,'Fullstack Developer - RightPartner','enero de 2021 - agosto de 2022','Participación en proyectos de desarrollo de software para clientes de salud en integración con sus prestadores.\r\n\r\n• Prepaga (SancorSalud), Creación de servicios REST para la integración con prestadores usando Springboot, Genexus y HL7 en su versión 2.4 y 2.6.\r\n\r\n• Proveedores de Servicios de Salu (Auna): Crear nuevos features para el sistema de atención de pacientes online usando diseños Mock up e implementando las nuevas funcionales en AngularJs y Node.','experiencia','',NULL),(4,1,'Centro de e-Learning UTN FRBA','agosto de 2023 - febrero de 2024','Diplomatura en programacion web full stack con React JS, Programación','curso','','2024-01-27 00:00:00'),(5,1,'AWS Certified Cloud Practitioner','Expedición sept. 2023 · Vencimiento: sept. 2026','Amazon Web Services (AWS)','certificación','','2024-01-27 00:00:00'),(6,1,'test 8','2020-2024','estos es un test 4','portafolio','','2024-01-27 00:00:00'),(7,1,'Instituto Universitario Hospital Italiano','agosto de 2023 - febrero de 2024','Principios de Interoperabilidad y Estándares en Salud','curso','',NULL),(8,1,'test 6','2020-2024','este es un test 2','blog','',NULL),(10,1,'dasds','dsadsa','dsadsadas','blog','dwo8f98bb94mfpc377mt',NULL);
/*!40000 ALTER TABLE `entradas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(250) DEFAULT NULL,
  `password` varchar(250) DEFAULT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'user1','e10adc3949ba59abbe56e057f20f883e','Ricardo Flores');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-09 19:10:46
