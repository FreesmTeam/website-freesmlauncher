"use client";

import WindowHeader from "@/components/Launcher/WindowHeader/WindowHeader";
import MenuBar from "@/components/Launcher/MenuBar/MenuBar";
import NewsBar from "@/components/Launcher/NewsBar/NewsBar";
import {useLauncherBarsStore} from "@/utils/stores";
import {LauncherBarType} from "@/types/LauncherBar.type";

export default function Launcher() {
    const launcherBarsStore = useLauncherBarsStore((state) => state);
    const newsBar = launcherBarsStore.entries.find((entry: LauncherBarType) => entry.name === 'launcher.news-toolbar');

    return (
        <div
            onContextMenu={(event) => event.preventDefault()}
            className="w-full flex flex-col gap-0"
        >
            <WindowHeader />
            <div>
                <div className="w-full flex flex-col gap-0">
                    <MenuBar />
                    {
                        newsBar?.opened && (
                            <NewsBar />
                        )
                    }
                    <div className="w-full bg-[#0c0c13]">345</div>
                </div>
            </div>
        </div>
    );
}