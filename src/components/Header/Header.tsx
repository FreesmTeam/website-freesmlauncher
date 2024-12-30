import Image from "next/image";
import freesmLogo from '../../../public/freesm-launcher-logo.webp';
import Link from "next/link";
import {Icon} from "@iconify/react";

export default function Header() {
    return (
        <header className="p-4 mx-auto max-w-[1280px] w-full">
            <div className="flex justify-between items-center h-12 w-full">
                <Image height={48} src={freesmLogo} alt="FreesmLauncher logo" />
                <div className="flex gap-4">
                    <Link
                        className="font-semibold text-white py-1 transition border-b-2 border-transparent hover:border-[#cba6f7]"
                        href="/"
                    >
                        Download
                    </Link>
                    <Link
                        className="font-semibold text-white py-1 transition border-b-2 border-transparent hover:border-[#cba6f7]"
                        href="/"
                    >
                        About
                    </Link>
                    <div className="w-[2px] bg-[#cba6f7]" />
                    <Link href='/'>
                        <Icon
                            className="transition text-white hover:text-[#cba6f7]"
                            height={32}
                            icon="mdi:github"
                        />
                    </Link>
                </div>
            </div>
        </header>
    );
}