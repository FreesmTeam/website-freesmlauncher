"use client";

import WindowHeader from "@/components/Launcher/WindowHeader/WindowHeader";
import MenuBar from "@/components/Launcher/MenuBar/MenuBar";
import NewsBar from "@/components/Launcher/NewsBar/NewsBar";
import {useLauncherBarsStore} from "@/utils/Stores/Stores";
import {LauncherBarType} from "@/types/Launcher/LauncherBar.type";
import InstanceBar from "@/components/Launcher/InstanceBar/InstanceBar";
import Modals from "@/components/Launcher/Modals/Modals";
import {useMemo, useState} from "react";
import {ANIMATION_NAME} from "@/configs/launcher";
import StatusBar from "@/components/Launcher/StatusBar/StatusBar";
import {WindowContext} from "@/utils/Contexts/Contexts";
import {APP_NAME} from "@/configs/constants";
import getPlatformName from "@/utils/Helpers/getPlatformName";

export default function Launcher({
    platform,
}: {
    platform: ReturnType<typeof getPlatformName>;
}) {
    const launcherBarsStore = useLauncherBarsStore((state) => state);
    const newsBar = launcherBarsStore.entries.find((entry: LauncherBarType) => entry.name === 'news-toolbar');
    const statusBar = launcherBarsStore.entries.find((entry: LauncherBarType) => entry.name === 'status-bar');
    const [animation, setAnimation] = useState('');
    const [maximized, setMaximized] = useState(false);

    function onClose() {
        if (animation === ANIMATION_NAME) {
            return;
        }

        setAnimation(ANIMATION_NAME);

        setTimeout(() => setAnimation(''), 820)
    }

    function onMaximize() {
        setMaximized((state) => !state);
    }

    const MemoizedModals = useMemo(() => (
        <Modals platform={platform} />
    ), []);
    const MemoizedBars = useMemo(() => (
        <div className={`${maximized ? "h-[100svh] " : ''} w-full flex flex-col gap-0`}>
            <MenuBar/>
            {
                newsBar?.opened && (
                    <NewsBar/>
                )
            }
            <InstanceBar maximized={maximized}/>
            {
                statusBar?.opened && (
                    <StatusBar/>
                )
            }
        </div>
    ), [
        newsBar?.opened,
        statusBar?.opened,
        maximized
    ]);

    return (
        <div
            onContextMenu={(event) => event.preventDefault()}
            className={`${animation}${maximized ? " fixed top-0 left-0 right-0 bottom-0 z-[6000]" : ''} w-full flex flex-col gap-0 rounded-md drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)] box-border [background:linear-gradient(45deg,theme(colors.mantle))_padding-box,conic-gradient(from_var(--border-angle),theme(colors.mantle/.48)_60%,_theme(colors.violet.300)_72%,_theme(colors.violet.100)_80%,_theme(colors.violet.300)_88%,_theme(colors.mantle/.48))_border-box] border-2 border-transparent animate-border transition duration-300`}
        >
            <WindowContext.Provider
                value={{
                    name: APP_NAME,
                    onMaximize: onMaximize,
                    onMinimize: onClose,
                    onClose: onClose,
                    maximized: maximized,
                }}
            >
                <WindowHeader platform={platform} />
            </WindowContext.Provider>
            {MemoizedBars}
            {MemoizedModals}
        </div>
    );
}
