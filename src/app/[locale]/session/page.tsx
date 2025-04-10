import {cookies} from "next/headers";
import GithubOAuth2 from "@/components/GithubOAuth2/GithubOAuth2";

export default async function Page() {
    const cookieStore = await cookies();
    const githubAccessToken = cookieStore.get('accessTokenGithub')?.value;

    if (!githubAccessToken) {
        return (
            <div className="flex text-white p-8 h-[50vh]">
                <GithubOAuth2 />
            </div>
        );
    }

    const userResponse = await fetch("https://api.github.com/user", {
        headers: {
            Authorization: `Bearer ${githubAccessToken}`,
        },
        next: {
            // in seconds. 60 * 60 = 3600 seconds = 1 hour
            revalidate: 60 * 60,
        }
    });

    let user: {
        id: string;
        login: string;
        avatar_url: string;
        email: string;
    };

    try {
        user = await userResponse.json();
    } catch (e) {
        console.error(e);

        return (
            <div className="flex flex-col gap-2 text-white p-8 h-[50vh]">
                <p>Something went wrong when fetching user data...</p>
                <GithubOAuth2/>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="flex flex-col gap-2 text-white p-8 h-[50vh]">
                <p>Bad credentials.</p>
                <GithubOAuth2 />
            </div>
        );
    }

    const organizationResponse = await fetch("https://api.github.com/orgs/FreesmTeam/members", {
        next: {
            // in seconds. 60 * 60 = 3600 seconds = 1 hour
            revalidate: 60 * 60,
        }
    });

    let members: {
        id: string;
    }[];

    try {
        members = await organizationResponse.json();
    } catch (e) {
        console.error(e);

        return (
            <div className="flex flex-col gap-2 text-white p-8 h-[50vh]">
                <p>Something went wrong when fetching organization members data...</p>
                <GithubOAuth2/>
            </div>
        );
    }

    const hasUser = members.some((member: {
        id: string;
    }) => member.id === user.id);

    if (hasUser) {
        return (
            <div className="flex text-white p-8 h-[50vh]">
                yay
            </div>
        );
    }

    return (
        <div className="flex text-white p-8 h-[50vh]">
            <p>Sorry, but you don't have an access to the dashboard.</p>
            <GithubOAuth2/>
        </div>
    );
}