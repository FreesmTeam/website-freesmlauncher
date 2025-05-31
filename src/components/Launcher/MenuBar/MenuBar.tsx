import {LAUNCHER_TABS} from "@/configs/launcher";
import {useContext, useRef, useState} from "react";
import {useClickOutside} from "@mantine/hooks";
import ProfileButton from "@/components/Launcher/MenuBar/ProfileButton/ProfileButton";
import {useCatPackStore, useLauncherBarsStore} from "@/utils/Stores/Stores";
import {LauncherBarsStateType} from "@/types/Launcher/LauncherBarsState.type";
import {LauncherBarType} from "@/types/Launcher/LauncherBar.type";
import {DictionariesContext} from "@/utils/Providers/DictionariesProvider";

export default function MenuBar() {
    const { dictionaries } = useContext(DictionariesContext);

    const translations = dictionaries?.Translations;
    const translationsLauncher = translations?.launcher;

    const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });
    const [opened, setOpened] = useState(false);
    const ref = useClickOutside(() => setOpened(false));
    const menuBarRef = useRef<HTMLDivElement>(null);

    const launcherMenuBarsStore = useLauncherBarsStore((state: LauncherBarsStateType) => state);
    const menuBars = launcherMenuBarsStore.entries;
    const updateMenuBars = launcherMenuBarsStore.updateEntries;

    const catPackStore = useCatPackStore((state) => state);
    const { enabled: catPackEnabled, updateEnabled: updateCatPackEnabled } = catPackStore;

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

    function handleTabClick(name: string | undefined) {
        if (!name) {
            updateCatPackEnabled(!catPackEnabled);
        }
    }

    return (
        <div
            ref={menuBarRef}
            onContextMenu={handleRightClick}
            className="relative flex justify-between p-2.5 h-fit w-full bg-crust"
        >
            <div
                ref={ref}
                className="transition z-[1000] absolute flex flex-col gap-2 border-[#181822] border-[1px] p-1 bg-crust"
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
                                className="transition flex gap-3 sm:gap-4 w-full rounded-md p-1 hover:bg-[#1D1A28]"
                                key={bar.name}
                            >
                                {
                                    bar.opened ? (
                                        <div
                                            className="rounded-md bg-mauve min-w-4 h-4 sm:min-w-[18px] sm:h-[18px]"
                                        />
                                    ): (
                                        <div
                                            className="rounded-md bg-transparent border-[1px] border-[#606060] min-w-4 sm:min-w-[18px] h-4 sm:h-[18px]"
                                        />
                                    )
                                }
                                <p className="select-none text-nowrap text-[10px] sm:text-[13px] text-[#cdd6f4]">
                                    {translationsLauncher?.[bar.name]}
                                </p>
                            </button>
                        );
                    })
                }
            </div>
            <div className="flex flex-wrap items-stretch gap-2">
                {
                    !hasLockBars && (
                        <div className="cursor-move w-[5px] rounded-full bg-[#dbcafe]"/>
                    )
                }
                {
                    LAUNCHER_TABS.map((tab) => {
                        if (tab.disabled) {
                            return (
                                <div
                                    key={tab?.name ?? ''}
                                    className="select-none px-1 sm:px-2 py-1 sm:py-0 flex items-center gap-1 text-[#9298b6]"
                                >
                                    <div className="min-w-6">
                                        {tab.icon}
                                    </div>
                                    {tab?.name && (
                                        <p className="text-nowrap text-[10px] sm:text-[13px] text-[#9298b6]">
                                            {translationsLauncher?.[tab.name]}
                                        </p>
                                    )}
                                </div>
                            );
                        }

                        return (
                            <button
                                onClick={() => handleTabClick(tab.name)}
                                key={tab?.name ?? ''}
                                className={`transition select-none px-1 min-h-8 sm:min-h-10 sm:px-2 py-1 sm:py-0 rounded-md flex items-center gap-1 hover:bg-[#211e2f] active:bg-[#171721] ${!tab?.name && catPackEnabled ? "bg-[#211e2f]" : ""}`}
                            >
                                {tab.icon}
                                {tab?.name && (
                                    <p className="text-nowrap text-[10px] sm:text-[13px] text-[#cdd6f4]">
                                        {translationsLauncher?.[tab.name]}
                                    </p>
                                )}
                            </button>
                        );
                    })
                }
            </div>
            <ProfileButton />
        </div>
    );
}
