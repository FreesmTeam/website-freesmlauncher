"use client";

import WindowHeader from "@/components/Launcher/WindowHeader/WindowHeader";
import MenuBar from "@/components/Launcher/MenuBar/MenuBar";
import NewsBar from "@/components/Launcher/NewsBar/NewsBar";

export default function Launcher() {
    return (
        <div
            onContextMenu={(event) => event.preventDefault()}
            className="w-full flex flex-col gap-0"
        >
            <WindowHeader />
            <div>
                <div className="w-full flex flex-col gap-0">
                    <MenuBar />
                    <NewsBar />
                    <div className="w-full bg-[#0c0c13]">345</div>
                </div>
            </div>
        </div>
    );
}