import 'dotenv/config';
import { usersTable } from '@/db/schema';
import {db} from "@/db";

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
        })
        .onConflictDoUpdate({
            target: usersTable.useragent,
            set: {
                lastSeen: new Date(),
            },
        });
}