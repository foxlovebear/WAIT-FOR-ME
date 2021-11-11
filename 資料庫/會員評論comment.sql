-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主機： localhost:8889
-- 產生時間： 2021 年 11 月 08 日 13:22
-- 伺服器版本： 5.7.34
-- PHP 版本： 7.4.21

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
-- 資料表結構 `comment`
--

CREATE TABLE `comment` (
  `cid` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `sid` int(11) NOT NULL,
  `comment` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `comment`
--

INSERT INTO `comment` (`id`, `user_id`, `sid`, `comment`) VALUES
(1, 2, 1, '工業風的早午餐，爆漿多汁的漢堡肉，濃到化不開的豆漿，好吃啊！'),
(2, 1, 1, '已經超久沒有吃到好吃的早午餐了餐廳風格跟餐點都走一種小清新的風格～餐點的部分都是非基改的新鮮蔬果，原汁原味超新鮮超好吃沒有過多的調味～套餐我比較推薦超級濃豆漿，氣泡水有渣渣我比較不喜歡，豆漿喝起來像燕麥奶一樣超神奇尾勁微微的甜味甜點的話每天都不一樣，今天是原味司康跟抹茶司康也是超級無敵好吃洛神花醬跟奶油栗子都很棒個人比較愛奶油栗子鹹甜鹹甜的味道很搭鬆軟的司康  洛神酸甜酸甜可以解膩。\r\n總結是一間超過五顆星的優質店家，店員的服務態度也是好到無話可說總之是一間會常去的下午茶兼早午餐'),
(3, 2, 2, '不知是否受疫情影響，可以選擇的菜品並沒有如網路上的菜單那麼多？\r\n本來期待可以吃到山藥細麵、海膽軍艦、花枝握壽司等通通都沒有，讓人覺得很失望。\r\n焦糖地瓜外表脆內心軟，非常好吃值得推薦（但是沒有拍到照片），整體味道表現不錯但是價格及份量讓人覺得CP值不高；惟服務人員動作積極態度良好。'),
(4, 4, 2, '桃園出差下來中部\n聞4500評論而來，果真很不一樣\n首先想跟一笈壽司說\n員工教育訓練上真的很不錯\n從進來到位置上然後用餐結束離開\n接洽人員,帶位人員,上餐的人員，結帳人員\n態度都非常的棒\n尤其是羅玉如妹妹\n一笈有你這種非常的細心員工\n真是他們的福氣，值得獎勵\n鮭魚一品新鮮軟嫩\n笈三寶簡單不平凡(蟹肉滿意)\n鮮蝦手捲蝦甜餡多\n唐揚雞炸到恰到好處肉汁滿滿肉不乾柴\n茶碗蒸綿密沒氣泡\n焦糖鮮橙，橙意滿滿\n一笈用心，一級放心'),
(5, 2, 1, '綠意盎然的門前，現代工業風的早餐店，假日及早來卡位，也有咖啡豆可以選擇外帶，餐點豐富多元，套餐份量足，cp值高，帕尼尼香酥脆口感餡料豐富，靠窗的坐位暖暖陽光灑落在窗邊很舒服，服務也很好，是北屯區早午餐的好選擇');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
