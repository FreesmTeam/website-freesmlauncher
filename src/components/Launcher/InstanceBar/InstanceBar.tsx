import {useInstanceStore, useLauncherBarsStore} from "@/utils/Stores/Stores";
import {LauncherBarType} from "@/types/LauncherBar.type";
import {DELETED, LAUNCHER_INSTANCE_BAR_ITEMS, LAUNCHER_INSTANCES, UNKNOWN_INSTANCE} from "@/configs/launcher";
import {LauncherInstanceBarItemType} from "@/types/LauncherInstanceBarItem.type";
import {useTranslations} from "next-intl";
import {LauncherInstanceType} from "@/types/LauncherInstance.type";
import Image from "next/image";
import {Icon} from "@iconify/react";
import {useEffect, useState} from "react";
import InstanceButton from "@/components/Launcher/InstanceBar/InstanceButton/InstanceButton";
import getDisabledProperty from "@/utils/Helpers/getDisabledProperty";
import handleLaunch from '@/utils/Helpers/handleLaunch';
import React from "react";

export default function InstanceBar({
    maximized,
}: {
    maximized?: boolean;
}) {
    const translate = useTranslations('Translations');

    const [filteredInstancesList, setFilteredInstancesList] = useState<LauncherInstanceType[]>(LAUNCHER_INSTANCES);

    const [hidden, setHidden] = useState(false);

    const instancesStore = useInstanceStore((state) => state);
    const { currentInstance, updateCurrentInstance } = instancesStore;

    const launcherBarsStore = useLauncherBarsStore((state) => state);
    const instanceBar = launcherBarsStore.entries.find((entry: LauncherBarType) => entry.name === 'launcher.instance-toolbar');
    const statusBar = launcherBarsStore.entries.find((entry: LauncherBarType) => entry.name === 'launcher.status-bar');
    const lastIndex = launcherBarsStore.entries.length - 1;
    const hasLockBars = launcherBarsStore.entries[lastIndex].opened;

    useEffect(() => {
        if (currentInstance.deleted === DELETED.YES) {
            setFilteredInstancesList((list: LauncherInstanceType[]) => list.filter((item: LauncherInstanceType) => item.name !== currentInstance.name));

            updateCurrentInstance({
                ...UNKNOWN_INSTANCE,
                deleted: DELETED.NO,
            })
        }
    }, [currentInstance.deleted, currentInstance.name, updateCurrentInstance]);

    return (
        <div 
            className={`w-full min-h-40 items-stretch flex flex-nowrap gap-0 ${maximized ? "h-full" : ""}`}
            style={{
                borderBottomLeftRadius: statusBar?.opened ? "0" : "0.375rem",
                borderBottomRightRadius: statusBar?.opened ? "0" : "0.375rem",
            }}
        >
            {
                instanceBar?.opened && (
                    <div 
                        className="p-2.5 flex flex-col gap-2 w-[128px] sm:w-[168px] bg-[#0a0a10]"
                        style={{
                            borderBottomLeftRadius: statusBar?.opened ? "0" : "0.375rem",
                        }}
                    >
                        {
                            !hasLockBars && (
                                <div className="cursor-move rounded-full h-[5px] w-full bg-[#dbcafe]" />
                            )
                        }
                        <div className="select-none flex justify-center items-center rounded-md hover:bg-[#1b1825]">
                            <Image
                                width={80}
                                src={currentInstance.icon}
                                alt="Grass svg icon"
                                style={{
                                    filter: currentInstance?.grayscale
                                        ? 'grayscale(100%) contrast(40%) '
                                        : ''
                                }}
                            />
                        </div>
                        <div className="select-none flex justify-center items-center rounded-md hover:bg-[#1b1825]">
                            <p className="text-center text-[10px] sm:text-[13px] text-[#CDD6F4]">
                                {currentInstance.name}
                            </p>
                        </div>
                        {
                            LAUNCHER_INSTANCE_BAR_ITEMS.map((item: LauncherInstanceBarItemType) => {
                                const { disabled, action } = getDisabledProperty({
                                    item,
                                    currentInstance,
                                    updateCurrentInstance,
                                    handleLaunch,
                                });

                                if (disabled) {
                                    return (
                                        <button
                                            key={item.name}
                                            className="cursor-default select-none px-1 py-0.5 flex gap-1 items-start sm:items-center text-[#9298b6]"
                                        >
                                            {item.icon}
                                            <p className="text-[10px] sm:text-[13px]">
                                                {translate(item.name)}
                                            </p>
                                        </button>
                                    );
                                }

                                return (
                                    <button
                                        onClick={action}
                                        key={item.name}
                                        className="select-none px-1 py-0.5 flex gap-1 items-start sm:items-center rounded-md hover:bg-[#1b1825] text-[#CDD6F4]"
                                    >
                                        {item.icon}
                                        <p className="text-[10px] sm:text-[13px]">
                                            {translate(item.name)}
                                        </p>
                                    </button>
                                );
                            })
                        }
                    </div>
                )
            }
            <div 
                className="w-full flex flex-col p-4 gap-2 bg-[#0c0c13]"
                style={{
                    borderBottomLeftRadius: (instanceBar?.opened || statusBar?.opened) ? "0" : "0.375rem",
                    borderBottomRightRadius: statusBar?.opened ? "0" : "0.375rem",
                }}
            >
                <button
                    onClick={() => setHidden((hidden: boolean) => !hidden)}
                    className="select-none flex gap-2 items-center text-[#80859A] text-[10px] sm:text-[12px]"
                >
                    <Icon
                        height={28}
                        icon={
                            hidden ? "fluent:chevron-right-16-filled" : "fluent:chevron-down-16-filled"
                        }
                    />
                    <div className="flex-shrink-0 font-bold">
                        {translate('launcher.ungrouped')}
                    </div>
                    <div className="w-full h-[2px] bg-[#15161e]" />
                </button>
                {
                    !hidden && (
                        <div className="flex gap-2 flex-wrap sm:flex-nowrap">
                            {
                                filteredInstancesList.map((instance: LauncherInstanceType) => {
                                    if (currentInstance.deleted === DELETED.YES && instance.name === currentInstance.name) {
                                        return (
                                            <React.Fragment key={instance.name} />
                                        );
                                    }

                                    return (
                                        <InstanceButton
                                            key={instance.name}
                                            name={instance.name}
                                            icon={instance.icon}
                                            launched={null}
                                            deleted={instance.deleted}
                                            version={instance.version}
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