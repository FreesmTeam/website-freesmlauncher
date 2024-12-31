import {useInstanceStore, useLauncherBarsStore} from "@/utils/stores";
import {LauncherBarType} from "@/types/LauncherBar.type";
import {LAUNCHER_INSTANCE_BAR_ITEMS, LAUNCHER_INSTANCES} from "@/configs/launcher";
import {LauncherInstanceBarItemType} from "@/types/LauncherInstanceBarItem.type";
import {useTranslations} from "next-intl";
import {LauncherInstanceType} from "@/types/LauncherInstance.type";
import Image from "next/image";

export default function InstanceBar() {
    const translate = useTranslations('Translations');

    const instancesStore = useInstanceStore((state) => state);
    const { currentInstance, updateCurrentInstance } = instancesStore;

    const launcherBarsStore = useLauncherBarsStore((state) => state);
    const instanceBar = launcherBarsStore.entries.find((entry: LauncherBarType) => entry.name === 'launcher.instance-toolbar');
    const lastIndex = launcherBarsStore.entries.length - 1;
    const hasLockBars = launcherBarsStore.entries[lastIndex].opened;

    return (
        <div className="w-full min-h-40 items-stretch flex flex-nowrap gap-0 bg-white">
            {
                instanceBar?.opened && (
                    <div className="p-2.5 flex flex-col gap-2 w-[168px] bg-[#0a0a10]">
                        {
                            !hasLockBars && (
                                <div className="cursor-move rounded-full h-[5px] w-full bg-[#dbcafe]" />
                            )
                        }
                        <div className="select-none flex justify-center items-center rounded-md hover:bg-[#1b1825]">
                            <Image width={80} src={currentInstance.icon} alt="Grass svg icon" />
                        </div>
                        <div className="select-none flex justify-center items-center rounded-md hover:bg-[#1b1825]">
                            <p className="text-[13px] text-[#CDD6F4]">
                                {currentInstance.name}
                            </p>
                        </div>
                        {
                            LAUNCHER_INSTANCE_BAR_ITEMS.map((item: LauncherInstanceBarItemType) => {
                                return (
                                    <div
                                        key={item.name}
                                        className="select-none px-1 py-0.5 flex gap-1 items-center rounded-md hover:bg-[#1b1825]"
                                    >
                                        {item.icon}
                                        <p className="text-[13px] text-[#CDD6F4]">
                                            {translate(item.name)}
                                        </p>
                                    </div>
                                );
                            })
                        }
                    </div>
                )
            }
            <div className="w-full bg-[#0c0c13]">
                {
                    LAUNCHER_INSTANCES.map((instance: LauncherInstanceType) => {
                        return (
                            <button
                                key={instance.name}
                                onClick={() => updateCurrentInstance(instance)}
                            >
                                <Image width={48} src={instance.icon} alt="Grass svg icon" />
                                {instance.name} - {instance.group}
                            </button>
                        );
                    })
                }
            </div>
        </div>
    );
}