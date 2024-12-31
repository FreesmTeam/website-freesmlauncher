import { GithubReleaseType } from "@/types/GithubRelease.type";
import getLatestRelease from "@/utils/getLatestRelease";
import getReleaseName from "@/utils/getReleaseName";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export default function ReleaseLinks({ platform }: { platform: string; }) {
    const { isPending, error, data }: {
        isPending: boolean;
        error: Error | null;
        data: { data: GithubReleaseType } | undefined;
    } = useQuery({
        queryKey: ['github-releases'],
        queryFn: async () => {
            return await getLatestRelease();
        },
    });

    if (isPending) {
        return (
            <div>
                Loading...
            </div>
        );
    }

    if (error) {
        return (
            <div>
                Error: {error.message}
            </div>
        );
    }

    const assets = data?.data?.assets;
    let currentBuilds;

    switch (platform.toLowerCase()) {
        case 'linux':
            currentBuilds = assets?.filter((asset) => asset.name.toLowerCase().includes('linux'));
            break;
        case 'macos':
            currentBuilds = assets?.filter((asset) => asset.name.toLowerCase().includes('mac'));
            break;
        case 'windows':
        default:
            currentBuilds = assets?.filter((asset) => asset.name.toLowerCase().includes('windows'));
            break;
    }

    if (platform.toLowerCase() !== 'windows') {
        return (
            <div className="flex flex-col items-center justify-center gap-4">
                {
                    currentBuilds?.map((build) => {
                        return (
                            <Link
                                key={build.name}
                                className="text-center w-fit text-balance transition border-b-[1px] border-transparent hover:border-white"
                                target="_blank" 
                                href={build.browser_download_url}
                            >
                                {build.name}
                            </Link>
                        );
                    })
                }
            </div>
        );
    }

    return (
        <>
            
            <div className="w-full flex gap-8 items-start">
                <div className="flex flex-col flex-1 items-center justify-center gap-4">
                    <p className="text-xl text-gray-400">
                        Windows 64bit
                    </p>
                    {
                        currentBuilds?.filter((build) => !build.name.toLowerCase().includes('arm64')).map((build) => {
                            const displayName = getReleaseName(build.name);

                            if (displayName === null) {
                                return;
                            }

                            return (
                                <Link
                                    key={build.name}
                                    className="w-fit text-center text-balance transition border-b-[1px] border-transparent hover:border-white"
                                    target="_blank" 
                                    href={build.browser_download_url}
                                >
                                    {displayName}
                                </Link>
                            );
                        })
                    }
                </div>
                <div className="flex flex-col flex-1 items-center justify-center gap-4">
                    <p className="text-xl text-gray-400">
                        Windows ARM64
                    </p>
                    {
                        currentBuilds?.filter((build) => build.name.toLowerCase().includes('arm64')).map((build) => {
                            const displayName = getReleaseName(build.name);

                            if (displayName === null) {
                                return;
                            }

                            return (
                                <Link
                                    key={build.name}
                                    className="w-fit text-center text-balance transition border-b-[1px] border-transparent hover:border-white"
                                    target="_blank" 
                                    href={build.browser_download_url}
                                >
                                    {displayName}
                                </Link>
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
}