import { NextRequest } from "next/server";
import * as arctic from "arctic";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { GitHubProvider } from "@/utils/Providers/OAuth2Providers";

export async function GET(request: NextRequest): Promise<Response> {
    const errorUrl = request.nextUrl.searchParams.get("error_url");

    const cookieStore = await cookies();
    const github = await GitHubProvider();
    const state = arctic.generateState();
    const scopes = ["user:email"];
    const url = github.createAuthorizationURL(state, scopes);

    cookieStore.set("state", state, {
        secure: process.env.NODE_ENV === "production",
        path: "/",
        httpOnly: true,
        maxAge: 60 * 10,
    });
    cookieStore.set("error_url", errorUrl as string, {
        secure: process.env.NODE_ENV === "production",
        path: "/",
        httpOnly: true,
        maxAge: 60 * 10,
    });

    return redirect(url.toString());
}