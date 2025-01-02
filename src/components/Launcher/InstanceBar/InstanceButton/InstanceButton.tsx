import Image from "next/image";
import {LauncherInstanceType} from "@/types/LauncherInstance.type";
import {useInstanceStore} from "@/utils/stores";
import {useRef, useState} from "react";
import {useClickOutside} from "@mantine/hooks";
import {LAUNCHER_ACTIONS, LAUNCHER_INSTANCE_CONTEXT_MENU_ITEMS} from "@/configs/launcher";
import {LauncherInstanceBarItemType} from "@/types/LauncherInstanceBarItem.type";
import {useTranslations} from "next-intl";
import {Icon} from "@iconify/react";
import getDisabledProperty from "@/utils/getDisabledProperty";
import handleLaunch from '@/utils/handleLaunch';

export default function InstanceButton(instance: LauncherInstanceType) {
    const translate = useTranslations('Translations');

    const instancesStore = useInstanceStore((state) => state);
    const { currentInstance, updateCurrentInstance } = instancesStore;

    const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });
    const [opened, setOpened] = useState(false);
    const ref = useClickOutside(() => setOpened(false));
    const instanceRef = useRef<HTMLButtonElement>(null);

    function handleRightClick(event: React.MouseEvent) {
        updateCurrentInstance({
            ...instance,
            launched: currentInstance.launched,
        });

        if (!opened) {
            setMouseCoordinates({
                x: event.nativeEvent.layerX,
                y: event.nativeEvent.layerY,
            });
        }

        setOpened(true);
    }

    function handleLeftClick(event: React.MouseEvent) {
        // because I don't use React portals for context menus
        // clicking on any element in them triggers <InstanceButton />'s
        // onClick event, which triggers updateCurrentInstance, which triggers
        // React re-render, etc. which leads to nullifying any context menu action
        if ('ariaLabel' in event.target) {
            const ariaLabel = event.target.ariaLabel;

            if (ariaLabel === LAUNCHER_ACTIONS._TYPE) {
                return;
            }
        }

        updateCurrentInstance({
            ...instance,
            launched: currentInstance.launched,
        });
    }

    function handleDoubleClick(event: React.MouseEvent) {
        if ('ariaLabel' in event.target) {
            const ariaLabel = event.target.ariaLabel;

            if (ariaLabel === LAUNCHER_ACTIONS._TYPE) {
                return;
            }
        }

        updateCurrentInstance({
            ...instance,
            launched: instance.name,
        });
    }

    return (
        <button
            ref={instanceRef}
            onContextMenu={handleRightClick}
            className="relative h-fit flex flex-col items-center justify-start gap-2 w-[100px]"
            onClick={handleLeftClick}
            onDoubleClick={handleDoubleClick}
        >
            {
                currentInstance.launched === instance.name && (
                    <Icon fontSize={28} className="absolute right-0 top-0 text-[#dcdff2]" icon="fluent:play-circle-16-filled" />
                )
            }
            <div
                aria-label={LAUNCHER_ACTIONS._TYPE}
                ref={ref}
                className="transition z-[1000] absolute flex flex-col gap-1 border-[#181822] border-[1px] p-1 bg-[#11111B]"
                style={{
                    top: mouseCoordinates.y,
                    left: mouseCoordinates.x,
                    opacity: opened ? 1 : 0,
                    visibility: opened ? 'visible' : 'hidden'
                }}
            >
                <div
                    aria-label={LAUNCHER_ACTIONS._TYPE}
                    className="cursor-default flex justify-center items-center gap-4 w-full p-1 text-[#9DA3BD]"
                >
                    <p
                        aria-label={LAUNCHER_ACTIONS._TYPE}
                        className="select-none text-nowrap text-center text-[10px] sm:text-[13px]"
                    >
                        {currentInstance.name}
                    </p>
                </div>
                {
                    LAUNCHER_INSTANCE_CONTEXT_MENU_ITEMS.map((item: LauncherInstanceBarItemType) => {
                        const { disabled, action } = getDisabledProperty({
                            item,
                            currentInstance,
                            updateCurrentInstance,
                            handleLaunch,
                        });

                        if (disabled) {
                            return (
                                <div
                                    aria-label={LAUNCHER_ACTIONS._TYPE}
                                    className="cursor-default flex items-center gap-3 sm:gap-4 w-full p-1 text-[#9298b6]"
                                    key={item.name}
                                >
                                    {item.icon}
                                    <p
                                        aria-label={LAUNCHER_ACTIONS._TYPE}
                                        className="select-none text-nowrap text-[10px] sm:text-[13px]"
                                    >
                                        {translate(item.name)}
                                    </p>
                                </div>
                            );
                        }

                        return (
                            <div
                                aria-label={LAUNCHER_ACTIONS._TYPE}
                                onClick={action}
                                className="flex items-center gap-3 sm:gap-4 w-full rounded-md p-1 hover:bg-[#1D1A28] text-[#cdd6f4]"
                                key={item.name}
                            >
                                {item.icon}
                                <p
                                    aria-label={LAUNCHER_ACTIONS._TYPE}
                                    className="select-none text-nowrap text-[10px] sm:text-[13px]"
                                >
                                {translate(item.name)}
                                </p>
                            </div>
                        );
                    })
                }
            </div>
            <Image width={48} src={instance.icon} alt="Grass svg icon"/>
            <p
                className="text-[10px] sm:text-[13px] text-[#CDD6F4] text-center w-full"
                style={{
                    background: instance.name === currentInstance.name ? "#a285c6" : "#040407"
                }}
            >
                {instance.name}
            </p>
        </button>
    );
}