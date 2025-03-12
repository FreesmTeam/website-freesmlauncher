import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
    id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
    useragent: text('useragent').notNull().unique(),
    createdAt: timestamp('created_at', {
        withTimezone: true,
        mode: "date",
    }).notNull(),
    lastSeen: timestamp('last_seen', {
        withTimezone: true,
        mode: "date",
    }).notNull(),
    timesSeen: integer('times_seen').notNull().default(1),
});
