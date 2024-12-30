"use client";

import Image from "next/image";
import freesmLogo from '../../../public/freesm-launcher-logo.webp';
import Link from "next/link";
import {Icon} from "@iconify/react";
import {GITHUB_LINK} from "@/configs/constants";

export default function Header() {


    return (
        <header className="p-4 mx-auto max-w-[1280px] w-full">
            <div className="flex justify-between items-center h-12 w-full">
                <Link href="/">
                    <Image height={48} src={freesmLogo} alt="FreesmLauncher logo" />
                </Link>
                <div className="flex gap-4">
                    <Link
                        className="font-semibold text-white py-1 transition border-b-2 border-transparent hover:border-[#cba6f7]"
                        href="/download"
                    >
                        Download
                    </Link>
                    <Link
                        className="font-semibold text-white py-1 transition border-b-2 border-transparent hover:border-[#cba6f7]"
                        href="/about"
                    >
                        About
                    </Link>
                    <div className="w-[2px] bg-[#cba6f7]" />
                    <Link
                        className="w-8 h-8 transition flex justify-center items-center bg-[#181825] rounded-full hover:bg-[#313244]"
                        target="_blank"
                        href={GITHUB_LINK}
                    >
                        <Icon
                            className="text-white"
                            height={24}
                            icon="mdi:github"
                        />
                    </Link>
                    <Link
                        className="w-8 h-8 transition flex justify-center items-center bg-[#181825] rounded-full hover:bg-[#313244]"
                        target="_blank"
                        href={'/'}
                    >
                        <p className="text-white">🇷🇺</p>
                    </Link>
                </div>
            </div>
        </header>
    );
}