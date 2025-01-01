"use client";

import {useTranslations} from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function About() {
    const translate = useTranslations('Translations');

    return (
        <div className="flex flex-col gap-8 mt-12 max-w-[960px] px-4 mx-auto">
            <p className="text-center font-bold text-balance text-7xl text-white">
                {translate('about.title')}
            </p>
            <p className="text-center text-balance text-2xl text-gray-400">
                {translate('about.description')}
            </p>
            <div className="flex flex-col items-center gap-8 rounded-md border-[1px] border-[#181825] w-full bg-[#11111b] p-8">
                <p className="text-3xl font-semibold text-white">
                    Maintainers
                </p>
                <div className="flex gap-4 justify-center">
                    <Link
                        target="_blank"
                        href="https://github.com/notwindstone/"
                        className="transition hover:grayscale  rounded-md p-2 flex flex-1 gap-2 items-start"
                    >
                        <Image
                            className="rounded-full"
                            width={96}
                            height={96}
                            src={'https://avatars.githubusercontent.com/u/91563727?v=4'}
                            alt={'windstone avatar'}
                        />
                        <div className="flex flex-col">
                            <p className="text-[#cba6f7] font-semibold text-[24px]">
                                windstone
                            </p>
                            <p>
                                OSS Enthusiast, creator of the idea.
                                Nix stuff maintainer
                                also known as hand7s
                            </p>
                        </div>
                    </Link>
                    <Link
                        target="_blank"
                        href="https://github.com/s0me1newithhand7s/"
                        className="transition hover:grayscale  rounded-md p-2 flex flex-1 gap-2 items-start"
                    >
                        <Image
                            className="rounded-full"
                            width={96}
                            height={96}
                            src={'https://avatars.githubusercontent.com/u/117505144?v=4'}
                            alt={'hand7s avatar'}
                        />
                        <div className="flex flex-col">
                            <p className="text-[#cba6f7] font-semibold text-[24px]">
                                s0me1newithhand7s
                            </p>
                            <p>
                                OSS Enthusiast, creator of the idea.
                                Nix stuff maintainer
                                also known as hand7s
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}