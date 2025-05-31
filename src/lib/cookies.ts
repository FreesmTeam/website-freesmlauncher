"use server";

import {ReadonlyRequestCookies} from "next/dist/server/web/spec-extension/adapters/request-cookies";
import {cookies} from "next/headers";

export async function setCookie({
    key,
    value,
    expiresAt,
    httpOnly,
    store,
}: {
    key: string;
    value: string;
    expiresAt: Date;
    httpOnly: boolean;
    store?: ReadonlyRequestCookies;
}): Promise<void> {
    const cookieStore = store ?? await cookies();

    cookieStore.set(key, value, {
        httpOnly: httpOnly,
        sameSite: "lax",
        secure:   process.env.NODE_ENV === "production",
        expires:  expiresAt,
        path:     "/",
    });
}
