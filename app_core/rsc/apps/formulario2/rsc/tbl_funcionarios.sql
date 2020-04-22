-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-04-2020 a las 08:10:41
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_funcionarios`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_funcionarios`
--

CREATE TABLE `tbl_funcionarios` (
  `id` int(11) UNSIGNED NOT NULL,
  `cedula` varchar(9) NOT NULL,
  `nombre` varchar(32) NOT NULL,
  `apellido1` varchar(32) NOT NULL,
  `apellido2` varchar(32) NOT NULL,
  `telefono` varchar(8) NOT NULL,
  `email` varchar(64) NOT NULL,
  `direccion` varchar(128) NOT NULL,
  `departamento` varchar(32) NOT NULL,
  `puesto` varchar(32) NOT NULL,
  `salario` int(11) NOT NULL,
  `observaciones` varchar(128) DEFAULT NULL,
  `foto` varchar(64) DEFAULT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_funcionarios`
--

INSERT INTO `tbl_funcionarios` (`id`, `cedula`, `nombre`, `apellido1`, `apellido2`, `telefono`, `email`, `direccion`, `departamento`, `puesto`, `salario`, `observaciones`, `foto`, `fecha`) VALUES
(1, '117930262', 'Jose', 'Bermúdez', 'Mena', '62179538', 'josepablobermudezm@gmail.com', 'SAN JOSE COSTA RICA SAN ISIDRO PEREZ ZELEDON BARIO EL PRADA II ENTRADA\r\nCONTIGUO A LA CARNICERIA EL PRANO CASA A LA DERECHA COLO', '12', 'jefe', 10000, 'increíble presona', 'hola.png', '2020-04-08'),
(2, '117930262', 'Jose', 'Bermúdez', 'Mena', '62179538', 'josepablobermudezm@gmail.com', 'SAN JOSE COSTA RICA SAN ISIDRO PEREZ ZELEDON', '12', 'jefe', 10000, 'increíble presona', 'hola.png', '2020-04-08');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tbl_funcionarios`
--
ALTER TABLE `tbl_funcionarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tbl_funcionarios`
--
ALTER TABLE `tbl_funcionarios`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
