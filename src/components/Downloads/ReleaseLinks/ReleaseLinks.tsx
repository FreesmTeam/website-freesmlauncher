import { GithubReleaseType } from "@/types/GithubRelease.type";
import getLatestRelease from "@/utils/getLatestRelease";
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
            <>Loading...</>
        );
    }

    if (error) {
        return (
            <>Error: {error.message}</>
        );
    }

    const assets = data?.data?.assets;
    const windowsBuilds = assets?.filter((asset) => asset.name.toLowerCase().includes('windows'))
    const linuxBuilds = assets?.filter((asset) => asset.name.toLowerCase().includes('linux'))
    const macosBuilds = assets?.filter((asset) => asset.name.toLowerCase().includes('mac'))

    return (
        <>
            <div className="w-full flex gap-8">
                <div className="flex flex-col flex-1 items-center justify-center gap-4">
                    <p className="text-xl text-gray-400">
                        Windows 64bit
                    </p>
                    <Link
                        className="transition border-b-[1px] border-transparent hover:border-white"
                        target="_blank" 
                        href={'https://github.com/FreesmTeam/FreesmLauncher/releases/download/9.2-free-1/FreesmLauncher-Windows-MSVC-Setup-release.exe'}
                    >
                        Setup (.exe)
                    </Link>
                    <Link
                        className="transition border-b-[1px] border-transparent hover:border-white"
                        target="_blank" 
                        href={'https://github.com/FreesmTeam/FreesmLauncher/releases/download/9.2-free-1/FreesmLauncher-Windows-MSVC-Setup-release.exe'}
                    >
                        Portable (.zip)
                    </Link>
                </div>
                <div className="flex flex-col flex-1 items-center justify-center gap-4">
                <p className="text-xl text-gray-400">
                        Windows 64bit
                    </p>
                    <Link
                        className="transition border-b-[1px] border-transparent hover:border-white"
                        target="_blank" 
                        href={'https://github.com/FreesmTeam/FreesmLauncher/releases/download/9.2-free-1/FreesmLauncher-Windows-MSVC-Setup-release.exe'}
                    >
                        Setup (.exe)
                    </Link>
                    <Link
                        className="transition border-b-[1px] border-transparent hover:border-white"
                        target="_blank" 
                        href={'https://github.com/FreesmTeam/FreesmLauncher/releases/download/9.2-free-1/FreesmLauncher-Windows-MSVC-Setup-release.exe'}
                    >
                        Portable (.zip)
                    </Link>
                </div>
            </div>
        </>
    );
}