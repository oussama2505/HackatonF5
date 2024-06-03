-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 29-05-2024 a las 14:05:01
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `alumnos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumno_tabla`
--

CREATE TABLE `alumno_tabla` (
  `nombre` text NOT NULL,
  `apellido` text NOT NULL,
  `front` int(11) NOT NULL,
  `back` int(11) NOT NULL,
  `email` text NOT NULL,
  `bootcamp` text NOT NULL
) ENGINE=CSV DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `alumno_tabla`
--

INSERT INTO `alumno_tabla` (`nombre`, `apellido`, `front`, `back`, `email`, `bootcamp`) VALUES
('J Sebastian', 'Rodriguez', 3, 3, 'srodriguez5860@gmail.com', 'Bilbao'),
('Elías', 'Riquelme', 3, 2, 'elias.renault4@gmail.com', 'Málaga'),
('Tina', 'Calleja', 4, 5, 'agustinacalleja@gmail.com', 'MadridFem'),
('Carlos', 'Perez', 2, 4, 'carlos@carlos.com', 'Galicia'),
('Andres', 'Ocina', 4, 5, 'andres@andres', 'Barcelona Centro'),
('Cesar', 'Monutti', 2, 1, 'cesar@cesar', 'AsturiasRural'),
('Jonathan', 'Sabroson', 4, 1, 'sabroson@sabroson.com', 'Bilbao'),
('david', 'altamirano', 3, 5, 'david@db.com', 'Sevilla'),
('Irene', 'Gallego', 1, 1, 'irene@irene', 'Málaga'),
('abde', 'ramane', 4, 5, 'a@a', 'MadridFem'),
('pepe', 'GarcIa', 3, 1, 'aaaa@gmail.com', 'AsturiasRural'),
('hernan', 'Exequiel', 4, 2, 'exe@exe', 'Galicia'),
('Vue', 'Framework', 5, 1, 'vue@vue', 'MadridFem'),
('anna', 'perez', 1, 1, 'bbb@gmail.com', 'Bilbao'),
('python', 'VSC', 3, 5, 'python@py.com', 'Bilbao'),
('antonio', 'rodriguez', 5, 5, 'ccc@gmail.com', 'Galicia'),
('linux', 'mint', 2, 4, 'linux@mint.com', 'Barcelona Centro'),
('Fast', 'API', 3, 4, 'fast@api.com', 'MadridFem'),
('Visual', 'Studio', 5, 5, 'VSC@VSC.com', 'AsturiasRural'),
('alvaro', 'Benitez', 3, 4, 'ddd@gmail.com', 'Barcelona Centro'),
('Angular', 'framework', 5, 2, 'angular@fr.com', 'Barcelona Centro'),
('alba', 'galeano', 2, 5, 'eee@gmail.com', 'MadridFem'),
('Brais', 'Moure', 4, 5, 'brais@moure.com', 'Galicia'),
('jesus', 'sosa', 3, 3, 'ffff@gmail.com', 'Málaga'),
('kioto', 'tomatu', 1, 1, 'kkk2@mail.com', 'Galicia'),
('cristina', 'villalba', 3, 4, 'zzz@gmail.com', 'AsturiasRural'),
('jose', 'franco', 5, 1, 'tttt@gmail.com', 'MadridFem'),
('antonio', 'britez', 2, 1, 'sss@gmail.com', 'Bilbao'),
('mario', 'sosa', 4, 5, 'yyy@gmail.com', 'Bilbao'),
('diego', 'torres', 4, 2, 'hhhh@gmail.com', 'Málaga'),
('paula', 'galeano', 2, 2, 'gggggg@gmail.com', 'AsturiasRural'),
('javier', 'ferreira', 5, 1, 'mbnv@gmail.com', 'Galicia'),
('adrian', 'Nuñez', 2, 5, 'qwer@gmail.com', 'Málaga'),
('Izan ', 'Jimenez', 3, 2, 'azxcvb@gmail.com', 'Málaga'),
('Sofía', 'bravo', 1, 4, 'poiu@gmail.com', 'Sevilla'),
('Alejandro', 'nuñez', 3, 3, 'bbbbbh@gmail.com', 'Sevilla'),
('Olvia', 'Cabrera', 5, 1, 'fertynvc@gmail.com', 'Sevilla'),
('Leo', 'lopez', 2, 1, 'bgdrtu@gmail.com', 'MadridFem'),
('Alma ', 'Gomez', 3, 5, 'aqzxcde@gmail.com', 'Barcelona Centro'),
('Claudia', 'Baez', 2, 2, 'qwsdhts@gmail.com', 'Bilbao'),
('Lucas', 'Nuñez', 5, 2, 'bypwngtesz@gmail.com', 'Barcelona Centro'),
('Marco', 'Rojas', 1, 1, 'akeucsizia@gmail.com', 'AsturiasRural'),
('Álvaro ', 'Ayala', 2, 4, 'paxcfrdia@gmail.com', 'Galicia'),
('daniela', 'ortiz', 2, 1, 'vfjpashfoaefoñie@gmail.com', 'AsturiasRural'),
('manuel', 'Galeano', 1, 4, 'nlkkhdfahfap@gmail.com', 'Galicia'),
('Emma', 'Romero', 1, 3, 'xcaso@gmail.com', 'Bilbao'),
('noa', 'sosa', 1, 3, 'pqwiensk', 'Barcelona Centro'),
('Mateo', 'Ortiz', 1, 4, 'aqocdh@gmail.com', 'MadridFem'),
('Sara', 'Lopez', 4, 3, 'asqir@gmail.com', 'Sevilla');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
