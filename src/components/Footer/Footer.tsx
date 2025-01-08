import Image from "next/image";
import websiteLogo from '../../../public/freesm-launcher-logo.webp';

export default function Footer() {
    return (
        <>
            <div className="h-[160px]" />
            <div className="flex justify-center bg-[#1b1b2a] h-[272px] sm:h-[192px] w-full px-4 pt-8 fixed bottom-0 pb-[112px] sm:pb-8 -z-50">
                <div className="max-w-[1280px] w-full flex flex-col sm:flex-row sm:justify-between">
                    <div className="flex flex-col items-start gap-2">
                        <Image height={32} src={websiteLogo} alt={"Freesm Launcher logo"} />
                        <p className="text-gray-400 text-[13px] sm:text-[16px]">
                            Another way to play Minecraft for free.
                        </p>
                    </div>
                    <div className="flex gap-0 flex-col sm:flex-row">
                        <div className="px-4 flex flex-1 flex-col gap-1 items-center sm:items-start">
                            <p className="text-white font-semibold">
                                About
                            </p>
                            <p className="text-gray-400">
                                Project
                            </p>
                            <p className="text-gray-400">
                                Project
                            </p>
                        </div>
                        <div className="px-4 flex flex-1 flex-col gap-1 items-center sm:items-start">
                            <p className="text-white font-semibold">
                                Community
                            </p>
                            <p className="text-gray-400">
                                Project
                            </p>
                            <p className="text-gray-400">
                                Project
                            </p>
                        </div>
                        <div className="px-4 flex flex-1 flex-col gap-1 items-center sm:items-start">
                            <p className="text-white font-semibold">
                                Project
                            </p>
                            <p className="text-gray-400">
                                Project
                            </p>
                            <p className="text-gray-400">
                                Project
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}