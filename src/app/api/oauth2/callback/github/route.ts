import { NextRequest } from "next/server";
import { redirect } from "next/navigation";
import { handleCallback } from "@/lib/handleOAuth2Callback";
import { GitHubProvider } from "@/utils/Providers/OAuth2Providers";

export async function GET(request: NextRequest): Promise<Response> {
    const provider = await GitHubProvider();
    const fetchUserProfile = async (accessToken: string): Promise<Response> => {
        return await fetch("https://api.github.com/user", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            next: {
                // in seconds. 60 * 60 = 3600 seconds = 1 hour
                revalidate: 60 * 60,
            }
        });
    };

    return redirect(await handleCallback({
        request,
        provider,
        providerName: "github",
        fetchUserProfile,
    }));
}