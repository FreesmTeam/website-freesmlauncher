import Image from "next/image";
import websiteLogo from '../../../public/freesm-launcher-logo.webp';
import {FOOTER_LINKS} from "@/configs/constants";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <div className="-z-50 h-[200px]" />
            <div className="flex justify-center bg-[#1b1b2a] h-[312px] sm:h-[232px] w-full px-4 pt-8 fixed bottom-0 pb-[112px] sm:pb-8 z-0">
                <div className="max-w-[1280px] w-full flex flex-col flex-nowrap sm:flex-row sm:justify-between gap-4">
                    <div className="select-none flex flex-col gap-2 items-center sm:items-start">
                        <Image
                            height={40}
                            src={websiteLogo}
                            alt={"Freesm Launcher logo"}
                        />
                        <p className="text-gray-400 text-[14px] sm:text-[16px]">
                            Another way to play Minecraft for free.
                        </p>
                    </div>
                    <div className="flex gap-0 flex-col sm:flex-row">
                        {
                            FOOTER_LINKS.map((item) => {
                                return (
                                    <div
                                        key={item.title}
                                        className="select-none px-4 flex flex-1 flex-col gap-2 items-center sm:items-start"
                                    >
                                        <p className="text-white font-semibold text-[16px] sm:text-[18px]">
                                            {item.title}
                                        </p>
                                        {
                                            item.links.map((link) => {
                                                return (
                                                    <Link
                                                        href={link.link}
                                                        target="_blank"
                                                        key={link.name}
                                                        className="leading-5 text-wrap text-gray-400 text-[14px] sm:text-[16px] underline-offset-[5px] hover:underline"
                                                    >
                                                        {link.name}
                                                    </Link>
                                                );
                                            })
                                        }
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}