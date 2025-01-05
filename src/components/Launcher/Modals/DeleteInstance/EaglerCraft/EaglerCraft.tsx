"use client";

import WindowHeader from "@/components/Launcher/WindowHeader/WindowHeader";
import {useMemo, useState} from "react";
import {ANIMATION_NAME, EAGLERCRAFT_EMBED_URL} from "@/configs/launcher";
import {WindowContext} from "@/utils/Contexts/Contexts";
import {useInstanceStore} from "@/utils/Stores/Stores";

export default function EaglerCraft() {
    const [animation, setAnimation] = useState('');
    const [maximized, setMaximized] = useState(false);

    const instancesStore = useInstanceStore((state) => state);
    const { currentInstance, updateCurrentInstance } = instancesStore;

    function onClose() {
        updateCurrentInstance({
            ...currentInstance,
            launched: null,
        });
    }

    function onMinimize() {
        if (animation === ANIMATION_NAME) {
            return;
        }

        setAnimation(ANIMATION_NAME);

        setTimeout(() => setAnimation(''), 820)
    }

    function onMaximize() {
        setMaximized((state) => !state);
    }

    const MemoizedMinecraft = useMemo(() => (
        <iframe
            className={`w-full ${maximized ? "h-full" : "aspect-video"} rounded-b-md focus:outline-none`}
            src={EAGLERCRAFT_EMBED_URL}
        >
            Your browser does not support iframes.
        </iframe>
    ), [maximized]);

    return (
        <div
            onContextMenu={(event) => event.preventDefault()}
            className={`${animation}${maximized ? " fixed top-0 left-0 right-0 bottom-0 z-[6000]" : ''} w-full flex flex-col gap-0 border-[1px] border-[#181825] rounded-md drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)]`}
        >
            <WindowContext.Provider
                value={{
                    name: currentInstance.name,
                    onClose: onClose,
                    onMinimize: onMinimize,
                    onMaximize: onMaximize,
                    maximized: maximized,
                }}
            >
                <WindowHeader />
            </WindowContext.Provider>
            {MemoizedMinecraft}
        </div>
    );
}