import Image from "next/image";
import {LauncherInstanceType} from "@/types/LauncherInstance.type";
import {useInstanceStore} from "@/utils/stores";
import {useRef, useState} from "react";
import {useClickOutside} from "@mantine/hooks";
import {LAUNCHER_INSTANCE_CONTEXT_MENU_ITEMS} from "@/configs/launcher";
import {LauncherInstanceBarItemType} from "@/types/LauncherInstanceBarItem.type";
import {useTranslations} from "next-intl";

export default function InstanceButton(instance: LauncherInstanceType) {
    const translate = useTranslations('Translations');

    const instancesStore = useInstanceStore((state) => state);
    const { currentInstance, updateCurrentInstance } = instancesStore;

    const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });
    const [opened, setOpened] = useState(false);
    const ref = useClickOutside(() => setOpened(false));
    const instanceRef = useRef<HTMLButtonElement>(null);

    function handleRightClick(event: React.MouseEvent) {
        updateCurrentInstance(instance);

        if (!opened) {
            setMouseCoordinates({
                x: event.nativeEvent.layerX,
                y: event.nativeEvent.layerY,
            });
        }

        setOpened(true);
    }

    function handleLeftClick() {
        updateCurrentInstance(instance);
    }

    return (
        <button
            ref={instanceRef}
            onContextMenu={handleRightClick}
            className="relative h-fit flex flex-col items-center justify-start gap-2 w-[100px]"
            onClick={handleLeftClick}
        >
            <div
                aria-label="context-menu"
                ref={ref}
                className="transition z-[1000] absolute flex flex-col gap-1 border-[#181822] border-[1px] p-1 bg-[#11111B]"
                style={{
                    top: mouseCoordinates.y,
                    left: mouseCoordinates.x,
                    opacity: opened ? 1 : 0,
                    visibility: opened ? 'visible' : 'hidden'
                }}
            >
                <div className="cursor-default flex justify-center items-center gap-4 w-full p-1 text-[#9DA3BD]">
                    <p className="select-none text-nowrap text-center text-[13px]">
                        {currentInstance.name}
                    </p>
                </div>
                {
                    LAUNCHER_INSTANCE_CONTEXT_MENU_ITEMS.map((item: LauncherInstanceBarItemType) => {
                        return (
                            <div
                                className="flex items-center gap-4 w-full rounded-md p-1 hover:bg-[#1D1A28] text-[#cdd6f4]"
                                key={item.name}
                            >
                                {item.icon}
                                <p className="select-none text-nowrap text-[13px]">
                                    {translate(item.name)}
                                </p>
                            </div>
                        );
                    })
                }
            </div>
            <Image width={48} src={instance.icon} alt="Grass svg icon"/>
            <p
                className="text-[13px] text-[#CDD6F4] text-center w-full"
                style={{
                    background: instance.name === currentInstance.name ? "#a285c6" : "#040407"
                }}
            >
                {instance.name}
            </p>
        </button>
    );
}