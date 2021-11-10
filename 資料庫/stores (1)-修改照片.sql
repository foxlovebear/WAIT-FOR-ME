-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2021 年 11 月 10 日 07:53
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
-- 資料庫: `foodie`
--

-- --------------------------------------------------------

--
-- 資料表結構 `stores`
--

CREATE TABLE `stores` (
  `id` int(255) NOT NULL,
  `name` varchar(255)  DEFAULT NULL,
  `city` varchar(5)  DEFAULT NULL,
  `address` varchar(255)  DEFAULT NULL,
  `phone` varchar(30)  DEFAULT NULL,
  `foodtype` varchar(10)  DEFAULT NULL,
  `tag1` varchar(10)  DEFAULT NULL,
  `tag2` varchar(10)  DEFAULT NULL,
  `tag3` varchar(10)  DEFAULT NULL,
  `img` varchar(225)  DEFAULT NULL,
  `time` varchar(50)  DEFAULT NULL,
  `article` varchar(225)  DEFAULT NULL
);

--
-- 傾印資料表的資料 `stores`
--

INSERT INTO `stores` (`id`, `name`, `city`, `address`, `phone`, `foodtype`, `tag1`, `tag2`, `tag3`, `img`, `time`, `article`) VALUES
(1, '小葛廚房', '臺中', '台中市北屯區四平路409號', '04 2422 6289', '甜點', '有WIFI', '有插座', '無服務費', './images/storeImg/小葛1.jpg', '午: AM:11:00~PM:2:00 晚: PM:5:30 ~ PM:10:00', '首先【必須大推他們家的檸檬塔！】\r\n【喜歡吃檸檬塔的人，請一定要收藏此篇！】\r\n\r\n雖然他們家的【檸檬塔真的超！酸！】\r\n但是是會酸到會很過癮的那種酸🤤\r\n讓我終於找到快逼近我心目中完美的檸檬塔'),
(2, '一笈壽司', '臺中', '台中市南屯區公益路二段25號', '04 2320 6368', '日式', '無服務費', '無低消', '有冷氣', './images/storeImg/一笈.jpg', '午: AM:9:00~PM:1:00 晚: PM:4:30 ~ PM:9:00', '好吃到，一個月內我們家來吃了兩次\r\n點的食物有點太多，所以會拆成兩篇介紹\r\n但是【兩篇介紹的食物會全都不一樣！】\r\n也都會有我各自推薦的絕對必點的餐點！'),
(3, '莓塔咖啡館', '高雄', '高雄市前鎮區林森三路193巷25號', '07 338 8190', '義式', '無服務費', '無時間限制', '親子友善', './images/storeImg/莓塔.jpg', '午: AM:10:00~PM:2:00 晚: PM:8:30 ~ PM:10:00', '清炒蒜香松阪豬義大利麵\r\n這道真的超好吃！麵體吸滿了醬汁，超入味！\r\n尤其是它的松阪豬！邊邊煎到赤赤的，很脆彈\r\n松阪豬的量也給得很大方！我真的超愛🤤🤤🤤'),
(4, 'Mabao嬤寶', '新竹', '新竹巨城B1', NULL, '甜點', '無時間限制', '無低消', '無服務費', './images/storeImg/嬤寶.jpg', '午: AM:11:00~PM:2:00 晚: PM:5:30 ~ PM:10:00', '嬤寶是網紅濃濃創立的食品品牌～\r\n從最初的雪Q餅，到現在的新品—【姐夫布朗尼】\r\n每每才剛一上架，真的堪比在搶演唱會門票一樣！\r\n大家都是直接用秒速在搶的，真的很誇張！😂'),
(5, '佳吉飲料店 烤饅頭', '屏東', '屏東縣東港鎮中正路128號', '08 832 0371', '麵包', '無服務費', '無低消', '無時間限制', './images/storeImg/烤饅頭.jpg', '午: AM:08:00~PM:2:00 晚: PM:8:30 ~ PM:12:00', '使用【碳火】燒烤的饅頭，讓饅頭充滿了碳火的香氣～\r\n烤到微焦脆的表層，更是增添了饅頭的口感。\r\n\r\n而饅頭本人則是非常的～鬆～軟～\r\n在撕扯過程中可以說是非常的「ㄉㄨㄞ 一ㄠ」\r\n再加上煉乳的甜蜜滋味，讓人完全欲罷不能。'),
(6, '蚵蛋包', '宜蘭', '羅東夜市', '0922 553 627', '炸物', '無服務費', '無低消', '無時間限制', './images/storeImg/蛋包.jpg', '午: AM:10:00~PM:2:00 晚: PM:8:30 ~ PM:10:00', '每一顆蚵蛋包裡，都放有約四顆的蚵仔\r\n再塞入滿滿的蔥、肉末，並打上一顆蛋\r\n最後放入油鍋，炸至表皮金黃，起鍋！\r\n餅皮咬下去比我想像中來的薄、脆！！'),
(7, 'Slope Cafe', '臺北', '臺北市士林區至善路二段280號', '02 2841 1028', '麵包', '無服務費', '有WIFI', '有冷氣', './images/storeImg/slope.jpg', '午: AM:9:00~PM:1:00 晚: PM:4:30 ~ PM:9:00', '個人覺得Slope Cafe的整體餐點\r\n美味度算普通，但CP值還算OK👌🏼\r\n\r\n原因很簡單，因為他們【沒有低消限制】！\r\n沒有強迫低消一定要點一份餐或飲品\r\n光這一點就先給他＋50分🤣'),
(8, 'Belon貝隆餐廳', '高雄', '高雄市前鎮區成功二路39-1號', '0908 888 382', '義式', '無時間限制', '親子友善', '寵物友善', './images/storeImg/belon.jpg', '午: AM:08:00~PM:2:00 晚: PM:8:30 ~ PM:12:00', '煙花女中卷義大利麵\r\n雖然沒有到真的很新鮮有海味的程度\r\n但那個中卷的軟脆度，還是能感受到是新鮮的\r\n以我海鮮控這樣來看，有過關，大概可以有70分\r\n而且麵條也吸滿醬汁，【稍偏辣】的調味\r\n更是完美戳中我的口味喜好🤍🤍🤍'),
(9, '英迪格高空酒吧', '高雄', '高雄市新興區中山一路4號No', '07 272 1888', '中式', '無服務費', '無低消', '無時間限制', './images/storeImg/英迪格.jpg', '午: AM:08:00~PM:2:00 晚: PM:8:30 ~ PM:12:00', '朋友的這杯藍色魚缸特調\r\n是跟調酒師說她想要偏甜的口味、花果風味\r\n然後就得到了很美的螢光湖水綠色💚💚💚\r\n\r\n味道上喝起來大多數都是甜甜的薄荷味\r\n但薄荷味卻也不會太過突出，整體也沒有酒臭味\r\n喝起來算是很清新的一杯調酒，我覺得很好喝！'),
(10, '十杯', '臺北', '臺北市中正區汀州路三段277號', '02 2369 0900', '飲料', '無服務費', '無低消', '無時間限制', './images/storeImg/十杯.jpg', '午: AM:08:00~PM:2:00 晚: PM:8:30 ~ PM:12:00', '十杯的【珍珠】除了Ｑ之外，\r\n最特別的是【咬起來有蜂蜜味】～\r\n\r\n紫米的部份吃起來顆粒感較重～\r\n如果能再煮得更爛一點，我會更喜歡'),
(11, '三番兩刺', '臺北', '臺北市中山區松江路330巷42號', '02 2536 2293', '日式', '無服務費', '無低消', '無時間限制', './images/storeImg/三番兩次.jpg', '午: AM:10:00~PM:2:00 晚: PM:8:30 ~ PM:10:00', '海鮮丼整體我覺得算是普通\r\n不過鮭魚生魚片倒是還不錯👌🏼\r\n但它的醋飯我覺得不行，有點太黏\r\n丼飯附的味噌湯我自己還蠻喜歡的\r\n湯頭不會太鹹，算是清淡型的。'),
(12, 'Gumgum Green Garden Good', '臺北', '臺北市信義區信義路五段18號B1', '02 2722 2324', '義式', '有WIFI', '有冷氣', '無時間限制', './images/storeImg/gumgum.jpg', '午: AM:10:00~PM:2:00 晚: PM:8:30 ~ PM:10:00', '整體來說食物都蠻好吃的，而且份量又很多\r\n雖然價錢稍貴了一點，但以這個地點來說能理解\r\n而且最重要的是！目前【沒有限制用餐時間】！\r\n讓你可以拍好拍滿，拍到滿意為止🤣');

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
