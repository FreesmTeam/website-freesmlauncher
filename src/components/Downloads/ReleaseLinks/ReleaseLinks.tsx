import { GithubReleaseType } from "@/types/GithubRelease.type";
import getLatestRelease from "@/utils/getLatestRelease";
import getReleaseName from "@/utils/getReleaseName";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import {useTranslations} from "next-intl";

export default function ReleaseLinks({ platform }: { platform: string; }) {
    const translate = useTranslations('Translations');
    const info = useTranslations('Info');
    const locale = info('locale');

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
            <div className="text-gray-400">
                {translate('downloads.loading')}
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-gray-400">
                {translate('downloads.error')}{' '}
                {error.message}.{' '}
                {translate('downloads.try-to-refresh')}
            </div>
        );
    }

    // build name is in the next format:
    // Freesm Launcher 9.2-free-2
    const buildName = data?.data?.name;
    const buildNameArr =  buildName?.split(' ');
    const buildVersion = buildNameArr?.pop()?.split('-')?.[0];

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
                        const formattedName = getReleaseName({
                            name: build.name,
                            locale: locale,
                        });

                        if (formattedName === null) {
                            return;
                        }

                        return (
                            <Link
                                key={build.name}
                                className="text-center w-fit text-balance transition border-b-[1px] border-transparent hover:border-white pb-1"
                                target="_blank"
                                href={build.browser_download_url}
                            >
                                {formattedName.displayName}{' - v'}{buildVersion}{' '}
                                <span className="text-gray-400">
                                        {formattedName.extension}
                                    </span>
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
                        Windows 64-bit
                    </p>
                    {
                        currentBuilds?.filter((build) => !build.name.toLowerCase().includes('arm64')).map((build) => {
                            const formattedName = getReleaseName({
                                name: build.name,
                                locale: locale,
                            });

                            if (formattedName === null) {
                                return;
                            }

                            return (
                                <Link
                                    key={build.name}
                                    className="w-fit text-center text-balance transition border-b-[1px] border-transparent hover:border-white pb-1"
                                    target="_blank" 
                                    href={build.browser_download_url}
                                >
                                    {formattedName.displayName}{' - v'}{buildVersion}{' '}
                                    <span className="text-gray-400">
                                        {formattedName.extension}
                                    </span>
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
                            const formattedName = getReleaseName({
                                name: build.name,
                                locale: locale,
                            });

                            if (formattedName === null) {
                                return;
                            }

                            return (
                                <Link
                                    key={build.name}
                                    className="w-fit text-center text-balance transition border-b-[1px] border-transparent hover:border-white pb-1"
                                    target="_blank" 
                                    href={build.browser_download_url}
                                >
                                    {formattedName.displayName}{' - v'}{buildVersion}{' '}
                                    <span className="text-gray-400">
                                        {formattedName.extension}
                                    </span>
                                </Link>
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
}