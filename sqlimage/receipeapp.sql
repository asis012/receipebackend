-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 28, 2019 at 04:39 PM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `receipeapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `allergie`
--

CREATE TABLE `allergie` (
  `id` int(11) NOT NULL,
  `allergie_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `allergie`
--

INSERT INTO `allergie` (`id`, `allergie_name`) VALUES
(1, 'oil'),
(2, 'sugar');

-- --------------------------------------------------------

--
-- Table structure for table `disease`
--

CREATE TABLE `disease` (
  `id` int(11) NOT NULL,
  `disease_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `ingredients`
--

CREATE TABLE `ingredients` (
  `id` int(11) NOT NULL,
  `ingredient_name` varchar(255) NOT NULL,
  `ingredient_protein` float NOT NULL,
  `ingredient_fats` float NOT NULL,
  `ingredient_carbs` float NOT NULL,
  `ingredient_measure_unit` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ingredients`
--

INSERT INTO `ingredients` (`id`, `ingredient_name`, `ingredient_protein`, `ingredient_fats`, `ingredient_carbs`, `ingredient_measure_unit`) VALUES
(1, 'flour', 5, 5, 20, 'gram'),
(2, 'sugar', 0, 0, 20, 'teaspoon'),
(3, 'oil', 0, 4, 10, 'ml'),
(4, 'oat', 30, 10, 2, 'gram'),
(5, 'milk', 50, 10, 23, 'ml');

-- --------------------------------------------------------

--
-- Table structure for table `ingredient_allergie`
--

CREATE TABLE `ingredient_allergie` (
  `id` int(11) NOT NULL,
  `ingredient_id` int(11) NOT NULL,
  `allergy_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `ingredient_disease`
--

CREATE TABLE `ingredient_disease` (
  `id` int(11) NOT NULL,
  `ingredient_id` int(11) NOT NULL,
  `disease_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `receipe`
--

CREATE TABLE `receipe` (
  `id` int(11) NOT NULL,
  `receipe_name` varchar(255) NOT NULL,
  `receipe_type` varchar(255) NOT NULL,
  `receipe_steps` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `receipe`
--

INSERT INTO `receipe` (`id`, `receipe_name`, `receipe_type`, `receipe_steps`) VALUES
(3, 'momoboi', 'lunch', '\'{\"1\":\"cook momo\"}\''),
(4, 'oatmeal', 'breakfast', '');

-- --------------------------------------------------------

--
-- Table structure for table `receipe_ingredients`
--

CREATE TABLE `receipe_ingredients` (
  `id` int(11) NOT NULL,
  `receipe_id` int(11) NOT NULL,
  `ingredient_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `receipe_ingredients`
--

INSERT INTO `receipe_ingredients` (`id`, `receipe_id`, `ingredient_id`) VALUES
(1, 3, 1),
(2, 3, 3),
(3, 4, 4),
(4, 4, 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `allergie`
--
ALTER TABLE `allergie`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `disease`
--
ALTER TABLE `disease`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ingredients`
--
ALTER TABLE `ingredients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ingredient_allergie`
--
ALTER TABLE `ingredient_allergie`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ingredient_disease`
--
ALTER TABLE `ingredient_disease`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `receipe`
--
ALTER TABLE `receipe`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `receipe_ingredients`
--
ALTER TABLE `receipe_ingredients`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `allergie`
--
ALTER TABLE `allergie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `disease`
--
ALTER TABLE `disease`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ingredients`
--
ALTER TABLE `ingredients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `ingredient_allergie`
--
ALTER TABLE `ingredient_allergie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ingredient_disease`
--
ALTER TABLE `ingredient_disease`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `receipe`
--
ALTER TABLE `receipe`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `receipe_ingredients`
--
ALTER TABLE `receipe_ingredients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
