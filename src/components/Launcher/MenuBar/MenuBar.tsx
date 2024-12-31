import {LAUNCHER_TABS} from "@/configs/launcher";
import {useTranslations} from "next-intl";
import {useRef, useState} from "react";
import {useClickOutside} from "@mantine/hooks";
import ProfileButton from "@/components/Launcher/MenuBar/ProfileButton/ProfileButton";
import {useLauncherBarsStore} from "@/utils/stores";
import {LauncherBarsStateType} from "@/types/LauncherBarsState.type";
import {LauncherBarType} from "@/types/LauncherBar.type";

export default function MenuBar() {
    const translate = useTranslations('Translations');
    const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });
    const [opened, setOpened] = useState(false);
    const ref = useClickOutside(() => setOpened(false));
    const menuBarRef = useRef<HTMLDivElement>(null);

    const launcherMenuBarsStore = useLauncherBarsStore((state: LauncherBarsStateType) => state);
    const menuBars = launcherMenuBarsStore.entries;
    const updateMenuBars = launcherMenuBarsStore.updateEntries;

    const lastIndex = launcherMenuBarsStore.entries.length - 1;
    const hasLockBars = launcherMenuBarsStore.entries[lastIndex].opened;

    function handleRightClick(event: React.MouseEvent) {
        if (menuBarRef.current !== event.target) {
            return;
        }

        if (!opened) {
            setMouseCoordinates({
                x: event.nativeEvent.layerX,
                y: event.nativeEvent.layerY,
            });
        }

        setOpened(true);
    }

    function handleBarChange(bar: LauncherBarType) {
        bar.opened = !bar.opened;

        updateMenuBars([
            ...menuBars,
        ])
    }

    return (
        <div
            ref={menuBarRef}
            onContextMenu={handleRightClick}
            className="relative flex justify-between p-2.5 h-14 w-full bg-[#11111b]"
        >
            <div
                ref={ref}
                className="transition z-[1000] absolute flex flex-col gap-2 border-[#181822] border-[1px] p-1 bg-[#11111B]"
                style={{
                    top: mouseCoordinates.y,
                    left: mouseCoordinates.x,
                    opacity: opened ? 1 : 0,
                    visibility: opened ? 'visible' : 'hidden'
                }}
            >
                {
                    menuBars.map((bar: LauncherBarType) => {
                        return (
                            <button
                                onClick={() => handleBarChange(bar)}
                                className="flex gap-4 w-full rounded-md p-1 hover:bg-[#1D1A28]"
                                key={bar.name}
                            >
                                {
                                    bar.opened ? (
                                        <div
                                            className="rounded-md bg-[#CBA6F7] min-w-[18px] h-[18px]"
                                        />
                                    ): (
                                        <div
                                            className="rounded-md bg-transparent border-[1px] border-[#606060] min-w-[18px] h-[18px]"
                                        />
                                    )
                                }
                                <p className="select-none text-nowrap text-[13px] text-[#cdd6f4]">
                                    {translate(bar.name)}
                                </p>
                            </button>
                        );
                    })
                }
            </div>
            <div className="flex items-stretch gap-2">
                {
                    !hasLockBars && (
                        <div className="cursor-move w-[5px] rounded-full bg-[#dbcafe]"/>
                    )
                }
                {
                    LAUNCHER_TABS.map((tab) => {
                        return (
                            <button
                                key={tab?.name ?? ''}
                                className="cursor-default px-2 rounded-md flex items-center gap-1 hover:bg-[#211e2f]  active:bg-[#171721]"
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
            <ProfileButton />
        </div>
    );
}