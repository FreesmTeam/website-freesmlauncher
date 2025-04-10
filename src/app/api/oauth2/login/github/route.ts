import * as arctic from "arctic";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { GitHubProvider } from "@/utils/Providers/OAuth2Providers";

export async function GET(): Promise<Response> {
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

    return redirect(url.toString());
}