import {integer, pgTable, text, timestamp, varchar} from "drizzle-orm/pg-core";

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
});
