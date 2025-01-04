import Image from "next/image";
import freesmLogo from "../../../../../public/favicon.webp";
import {APP_NAME} from "@/configs/constants";
import {useContext} from "react";
import {WindowContext} from "@/utils/Contexts/Contexts";

export default function WinHeader() {
    const {
        name,
        maximized,
        onlyCloseButton,
        onClose,
        onMinimize,
        onMaximize,
    } = useContext(WindowContext);

    return (
        <div
            className="flex flex-nowrap rounded-t-md justify-between items-center gap-2 w-full h-6 sm:h-8 bg-[#11111b]">
            <div className="select-none px-1 sm:px-2 flex flex-nowrap gap-2 items-center">
                <Image
                    className="w-4 h-4 sm:h-5 sm:w-5"
                    src={freesmLogo}
                    alt={`${APP_NAME} logo`}
                />
                <div className="text-xs text-nowrap sm:text-sm text-white">
                    {name}
                </div>
            </div>
            <div className="flex h-full gap-0 items-stretch">
                {
                    !onlyCloseButton && (
                        <>
                            <div
                                onClick={onMinimize}
                                className="group flex justify-center items-center transition w-8 sm:w-12 hover:bg-[#e5e5e5]"
                            >
                                <div
                                    className="transition w-[8px] sm:w-[10px] h-[1px] bg-[#999] group-hover:bg-[#000]"
                                />
                            </div>
                            <div
                                onClick={onMaximize}
                                className="group flex justify-center items-center transition w-8 sm:w-12 hover:bg-[#e5e5e5]"
                            >
                                {
                                    maximized ? (
                                        <div className="relative">
                                            <div
                                                className="absolute transition top-[calc(50%-2px)] left-[calc(50%-5px)] w-[6px] sm:w-[8px] h-[6px] sm:h-[8px] border-[1px] border-[#999] bg-[#11111b] group-hover:bg-[#e5e5e5] z-[2] group-hover:border-[#000]"
                                            />
                                            <div
                                                className="absolute transition top-[calc(50%-4px)] left-[calc(50%-3px)] w-[6px] sm:w-[8px] h-[6px] sm:h-[8px] border-[1px] border-[#999] group-hover:border-[#000]"
                                            />
                                        </div>
                                    ) : (
                                        <div
                                            className="transition w-[8px] sm:w-[10px] h-[8px] sm:h-[10px] border-[1px] border-[#999] group-hover:border-[#000]"
                                        />
                                    )
                                }
                            </div>
                        </>
                    )
                }
                <div
                    onClick={onClose}
                    className="group flex justify-center items-center transition w-8 sm:w-12 hover:bg-[#e81123] rounded-tr-md"
                >
                    <div className="relative right-[6px]">
                        <div
                            className="absolute top-[50%] left-[50%] rotate-45 transition w-[10px] sm:w-[13px] h-[1px] bg-[#999] group-hover:bg-[#fff]"
                        />
                        <div
                            className="absolute top-[50%] left-[50%] rotate-[135deg] transition w-[10px] sm:w-[13px] h-[1px] bg-[#999] group-hover:bg-[#fff]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}