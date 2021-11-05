-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2021 年 11 月 04 日 02:42
-- 伺服器版本： 10.4.21-MariaDB
-- PHP 版本： 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫: `food`
--

-- --------------------------------------------------------

--
-- 資料表結構 `stores`
--

CREATE TABLE `stores` (
  `id` int(255) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(5) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `foodtype` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tag1` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tag2` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tag3` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `img` VARCHAR(225) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `stores`
--

INSERT INTO `stores` (`id`, `name`, `city`, `address`, `phone`, `foodtype`, `tag1`, `tag2`, `tag3`,`img`) VALUES
(1, '小葛廚房', '臺中', '台中市北屯區四平路409號', '04 2422 6289', '甜點', '有WIFI', '有插座', '無服務費','./images/storeImg/紅九九個人鴛鴦鍋 市府店.jpeg'),
(2, '一笈壽司', '臺中', '台中市南屯區公益路二段25號', '04 2320 6368', '日式', '無服務費', '無低消', '有冷氣','./images/storeImg/韓食堂한식당.jpeg'),
(3, '莓塔咖啡館', '高雄', '高雄市前鎮區林森三路193巷25號', '07 338 8190', '義式', '無服務費', '無時間限制', '親子友善','./images/storeImg/春宅 台中中華店.jpeg'),
(4, 'Mabao嬤寶', '新竹', '新竹巨城B1', NULL, '甜點', '無時間限制', '無低消', '無服務費','./images/storeImg/紅九九個人鴛鴦鍋 市府店.jpeg'),
(5, '佳吉飲料店 烤饅頭', '屏東', '屏東縣東港鎮中正路128號', '08 832 0371', '麵包', '無服務費', '無低消', '無時間限制','./images/storeImg/羣島Shaka islands.jpeg'),
(6, '蚵蛋包', '宜蘭', '羅東夜市', '0922 553 627', '炸物', '無服務費', '無低消', '無時間限制','./images/storeImg/紅九九個人鴛鴦鍋 市府店.jpeg'),
(7, 'Slope Cafe', '臺北', '臺北市士林區至善路二段280號', '02 2841 1028', '麵包', '無服務費', '有WIFI', '有冷氣','./images/storeImg/韓食堂한식당.jpeg'),
(8, 'Belon貝隆餐廳', '高雄', '高雄市前鎮區成功二路39-1號', '0908 888 382', '義式', '無時間限制', '親子友善', '寵物友善','./images/storeImg/羣島Shaka islands.jpeg'),
(9, '英迪格高空酒吧', '高雄', '高雄市新興區中山一路4號No', '07 272 1888', '中式', '無服務費', '無低消', '無時間限制','./images/storeImg/紅九九個人鴛鴦鍋 市府店.jpeg'),
(10, '十杯', '臺北', '臺北市中正區汀州路三段277號', '02 2369 0900', '飲料', '無服務費', '無低消', '無時間限制','./images/storeImg/韓食堂한식당.jpeg'),
(11, '三番兩刺', '臺北', '臺北市中山區松江路330巷42號', '02 2536 2293', '日式', '無服務費', '無低消', '無時間限制','./images/storeImg/羣島Shaka islands.jpeg'),
(12, 'Gumgum Green Garden Good', '臺北', '臺北市信義區信義路五段18號B1', '02 2722 2324', '義式', '有WIFI', '有冷氣', '無時間限制','./images/storeImg/春宅 台中中華店.jpeg');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `stores`
--
ALTER TABLE `stores`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
