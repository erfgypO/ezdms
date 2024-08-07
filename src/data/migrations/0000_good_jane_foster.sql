CREATE TABLE IF NOT EXISTS "storage_device" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" varchar(35) NOT NULL,
	"name" varchar(50) NOT NULL,
	"type" varchar NOT NULL,
	"config" json NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
