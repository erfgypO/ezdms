import {json, pgTable, timestamp, uuid, varchar} from "drizzle-orm/pg-core";

export const storageDevice = pgTable("storage_device", {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: varchar("user_id", { length: 35 }).notNull(),
    name: varchar("name", { length: 50 }).notNull(),
    type: varchar("type", { enum: ["s3"] }).notNull(),
    config: json("config").notNull(),
    createdAt: timestamp("createdAt").notNull().defaultNow(),
})
