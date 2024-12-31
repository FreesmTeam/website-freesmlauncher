import {useInstanceStore, useLauncherBarsStore} from "@/utils/stores";
import {LauncherBarType} from "@/types/LauncherBar.type";
import {LAUNCHER_INSTANCE_BAR_ITEMS, LAUNCHER_INSTANCES} from "@/configs/launcher";
import {LauncherInstanceBarItemType} from "@/types/LauncherInstanceBarItem.type";
import {useTranslations} from "next-intl";
import {LauncherInstanceType} from "@/types/LauncherInstance.type";
import Image from "next/image";
import {Icon} from "@iconify/react";
import {useState} from "react";
import InstanceButton from "@/components/Launcher/InstanceBar/InstanceButton/InstanceButton";

export default function InstanceBar() {
    const translate = useTranslations('Translations');

    const [hidden, setHidden] = useState(false);

    const instancesStore = useInstanceStore((state) => state);
    const { currentInstance } = instancesStore;

    const launcherBarsStore = useLauncherBarsStore((state) => state);
    const instanceBar = launcherBarsStore.entries.find((entry: LauncherBarType) => entry.name === 'launcher.instance-toolbar');
    const lastIndex = launcherBarsStore.entries.length - 1;
    const hasLockBars = launcherBarsStore.entries[lastIndex].opened;

    return (
        <div className="w-full min-h-40 items-stretch flex flex-nowrap gap-0 rounded-b-md">
            {
                instanceBar?.opened && (
                    <div className="rounded-bl-md p-2.5 flex flex-col gap-2 w-[168px] bg-[#0a0a10]">
                        {
                            !hasLockBars && (
                                <div className="cursor-move rounded-full h-[5px] w-full bg-[#dbcafe]" />
                            )
                        }
                        <div className="select-none flex justify-center items-center rounded-md hover:bg-[#1b1825]">
                            <Image width={80} src={currentInstance.icon} alt="Grass svg icon" />
                        </div>
                        <div className="select-none flex justify-center items-center rounded-md hover:bg-[#1b1825]">
                            <p className="text-center text-[13px] text-[#CDD6F4]">
                                {currentInstance.name}
                            </p>
                        </div>
                        {
                            LAUNCHER_INSTANCE_BAR_ITEMS.map((item: LauncherInstanceBarItemType) => {
                                return (
                                    <div
                                        key={item.name}
                                        className="select-none px-1 py-0.5 flex gap-1 items-center rounded-md hover:bg-[#1b1825] text-[#CDD6F4]"
                                    >
                                        {item.icon}
                                        <p className="text-[13px]">
                                            {translate(item.name)}
                                        </p>
                                    </div>
                                );
                            })
                        }
                    </div>
                )
            }
            <div className="rounded-b-md w-full flex flex-col p-4 gap-2 bg-[#0c0c13]">
                <button
                    onClick={() => setHidden((hidden: boolean) => !hidden)}
                    className="select-none flex gap-2 items-center text-[#80859A] text-[12px]"
                >
                    <Icon
                        height={28}
                        icon={
                            hidden ? "fluent:chevron-right-16-filled" : "fluent:chevron-down-16-filled"
                        }
                    />
                    <div className="flex-shrink-0 font-bold">
                        Без группы
                    </div>
                    <div className="w-full h-[2px] bg-[#15161e]" />
                </button>
                {
                    !hidden && (
                        <div className="flex gap-2">
                            {
                                LAUNCHER_INSTANCES.map((instance: LauncherInstanceType) => {
                                    return (
                                        <InstanceButton
                                            key={instance.name}
                                            name={instance.name}
                                            icon={instance.icon}
                                        />
                                    );
                                })
                            }
                        </div>
                    )
                }
            </div>
        </div>
    );
}