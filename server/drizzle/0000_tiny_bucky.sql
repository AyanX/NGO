CREATE TABLE `contacts` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`location` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`phone` varchar(20) NOT NULL,
	CONSTRAINT `contacts_id` PRIMARY KEY(`id`)
);
