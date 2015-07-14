-- phpMyAdmin SQL Dump
-- version 3.4.5
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 12, 2015 at 06:32 AM
-- Server version: 5.5.16
-- PHP Version: 5.3.8

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `givetool`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_client_ip`
--

DROP TABLE IF EXISTS `tbl_client_ip`;
CREATE TABLE IF NOT EXISTS `tbl_client_ip` (
  `int_id` int(11) NOT NULL AUTO_INCREMENT,
  `int_event_id` int(11) NOT NULL,
  `ip` varchar(12) NOT NULL,
  PRIMARY KEY (`int_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_country`
--

DROP TABLE IF EXISTS `tbl_country`;
CREATE TABLE IF NOT EXISTS `tbl_country` (
  `int_country_id` int(11) NOT NULL AUTO_INCREMENT,
  `str_country_name` varchar(40) NOT NULL,
  `str_country_code` varchar(5) NOT NULL,
  PRIMARY KEY (`int_country_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_donation`
--

DROP TABLE IF EXISTS `tbl_donation`;
CREATE TABLE IF NOT EXISTS `tbl_donation` (
  `int_donation_id` int(11) NOT NULL AUTO_INCREMENT,
  `flt_amount` float NOT NULL,
  `int_user_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `int_event_id` int(11) NOT NULL,
  `str_paypal_transaction_id` varchar(30) NOT NULL,
  `chr_status` varchar(2) NOT NULL,
  PRIMARY KEY (`int_donation_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=17 ;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_donor`
--

DROP TABLE IF EXISTS `tbl_donor`;
CREATE TABLE IF NOT EXISTS `tbl_donor` (
  `int_donor_id` int(11) NOT NULL AUTO_INCREMENT,
  `int_user_id` int(11) NOT NULL,
  `str_fname` varchar(50) NOT NULL,
  `str_lname` varchar(50) NOT NULL,
  `str_email` varchar(60) NOT NULL,
  `str_address` varchar(40) NOT NULL,
  `str_city` varchar(100) NOT NULL,
  `str_state` varchar(40) NOT NULL,
  `str_zip` varchar(6) NOT NULL,
  `str_phone` varchar(13) NOT NULL,
  `date_created` date NOT NULL,
  `str_credit_card_no` varchar(200) DEFAULT NULL,
  `str_name_on_card` varchar(50) DEFAULT NULL,
  `str_expire_on` varchar(6) DEFAULT NULL,
  `str_cvv` varchar(4) DEFAULT NULL,
  `chr_status` varchar(2) DEFAULT 'A',
  `date_modified` date NOT NULL,
  PRIMARY KEY (`int_donor_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=31 ;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_event`
--

DROP TABLE IF EXISTS `tbl_event`;
CREATE TABLE IF NOT EXISTS `tbl_event` (
  `int_event_id` int(11) NOT NULL AUTO_INCREMENT,
  `str_name` varchar(50) NOT NULL,
  `int_organization_id` int(11) NOT NULL,
  `str_description` varchar(400) NOT NULL,
  `start_date` date NOT NULL,
  `start_time` time NOT NULL,
  `end_date` date NOT NULL,
  `end_time` time NOT NULL,
  `date_created` date NOT NULL,
  `chr_status` varchar(2) NOT NULL,
  `str_city` varchar(50) DEFAULT NULL,
  `str_state` varchar(50) DEFAULT NULL,
  `str_country` varchar(50) DEFAULT NULL,
  `str_logo` varchar(60) NOT NULL,
  `int_org_user_id` int(11) NOT NULL,
  `int_event_type_id` int(11) DEFAULT NULL,
  `int_event_user_id` int(11) DEFAULT NULL,
  `int_views` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`int_event_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=31 ;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_event_denomination`
--

DROP TABLE IF EXISTS `tbl_event_denomination`;
CREATE TABLE IF NOT EXISTS `tbl_event_denomination` (
  `int_event_denomination_id` int(11) NOT NULL AUTO_INCREMENT,
  `int_event_id` int(11) NOT NULL,
  `str_denomination1` varchar(4) NOT NULL,
  `chr_denomination_type1` varchar(1) NOT NULL,
  `str_denomination2` varchar(5) NOT NULL,
  `chr_denomination_type2` varchar(1) NOT NULL,
  `str_denomination3` varchar(5) NOT NULL,
  `chr_denomination_type3` varchar(1) NOT NULL,
  `str_denomination4` varchar(5) NOT NULL,
  `chr_denomination_type4` varchar(1) NOT NULL,
  `str_denomination5` varchar(5) NOT NULL,
  `chr_denomination_type5` varchar(1) NOT NULL,
  PRIMARY KEY (`int_event_denomination_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_event_type`
--

DROP TABLE IF EXISTS `tbl_event_type`;
CREATE TABLE IF NOT EXISTS `tbl_event_type` (
  `int_event_type_id` int(11) NOT NULL AUTO_INCREMENT,
  `str_event_type_name` varchar(50) NOT NULL,
  `str_description` varchar(100) NOT NULL,
  PRIMARY KEY (`int_event_type_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_organization`
--

DROP TABLE IF EXISTS `tbl_organization`;
CREATE TABLE IF NOT EXISTS `tbl_organization` (
  `int_organization_id` int(11) NOT NULL AUTO_INCREMENT,
  `int_user_id` int(11) NOT NULL,
  `str_name` varchar(100) NOT NULL,
  `str_short_name` varchar(60) NOT NULL,
  `str_address1` varchar(100) NOT NULL,
  `str_address2` varchar(100) NOT NULL,
  `str_country` varchar(50) NOT NULL,
  `str_state` varchar(50) NOT NULL,
  `str_city` varchar(100) NOT NULL,
  `str_zip` varchar(6) NOT NULL,
  `str_email` varchar(100) NOT NULL,
  `date_added` date NOT NULL,
  `date_modified` date NOT NULL,
  `chr_status` varchar(2) NOT NULL,
  `str_logo` varchar(50) NOT NULL,
  PRIMARY KEY (`int_organization_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=37 ;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_org_user`
--

DROP TABLE IF EXISTS `tbl_org_user`;
CREATE TABLE IF NOT EXISTS `tbl_org_user` (
  `int_org_user_id` int(11) NOT NULL AUTO_INCREMENT,
  `int_organization_id` int(11) NOT NULL,
  `int_user_id` int(11) NOT NULL,
  `str_name` varchar(60) NOT NULL,
  `str_email` varchar(80) NOT NULL,
  `str_password` varchar(40) NOT NULL,
  `chr_status` varchar(5) NOT NULL,
  `bit_is_admin` int(11) NOT NULL,
  `date_created` date NOT NULL,
  `date_modified` date NOT NULL,
  PRIMARY KEY (`int_org_user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_site_visitors`
--

DROP TABLE IF EXISTS `tbl_site_visitors`;
CREATE TABLE IF NOT EXISTS `tbl_site_visitors` (
  `int_visitor_id` int(11) NOT NULL AUTO_INCREMENT,
  `client_ip` varchar(12) CHARACTER SET latin1 DEFAULT NULL,
  `int_views` int(11) DEFAULT NULL,
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`int_visitor_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs AUTO_INCREMENT=4 ;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

DROP TABLE IF EXISTS `tbl_user`;
CREATE TABLE IF NOT EXISTS `tbl_user` (
  `int_user_id` int(11) NOT NULL AUTO_INCREMENT,
  `int_user_type_id` int(11) NOT NULL,
  `str_login` varchar(50) NOT NULL,
  `str_password` varchar(50) NOT NULL,
  `date_created` date NOT NULL,
  PRIMARY KEY (`int_user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=26 ;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user_type`
--

DROP TABLE IF EXISTS `tbl_user_type`;
CREATE TABLE IF NOT EXISTS `tbl_user_type` (
  `int_user_type_id` int(11) NOT NULL AUTO_INCREMENT,
  `str_user_type` varchar(40) NOT NULL,
  `str_description` varchar(160) NOT NULL,
  PRIMARY KEY (`int_user_type_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;



INSERT INTO `tbl_user` (`int_user_id`, `int_user_type_id`, `str_login`, `str_password`, `date_created`) VALUES (1, 1s, 'admin', 'admin', '2015-07-12');