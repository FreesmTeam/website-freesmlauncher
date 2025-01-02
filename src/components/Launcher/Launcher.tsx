"use client";

import WindowHeader from "@/components/Launcher/WindowHeader/WindowHeader";
import MenuBar from "@/components/Launcher/MenuBar/MenuBar";
import NewsBar from "@/components/Launcher/NewsBar/NewsBar";
import {useLauncherBarsStore} from "@/utils/stores";
import {LauncherBarType} from "@/types/LauncherBar.type";
import InstanceBar from "@/components/Launcher/InstanceBar/InstanceBar";
import Modals from "@/components/Launcher/Modals/Modals";
import {useState} from "react";
import {ANIMATION_NAME} from "@/configs/launcher";
import StatusBar from "@/components/Launcher/StatusBar/StatusBar";

export default function Launcher() {
    const launcherBarsStore = useLauncherBarsStore((state) => state);
    const newsBar = launcherBarsStore.entries.find((entry: LauncherBarType) => entry.name === 'launcher.news-toolbar');
    const statusBar = launcherBarsStore.entries.find((entry: LauncherBarType) => entry.name === 'launcher.status-bar');
    const [animation, setAnimation] = useState('');

    function onClose() {
        if (animation === ANIMATION_NAME) {
            return;
        }

        setAnimation(ANIMATION_NAME);

        setTimeout(() => setAnimation(''), 820)
    }

    return (
        <div
            onContextMenu={(event) => event.preventDefault()}
            className={`${animation} w-full flex flex-col gap-0 border-[1px] border-[#181825] rounded-md drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)]`}
        >
            <WindowHeader
                name={"Freesm Launcher"}
                onClose={onClose}
            />
            <div>
                <div className="w-full flex flex-col gap-0">
                    <MenuBar />
                    {
                        newsBar?.opened && (
                            <NewsBar />
                        )
                    }
                    <InstanceBar />
                    {
                        statusBar?.opened && (
                            <StatusBar />
                        )
                    }
                </div>
            </div>
            <Modals />
        </div>
    );
}