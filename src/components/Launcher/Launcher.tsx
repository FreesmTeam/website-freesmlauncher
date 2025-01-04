"use client";

import WindowHeader from "@/components/Launcher/WindowHeader/WindowHeader";
import MenuBar from "@/components/Launcher/MenuBar/MenuBar";
import NewsBar from "@/components/Launcher/NewsBar/NewsBar";
import {useLauncherBarsStore} from "@/utils/Stores/Stores";
import {LauncherBarType} from "@/types/LauncherBar.type";
import InstanceBar from "@/components/Launcher/InstanceBar/InstanceBar";
import Modals from "@/components/Launcher/Modals/Modals";
import {memo, useMemo, useState} from "react";
import {ANIMATION_NAME} from "@/configs/launcher";
import StatusBar from "@/components/Launcher/StatusBar/StatusBar";
import {WindowContext} from "@/utils/Contexts/Contexts";
import {APP_NAME} from "@/configs/constants";

export default function Launcher() {
    const launcherBarsStore = useLauncherBarsStore((state) => state);
    const newsBar = launcherBarsStore.entries.find((entry: LauncherBarType) => entry.name === 'launcher.news-toolbar');
    const statusBar = launcherBarsStore.entries.find((entry: LauncherBarType) => entry.name === 'launcher.status-bar');
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

    const MemoizedBars = useMemo(() => (
        <>
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
        </>
    ), [newsBar?.opened, statusBar?.opened]);

    const MemoizedModals = memo(() => (
        <Modals/>
    ));

    return (
        <div
            onContextMenu={(event) => event.preventDefault()}
            className={`${animation}${maximized ? " fixed top-0 left-0 right-0 bottom-0 z-[6000]" : ''} w-full flex flex-col gap-0 border-[1px] border-[#181825] rounded-md drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)]`}
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
                <WindowHeader/>
            </WindowContext.Provider>
            <div className={`${maximized ? "h-[100svh] " : ''} w-full flex flex-col gap-0`}>
                {MemoizedBars}
            </div>
            <MemoizedModals/>
        </div>
    );
}