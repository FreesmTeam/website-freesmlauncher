import {cookies} from "next/headers";
import GithubOAuth2 from "@/components/GithubOAuth2/GithubOAuth2";
import {db} from "@/db";
import {usersTable} from "@/db/schema";

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
        let launcherUsers;

        try {
            launcherUsers = await db
                .select()
                .from(usersTable)
                .orderBy(usersTable.id);
        } catch (e) {
            console.error(e);

            return (
                <div className="flex flex-col gap-2 text-white p-8 h-[50vh]">
                    <p>Something went wrong when fetching database...</p>
                </div>
            );
        }

        return (
            <div className="flex flex-col gap-2 text-white p-8 w-full">
                <p className="text-lg font-semibold">
                    Total users: {launcherUsers.length}
                </p>
                {
                    launcherUsers.map((launcherUser) => {
                        return (
                            <div key={launcherUser.id} className="min-h-8 w-full text-sm text-zinc-400 text-nowrap flex items-stretch px-2 flex-1 gap-2 border-zinc-600 border-[1px]">
                                <p className="w-16 overflow-auto border-r-[1px] border-zinc-600 flex items-center">
                                    {launcherUser.id}
                                </p>
                                <p className="w-full overflow-auto border-r-[1px] border-zinc-600 flex items-center">
                                    {launcherUser.useragent}
                                </p>
                                <p className="w-48 overflow-auto border-r-[1px] border-zinc-600 flex items-center">
                                    {(new Date(launcherUser.createdAt)).toDateString()}
                                </p>
                                <p className="w-48 overflow-auto border-r-[1px] border-zinc-600 flex items-center">
                                    {(new Date(launcherUser.lastSeen)).toDateString()}
                                </p>
                                <p className="w-12 overflow-auto flex items-center">
                                    {launcherUser.timesSeen}
                                </p>
                            </div>
                        );
                    })
                }
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