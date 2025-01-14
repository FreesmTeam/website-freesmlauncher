import {useContext} from "react";
import {WindowContext} from "@/utils/Contexts/Contexts";
import {Icon} from "@iconify/react";

export default function MacHeader() {
    const {
        name,
        onlyCloseButton,
        onClose,
        onMinimize,
        onMaximize,
    } = useContext(WindowContext);

    return (
        <div
            className="flex flex-nowrap rounded-t-md justify-between items-center gap-2 w-full h-6 sm:h-8 bg-crust"
        >
            <div className="flex h-full gap-0 items-stretch">
                <div
                    onClick={onClose}
                    className="group flex justify-center items-center transition w-6 sm:w-8"
                >
                    <div
                        className="flex justify-center items-center transition rounded-full text-transparent group-hover:text-[#700700] w-[14px] h-[14px] sm:w-[18px] sm:h-[18px] bg-[#ff5e54]"
                    >
                        <Icon className="-scale-x-100 w-[14px] h-[14px] sm:w-[18px] sm:h-[18px]"
                              icon="stash:times-solid"/>
                    </div>
                </div>
                {
                    !onlyCloseButton && (
                        <>
                            <div
                                onClick={onMinimize}
                                className="group flex justify-center items-center transition w-6 sm:w-8"
                            >
                                <div
                                    className="flex justify-center items-center transition rounded-full text-transparent group-hover:text-[#733e01] w-[14px] h-[14px] sm:w-[18px] sm:h-[18px] bg-[#ffbd2e]"
                                >
                                    <Icon className="-scale-x-100 w-[14px] h-[14px] sm:w-[18px] sm:h-[18px]"
                                          icon="stash:minus-solid"/>
                                </div>
                            </div>
                            <div
                                onClick={onMaximize}
                                className="group flex justify-center items-center transition w-6 sm:w-8"
                            >
                                <div
                                    className="flex justify-center items-center transition rounded-full text-transparent group-hover:text-[#01540d] w-[14px] h-[14px] sm:w-[18px] sm:h-[18px] bg-[#27c93f]"
                                >
                                    <Icon className="-scale-x-100 w-[14px] h-[14px] sm:w-[18px] sm:h-[18px]"
                                          icon="stash:expand-diagonal-solid"/>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
            <div
                className="select-none px-1 sm:px-2 flex flex-nowrap justify-start gap-2 items-center w-fit">
                <div className="text-xs text-nowrap sm:text-sm text-white">
                    {name}
                </div>
            </div>
            {
                onlyCloseButton ? (
                    <div className="w-[24px] sm:w-8"/>
                ) : (
                    <div className="w-[72px] sm:w-24"/>
                )
            }
        </div>
    );
}