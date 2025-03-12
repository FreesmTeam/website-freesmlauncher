import 'dotenv/config';
import { usersTable } from '@/db/schema';
import {db} from "@/db";
import {sql} from "drizzle-orm";

export default async function addUser({
    useragent,
}: {
    useragent: string;
}) {
    await db
        .insert(usersTable)
        .values({
            useragent,
            createdAt: new Date(),
            lastSeen: new Date(),
            timesSeen: 1,
        })
        .onConflictDoUpdate({
            target: usersTable.useragent,
            set: {
                lastSeen: new Date(),
                timesSeen: sql`${usersTable.timesSeen} + 1`,
            },
        });
}