import {Icon} from "@iconify/react";

export default function GithubOAuth2() {
    return (
        <a
            className="bg-zinc-900 border-zinc-100 border-[1px] rounded-md w-32 h-12 flex justify-center items-center transition hover:bg-zinc-800"
            href={"/api/oauth2/login/github"}
        >
            <div className="flex flex-nowrap items-center gap-2">
                <Icon
                    className="text-white"
                    height={24}
                    icon={"mdi:github"}
                />
                <p className="text-lg font-semibold">
                    Github
                </p>
            </div>
        </a>
    );
}