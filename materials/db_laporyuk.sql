-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 14, 2023 at 10:57 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_laporyuk`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_complaint`
--

CREATE TABLE `tb_complaint` (
  `complaint_id` int(11) NOT NULL,
  `attachment` varchar(255) DEFAULT NULL,
  `complaint_body` varchar(225) NOT NULL,
  `complaint_date` date NOT NULL,
  `complaint_title` varchar(35) NOT NULL,
  `category_id` int(11) NOT NULL,
  `people_id` int(11) NOT NULL,
  `status_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_complaint`
--

INSERT INTO `tb_complaint` (`complaint_id`, `attachment`, `complaint_body`, `complaint_date`, `complaint_title`, `category_id`, `people_id`, `status_id`) VALUES
(1, 'https://i.imgur.com/Yh0uci8.jpg', 'Lampu jalan di sekitar taman kota mati. Hal ini menciptakan kondisi yang tidak aman di malam hari.', '2023-12-01', 'Lampu Jalan Mati', 1, 4, 2),
(2, 'https://i.imgur.com/vA5Wjhy.jpg', 'Tempat sampah di taman kota sudah penuh, dan sampah berserakan di sekitar area. Harap segera diatasi', '2023-12-02', 'Sampah Berserakan', 2, 5, 8),
(3, 'https://i.imgur.com/3uUN1FC.jpg', 'Bus umum sering mengalami keterlambatan dan menyebabkan ketidaknyamanan bagi penumpang. Mohon perbaikan segera.', '2023-12-03', 'Sarana Transportasi', 3, 6, 8),
(4, 'https://i.imgur.com/vUSBzl0.jpg', 'Toilet umum di pusat perbelanjaan dalam kondisi tidak bersih. Diharapkan ada perhatian lebih terhadap kebersihan fasilitas ini.', '2023-12-04', 'Kebersihan Toilet Umum', 2, 7, 8),
(5, 'https://i.imgur.com/y0fUcsI.png', 'Saya menemui bug di aplikasi pengaduan ini. Setiap kali mencoba mengirim keluhan, terjadi kesalahan pada tampilan antarmuka.', '2023-12-05', 'Bug Aplikasi LaporYuk', 7, 5, 8),
(6, 'https://i.imgur.com/3Inrwpo.jpg', 'Lalu lintas di persimpangan jalan utama sangat padat, menyebabkan kemacetan setiap hari. Harap dicari solusi untuk meningkatkan arus lalu lintas.', '2023-12-06', 'Lalu Lintas Macet', 3, 8, 8),
(7, 'https://i.imgur.com/YApp0ED.jpg', 'Fasilitas sekolah di lingkungan ini rusak parah dan membutuhkan perbaikan segera untuk mendukung pendidikan anak-anak.', '2023-12-07', 'Kerusakan Fasilitas Pendidikan', 6, 6, 8),
(8, '', 'Proses perizinan usaha di kota ini sangat lambat dan menghambat perkembangan bisnis lokal. Harap diberikan perhatian lebih untuk mempercepat proses ini.', '2023-12-08', 'Perizinan Usaha Lambat', 9, 7, 8);

-- --------------------------------------------------------

--
-- Table structure for table `tb_complaint_category`
--

CREATE TABLE `tb_complaint_category` (
  `category_id` int(11) NOT NULL,
  `description` text NOT NULL,
  `category_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_complaint_category`
--

INSERT INTO `tb_complaint_category` (`category_id`, `description`, `category_name`) VALUES
(1, 'Kategori ini mencakup keluhan terkait dengan kondisi dan pemeliharaan infrastruktur umum di sekitar lingkungan masyarakat. Pengguna dapat melaporkan masalah seperti kerusakan jalan, taman yang tidak terawat, lampu jalan yang mati, atau fasilitas umum lainnya yang memerlukan perbaikan atau perhatian.', 'Infrastruktur Umum'),
(2, 'Kategori ini fokus pada keluhan terkait dengan kebersihan dan sanitasi lingkungan sekitar. Pengguna dapat melaporkan masalah sampah yang berserakan, limbah, atau kondisi kebersihan area publik yang perlu ditingkatkan.', 'Kebersihan Lingkungan'),
(3, 'Kategori ini menangani keluhan terkait dengan layanan publik yang diberikan kepada masyarakat. Pengguna dapat melaporkan keluhan terkait dengan transportasi umum, layanan pelanggan, atau pelayanan masyarakat lainnya yang memerlukan perbaikan atau perhatian lebih.', 'Pelayanan Publik'),
(4, 'Kategori ini digunakan untuk melaporkan masalah kesehatan masyarakat, termasuk fasilitas kesehatan, sanitasi lingkungan, atau isu-isu kesehatan yang memerlukan tindakan atau pembenahan.', 'Kesehatan'),
(5, 'Kategori ini mencakup keluhan terkait dengan keamanan lingkungan sekitar. Pengguna dapat melaporkan masalah keamanan seperti pencairan, penerangan, atau kondisi keamanan wilayah yang perlu ditingkatkan.', 'Keamanan'),
(6, 'Kategori ini ditujukan untuk melaporkan masalah terkait dengan pendidikan, fasilitas pendidikan, atau program edukasi masyarakat. Pengguna dapat memberikan masukan terkait kualitas pendidikan atau kebutuhan pendidikan di lingkungan mereka.', 'Pendidikan'),
(7, 'Kategori ini menangani keluhan teknis yang berkaitan dengan aplikasi atau sistem pengaduan laporan masyarakat. Pengguna dapat melaporkan bug, error, atau masalah teknis lainnya yang ditemui selama menggunakan aplikasi.', 'Teknologi'),
(8, 'Laporkan isu-isu lingkungan hidup di sekitar kita. Apakah Anda melihat masalah dalam pengelolaan limbah, ingin melaporkan tindakan pelanggaran lingkungan, atau memiliki ide untuk meningkatkan keberlanjutan? Setiap kontribusi Anda memiliki dampak positif pada pelestarian lingkungan di wilayah kita.', 'Lingkungan Hidup'),
(9, 'Jika Anda memerlukan bantuan terkait perizinan atau memiliki keluhan terkait proses administratif di wilayah kita, laporkan di sini. Kategori ini dirancang untuk membantu masyarakat dalam mengurus perizinan dan memberikan masukan untuk perbaikan administrasi yang lebih efisien.', 'Perizinan dan Administrasi'),
(10, 'Laporkan masalah atau berikan saran terkait keagamaan dan budaya di komunitas kita. Apakah Anda memiliki saran untuk meningkatkan toleransi antaragama, atau apakah Anda ingin melaporkan masalah terkait dengan fasilitas keagamaan? Suara Anda sangat berarti dalam membangun lingkungan yang inklusif dan beragam.', 'Keagamaan dan Budaya');

-- --------------------------------------------------------

--
-- Table structure for table `tb_complaint_fu`
--

CREATE TABLE `tb_complaint_fu` (
  `follow_up_id` int(11) NOT NULL,
  `follow_up_date` date NOT NULL,
  `follow_up_notes` varchar(150) NOT NULL,
  `complaint_id` int(11) DEFAULT NULL,
  `officer_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_complaint_fu`
--

INSERT INTO `tb_complaint_fu` (`follow_up_id`, `follow_up_date`, `follow_up_notes`, `complaint_id`, `officer_id`) VALUES
(1, '2023-12-01', 'Pemeliharaan lampu jalan telah dijadwalkan untuk 2 hari kedepan.', 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `tb_complaint_status`
--

CREATE TABLE `tb_complaint_status` (
  `status_id` int(11) NOT NULL,
  `status_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_complaint_status`
--

INSERT INTO `tb_complaint_status` (`status_id`, `status_name`) VALUES
(1, 'diterima'),
(2, 'diproses'),
(3, 'ditangguhkan'),
(4, 'ditolak'),
(5, 'selesai'),
(6, 'diteruskan'),
(7, 'menunggu'),
(8, 'terkirim');

-- --------------------------------------------------------

--
-- Table structure for table `tb_people`
--

CREATE TABLE `tb_people` (
  `people_id` int(11) NOT NULL,
  `address` varchar(30) NOT NULL,
  `email` varchar(20) NOT NULL,
  `job` varchar(50) DEFAULT NULL,
  `name` varchar(30) NOT NULL,
  `nik` bigint(20) NOT NULL,
  `phone` varchar(14) NOT NULL,
  `profile_picture` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_people`
--

INSERT INTO `tb_people` (`people_id`, `address`, `email`, `job`, `name`, `nik`, `phone`, `profile_picture`) VALUES
(1, 'Jakarta Pusat', 'metro@star.com', 'LaporYuk Administrator', 'Metro Boy', 3240220102219997, '6282190116201', 'https://i.imgur.com/RtDGemj.jpg'),
(2, 'Jakarta Timur', 'luke@star.com', 'LaporYuk Administrator', 'Luke Skywalker', 3240220102219998, '6282190116202', 'https://i.imgur.com/RtDGemj.jpg'),
(3, 'Jakarta Utara', 'mifta@star.com', 'Petinggi Desa', 'Miftachul Huda', 3240220102219999, '6282190116203', 'https://i.imgur.com/Naid9vF.png'),
(4, 'Jakarta Selatan', 'indri@star.com', 'Web Developer', 'Indri Melani', 3240220102220000, '6282190116204', 'https://i.imgur.com/4dOvyE2.jpg'),
(5, 'Jakarta Selatan', 'deni@star.com', 'Software Engineer', 'Deni Chandra', 3240220102220001, '6282190116205', 'https://i.imgur.com/vWBvxuh.png'),
(6, 'Jakarta Selatan', 'irsyad@star.com', 'QA', 'Ainul Irsyad', 3240220102220002, '6282190116206', 'https://i.imgur.com/UFxXwlO.jpg'),
(7, 'Jakarta Selatan', 'endang@star.com', 'Content Creator', 'Endang Putri', 3240220102220003, '6282190116207', 'https://i.imgur.com/H252ADM.jpg'),
(8, 'Jakarta Selatan', 'eko@star.com', 'Guru SMA/SMK', 'Eko Kurniawan', 3240220102220004, '6282190116208', 'https://i.imgur.com/RCaVbNs.jpg'),
(9, 'Jakarta Selatan', 'coba@star.com', 'Kelinci Percobaan', 'User Coba Sih', 3240220102220028, '6282190116553', '');

-- --------------------------------------------------------

--
-- Table structure for table `tb_privilege`
--

CREATE TABLE `tb_privilege` (
  `privilege_id` int(11) NOT NULL,
  `privilege_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_privilege`
--

INSERT INTO `tb_privilege` (`privilege_id`, `privilege_name`) VALUES
(1, 'super_admin'),
(2, 'editor_officer'),
(3, 'editor_user');

-- --------------------------------------------------------

--
-- Table structure for table `tb_role`
--

CREATE TABLE `tb_role` (
  `role_id` int(11) NOT NULL,
  `role_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_role`
--

INSERT INTO `tb_role` (`role_id`, `role_name`) VALUES
(1, 'admin'),
(5, 'coba'),
(2, 'officer'),
(4, 'testing'),
(3, 'user');

-- --------------------------------------------------------

--
-- Table structure for table `tb_role_privilege`
--

CREATE TABLE `tb_role_privilege` (
  `role_id` int(11) NOT NULL,
  `privilege_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_role_privilege`
--

INSERT INTO `tb_role_privilege` (`role_id`, `privilege_id`) VALUES
(1, 1),
(2, 2),
(3, 3);

-- --------------------------------------------------------

--
-- Table structure for table `tb_tracking_history`
--

CREATE TABLE `tb_tracking_history` (
  `history_id` int(11) NOT NULL,
  `notes` varchar(100) DEFAULT NULL,
  `complaint_id` int(11) DEFAULT NULL,
  `status_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_tracking_history`
--

INSERT INTO `tb_tracking_history` (`history_id`, `notes`, `complaint_id`, `status_id`) VALUES
(1, 'Pemeliharaan lampu jalan telah dijadwalkan untuk 2 hari kedepan.', 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `tb_user`
--

CREATE TABLE `tb_user` (
  `id` int(11) NOT NULL,
  `is_account_non_locked` bit(1) DEFAULT NULL,
  `is_enabled` bit(1) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `username` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_user`
--

INSERT INTO `tb_user` (`id`, `is_account_non_locked`, `is_enabled`, `password`, `username`) VALUES
(1, b'1', b'1', '$2a$10$nWih1YuuCYaREz.rJgUqx.9FmQzMsfD0igjPL7EJGKQ5y2TsNlP0a', 'admin'),
(2, b'1', b'1', '$2a$10$WYuF9AjmkJ373vIuciQHiuWFSHerOzViBsfSOkwGbrEn5AlM1Vtx2', 'luke'),
(3, b'1', b'1', '$2a$10$dZ8EcbjvrHXbbfwHscHETu62ZjWvYht.XfMjQ..Un1xFpmUl/GS8a', 'mifta'),
(4, b'1', b'1', '$2a$10$5y4vSIsxDZe2xgG8WLLRkuMe0xpqZgVEuBGi5Ks.ZDMfjVzwkRJzO', 'indri'),
(5, b'1', b'1', '$2a$10$Lm.oEYze63F437cCc8ZVyeE7XNHKFJpF3W5iuv4xPi4yTas6J9Im2', 'deni'),
(6, b'1', b'1', '$2a$10$FTBh82iTNU47TLecLqtGhuzUtfHMJccC.OLB2Mb8H25VHRkIkpB52', 'irsyad'),
(7, b'1', b'1', '$2a$10$EpXeTc4v313kAN8GVog7Oe8EH2AiO9y.8yNuFZIdH.2MZzNVzPuje', 'endang'),
(8, b'1', b'1', '$2a$10$wEjeqDPQuU9cttzM7R0c6.BCOdZgGM7f5zhZ0HsUoEeCL40W2h.NC', 'eko'),
(9, b'1', b'1', '$2a$10$tdcxSs2VANZVd7kt3xfAjeYdz5LQPV1PoaqaXe8v/4YTYVwFrFlJ2', 'coba');

-- --------------------------------------------------------

--
-- Table structure for table `tb_user_role`
--

CREATE TABLE `tb_user_role` (
  `user_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_user_role`
--

INSERT INTO `tb_user_role` (`user_id`, `role_id`) VALUES
(1, 1),
(2, 2),
(3, 2),
(4, 3),
(5, 3),
(6, 3),
(7, 3),
(8, 3),
(9, 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_complaint`
--
ALTER TABLE `tb_complaint`
  ADD PRIMARY KEY (`complaint_id`),
  ADD KEY `FK45ce2tly6s3jf0ggj9alnm13s` (`category_id`),
  ADD KEY `FKrnu9rhxsvyxf62fsivbj0q7yb` (`people_id`),
  ADD KEY `FKsjaq7jjikw0kef5iiufsr6xr1` (`status_id`);

--
-- Indexes for table `tb_complaint_category`
--
ALTER TABLE `tb_complaint_category`
  ADD PRIMARY KEY (`category_id`),
  ADD UNIQUE KEY `UK_camvkqq049r3qil1ofxq6omqg` (`category_name`);

--
-- Indexes for table `tb_complaint_fu`
--
ALTER TABLE `tb_complaint_fu`
  ADD PRIMARY KEY (`follow_up_id`),
  ADD KEY `FKos9x7yyyvj83tw52xubaux5re` (`complaint_id`),
  ADD KEY `FKliot1hymuhv8wv2bwab3go60k` (`officer_id`);

--
-- Indexes for table `tb_complaint_status`
--
ALTER TABLE `tb_complaint_status`
  ADD PRIMARY KEY (`status_id`);

--
-- Indexes for table `tb_people`
--
ALTER TABLE `tb_people`
  ADD PRIMARY KEY (`people_id`),
  ADD UNIQUE KEY `UK_89wbtr2rb5dtu6nouqrqgsorm` (`email`),
  ADD UNIQUE KEY `UK_l5t95dcnyh31rvwlnlkxyvbkx` (`nik`),
  ADD UNIQUE KEY `UK_3mvnrd05244x2ghn45el2st1q` (`phone`);

--
-- Indexes for table `tb_privilege`
--
ALTER TABLE `tb_privilege`
  ADD PRIMARY KEY (`privilege_id`);

--
-- Indexes for table `tb_role`
--
ALTER TABLE `tb_role`
  ADD PRIMARY KEY (`role_id`),
  ADD UNIQUE KEY `UK_c9lijtmr0x68iu1vxftbu2u33` (`role_name`);

--
-- Indexes for table `tb_role_privilege`
--
ALTER TABLE `tb_role_privilege`
  ADD KEY `FK6gvpbopw3c17inmv17usj8kes` (`privilege_id`),
  ADD KEY `FKsncdml4xq9xf0opvvrxcycq7y` (`role_id`);

--
-- Indexes for table `tb_tracking_history`
--
ALTER TABLE `tb_tracking_history`
  ADD PRIMARY KEY (`history_id`),
  ADD KEY `FKmw8ed9sjefeht04ow8ke104o` (`complaint_id`),
  ADD KEY `FKk1n0k6uwj0p48qlenw8r3g0xo` (`status_id`);

--
-- Indexes for table `tb_user`
--
ALTER TABLE `tb_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_4wv83hfajry5tdoamn8wsqa6x` (`username`);

--
-- Indexes for table `tb_user_role`
--
ALTER TABLE `tb_user_role`
  ADD KEY `FKea2ootw6b6bb0xt3ptl28bymv` (`role_id`),
  ADD KEY `FK7vn3h53d0tqdimm8cp45gc0kl` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_complaint`
--
ALTER TABLE `tb_complaint`
  MODIFY `complaint_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tb_complaint_category`
--
ALTER TABLE `tb_complaint_category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tb_complaint_fu`
--
ALTER TABLE `tb_complaint_fu`
  MODIFY `follow_up_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tb_complaint_status`
--
ALTER TABLE `tb_complaint_status`
  MODIFY `status_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tb_people`
--
ALTER TABLE `tb_people`
  MODIFY `people_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `tb_privilege`
--
ALTER TABLE `tb_privilege`
  MODIFY `privilege_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tb_role`
--
ALTER TABLE `tb_role`
  MODIFY `role_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tb_tracking_history`
--
ALTER TABLE `tb_tracking_history`
  MODIFY `history_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tb_complaint`
--
ALTER TABLE `tb_complaint`
  ADD CONSTRAINT `FK45ce2tly6s3jf0ggj9alnm13s` FOREIGN KEY (`category_id`) REFERENCES `tb_complaint_category` (`category_id`),
  ADD CONSTRAINT `FKrnu9rhxsvyxf62fsivbj0q7yb` FOREIGN KEY (`people_id`) REFERENCES `tb_people` (`people_id`),
  ADD CONSTRAINT `FKsjaq7jjikw0kef5iiufsr6xr1` FOREIGN KEY (`status_id`) REFERENCES `tb_complaint_status` (`status_id`);

--
-- Constraints for table `tb_complaint_fu`
--
ALTER TABLE `tb_complaint_fu`
  ADD CONSTRAINT `FKliot1hymuhv8wv2bwab3go60k` FOREIGN KEY (`officer_id`) REFERENCES `tb_user` (`id`),
  ADD CONSTRAINT `FKos9x7yyyvj83tw52xubaux5re` FOREIGN KEY (`complaint_id`) REFERENCES `tb_complaint` (`complaint_id`);

--
-- Constraints for table `tb_role_privilege`
--
ALTER TABLE `tb_role_privilege`
  ADD CONSTRAINT `FK6gvpbopw3c17inmv17usj8kes` FOREIGN KEY (`privilege_id`) REFERENCES `tb_privilege` (`privilege_id`),
  ADD CONSTRAINT `FKsncdml4xq9xf0opvvrxcycq7y` FOREIGN KEY (`role_id`) REFERENCES `tb_role` (`role_id`);

--
-- Constraints for table `tb_tracking_history`
--
ALTER TABLE `tb_tracking_history`
  ADD CONSTRAINT `FKk1n0k6uwj0p48qlenw8r3g0xo` FOREIGN KEY (`status_id`) REFERENCES `tb_complaint_status` (`status_id`),
  ADD CONSTRAINT `FKmw8ed9sjefeht04ow8ke104o` FOREIGN KEY (`complaint_id`) REFERENCES `tb_complaint` (`complaint_id`);

--
-- Constraints for table `tb_user`
--
ALTER TABLE `tb_user`
  ADD CONSTRAINT `FK4aqxqa9nstsmlb0b5k7m9gce7` FOREIGN KEY (`id`) REFERENCES `tb_people` (`people_id`);

--
-- Constraints for table `tb_user_role`
--
ALTER TABLE `tb_user_role`
  ADD CONSTRAINT `FK7vn3h53d0tqdimm8cp45gc0kl` FOREIGN KEY (`user_id`) REFERENCES `tb_user` (`id`),
  ADD CONSTRAINT `FKea2ootw6b6bb0xt3ptl28bymv` FOREIGN KEY (`role_id`) REFERENCES `tb_role` (`role_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
