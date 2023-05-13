CREATE TABLE `USER` (
  `id` varchar(255) NOT NULL,
  `name` varchar(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `salt` varchar(255) NOT NULL,
  `gender` varchar(6) NOT NULL,
  `telephone` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `ROOM` (
  `room_id` int NOT NULL AUTO_INCREMENT,
  `id` varchar(255) NOT NULL,
  `situation` varchar(50) NOT NULL,
  `accent` varchar(50) NOT NULL,
  `language` varchar(50) NOT NULL,
  `kakaoId` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`room_id`),
  KEY `id` (`id`),
  KEY `kakaoId` (`kakaoId`),
  CONSTRAINT `room_ibfk_477` FOREIGN KEY (`id`) REFERENCES `USER` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `room_ibfk_478` FOREIGN KEY (`kakaoId`) REFERENCES `kakao` (`kakaoId`) ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE `MSG` (
  `msg_id` int NOT NULL AUTO_INCREMENT,
  `part_id` varchar(20) NOT NULL,
  `content` text NOT NULL,
  `room_id` int NOT NULL,
  `user_id` varchar(255) NOT NULL,
  PRIMARY KEY (`msg_id`),
  KEY `room_id` (`room_id`),
  CONSTRAINT `msg_ibfk_1` FOREIGN KEY (`room_id`) REFERENCES `ROOM` (`room_id`) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE `kakao` (
  `kakaoId` varchar(20) NOT NULL,
  `kakao_nickname` varchar(10) NOT NULL,
  PRIMARY KEY (`kakaoId`)
);





