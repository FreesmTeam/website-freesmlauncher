import Image from "next/image";
import freesmLogo from '../../../public/favicon.webp';
import {LAUNCHER_TABS} from "@/configs/launcher";
import {useTranslations} from "next-intl";

export default function Launcher() {
    const translate = useTranslations('Translations');

    return (
        <div className="w-full flex flex-col gap-0">
            <div className="flex justify-between items-center w-full h-8 bg-white">
                <div className="select-none px-2 flex gap-2 items-center">
                    <Image
                        className="h-5 w-5"
                        src={freesmLogo}
                        alt={""}
                    />
                    <div className="text-sm text-black">
                        Freesm Launcher
                    </div>
                </div>
                <div className="flex h-full gap-0 items-stretch">
                    <div className="group flex justify-center items-center transition w-12 hover:bg-[#e5e5e5]">
                        <div
                            className="transition w-[10px] h-[1px] bg-[#999] group-hover:bg-[#000]"
                        />
                    </div>
                    <div className="group flex justify-center items-center transition w-12 hover:bg-[#e5e5e5]">
                        <div
                            className="transition w-[10px] h-[10px] border-[1px] border-[#999] group-hover:border-[#000]"
                        />
                    </div>
                    <div className="group flex justify-center items-center transition w-12 hover:bg-[#e81123]">
                        <div className="relative right-[6px]">
                            <div
                                className="absolute top-[50%] left-[50%] rotate-45 transition w-[13px] h-[1px] bg-[#999] group-hover:bg-[#fff]"
                            />
                            <div
                                className="absolute top-[50%] left-[50%] rotate-[135deg] transition w-[13px] h-[1px] bg-[#999] group-hover:bg-[#fff]"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="w-full flex flex-col gap-0">
                    <div className="flex justify-between p-2.5 h-14 w-full bg-[#11111b]">
                        <div className="flex items-stretch gap-2">
                            <div className="cursor-move w-[5px] rounded-full bg-[#dbcafe]" />
                            {
                                LAUNCHER_TABS.map((tab) => {
                                    return (
                                        <button
                                            key={tab?.name ?? ''}
                                            className="cursor-default px-2 rounded-md flex items-center gap-1 hover:bg-[#211e2f]"
                                        >
                                            {tab.icon}
                                            {tab?.name && (
                                                <p className="text-[13px] text-[#cdd6f4]">
                                                    {translate(tab.name)}
                                                </p>
                                            )}
                                        </button>
                                    )
                                })
                            }
                        </div>
                        <div></div>
                    </div>
                    <div className="h-10 w-full bg-[#09090e]"></div>
                    <div className="w-full bg-[#0c0c13]">345</div>
                </div>
            </div>
        </div>
    );
}