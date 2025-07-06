import { GithubReleaseType } from "@/types/Other/GithubRelease.type";
import getLatestRelease from "@/utils/Helpers/getLatestRelease";
import getReleaseName from "@/utils/Helpers/getReleaseName";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import {PLACEHOLDER_OS, WINDOWS_ARM64, WINDOWS_X64, WINDOWS_PLATFORMS} from "@/configs/constants";
import {useContext} from "react";
import {DictionariesContext} from "@/utils/Providers/DictionariesProvider";
import {DefaultLocale} from "@/configs/localization";

export default function ReleaseLinks({ platform }: { platform: string; }) {
    const { dictionaries } = useContext(DictionariesContext);

    const locale = dictionaries?.Info?.locale ?? DefaultLocale;
    const translations = dictionaries?.Translations;
    const translationsDownloads = translations?.downloads;

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

    if (platform === PLACEHOLDER_OS) {
        return (
            <div className="text-[14px] sm:text-[16px] text-center text-gray-400">
                {translationsDownloads?.["getting-platform"]}
            </div>
        )
    }

    if (isPending) {
        return (
            <div className="text-[14px] sm:text-[16px] text-center text-gray-400">
            {translationsDownloads?.loading}
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-[14px] sm:text-[16px] text-center text-gray-400">
                {translationsDownloads?.error}{' '}
                {error.message}.{' '}
                {translationsDownloads?.["try-to-refresh"]}
            </div>
        );
    }

    // build name is in the "LauncherName CodeName SemVer" format:
    // Freesm Launcher Sequoia 1.0.0
    const buildName = data?.data?.name;
    const buildNameArr =  buildName?.split(' ');
    const buildSemVer = buildNameArr?.[buildNameArr.length - 1];
    const buildCodeName = buildNameArr?.[buildNameArr.length - 2];
    const assets = data?.data?.assets;
    let currentBuilds: Array<{
        browser_download_url: string;
        name: string;
    }> | undefined;

    switch (platform.toLowerCase()) {
        case 'linux':
            currentBuilds = assets?.filter((asset) => asset.name.toLowerCase().includes('linux'));
            currentBuilds?.unshift({
                browser_download_url: "https://github.com/FreesmTeam/freesm-deb-pkgbuild",
                name: "pkgbuild - Debian"
            });
            currentBuilds?.unshift({
                browser_download_url: "https://aur.archlinux.org/packages/freesmlauncher",
                name: "pkgbuild - Arch Linux"
            });
            break;
        case 'macos':
            currentBuilds = assets?.filter((asset) => asset.name.toLowerCase().includes('mac'));
            break;
        case 'windows':
        default:
            currentBuilds = assets?.filter((asset) => asset.name.toLowerCase().includes('windows'));
            break;
    }

    let releaseBuilds;

    if (platform.toLowerCase() !== 'windows') {
        releaseBuilds = (
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
                        className="text-[14px] sm:text-[16px] text-center w-fit text-balance transition border-b-[1px] border-transparent hover:border-white pb-1"
                        target="_blank"
                        href={build.browser_download_url}
                    >
                        {
                            (
                                // sorry, i'm lazy
                                formattedName?.displayName?.includes('Universal')
                                || formattedName?.extension.includes('.AppImage')
                            ) && '⭐'
                        }{' '}
                        {formattedName.displayName}{' '}
                        <span className="text-gray-400">
                                    {formattedName.extension}
                                </span>
                    </Link>
                );
            })
        );
    } else {
        releaseBuilds = (
            <div className="w-full flex gap-8 flex-wrap items-start">
                {
                    WINDOWS_PLATFORMS.map((platform: string) => {
                        return (
                            <div
                                key={platform}
                                className="flex flex-col flex-1 items-center justify-center gap-4"
                            >
                                <p className="text-lg sm:text-xl text-center text-gray-400">
                                    {platform}
                                </p>
                                {
                                    currentBuilds?.filter((build) => {
                                        if (platform === WINDOWS_ARM64) {
                                            return build.name.toLowerCase().includes('arm64');
                                        }

                                        return !build.name.toLowerCase().includes('arm64');
                                    }).map((build) => {
                                        const formattedName = getReleaseName({
                                            name: build.name,
                                            locale: locale,
                                        });

                                        if (formattedName === null) {
                                            return;
                                        }

                                        if (formattedName.type?.includes('msvc')) {
                                            return (
                                                <Link
                                                    key={build.name}
                                                    className="text-[14px] sm:text-[16px] flex flex-col w-fit text-center text-balance transition border-b-[1px] border-transparent hover:border-white pb-1"
                                                    target="_blank"
                                                    href={build.browser_download_url}
                                                >
                                                    <p>
                                                        {formattedName.displayName}{' '}
                                                        <span className="text-gray-400">
                                                            {formattedName.extension}
                                                        </span>
                                                    </p>
                                                    <p className="text-gray-400 text-[12px] sm:text-[14px]">
                                                        ({translationsDownloads?.requires} Visual C++ Redistributable)
                                                    </p>
                                                </Link>
                                            )
                                        }

                                        return (
                                            <Link
                                                key={build.name}
                                                className="text-[14px] sm:text-[16px] w-fit text-center text-balance transition border-b-[1px] border-transparent hover:border-white pb-1"
                                                target="_blank"
                                                href={build.browser_download_url}
                                            >
                                                {(platform === WINDOWS_X64 && formattedName?.type?.includes('MSVC - setup')) && '⭐'}{' '}
                                                {formattedName.displayName}{' '}
                                                <span className="text-gray-400">
                                                    {formattedName.extension}
                                                </span>
                                            </Link>
                                        );
                                    })
                                }
                            </div>
                        );
                    })
                }
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-center text-xl sm:text-2xl text-gray-400 font-semibold">
                {buildCodeName}{' '}{buildSemVer}
            </p>
            {releaseBuilds}
        </div>
    );
}
