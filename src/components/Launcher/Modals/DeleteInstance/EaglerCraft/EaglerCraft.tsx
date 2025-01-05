"use client";

import WindowHeader from "@/components/Launcher/WindowHeader/WindowHeader";
import {useMemo, useState} from "react";
import {ANIMATION_NAME, EAGLERCRAFT_EMBED_URL, EAGLERCRAFT_INSTANCE_NAME} from "@/configs/launcher";
import {WindowContext} from "@/utils/Contexts/Contexts";
import {useInstanceStore} from "@/utils/Stores/Stores";

export default function EaglerCraft() {
    const [animation, setAnimation] = useState('');

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

    const MemoizedMinecraft = useMemo(() => (
        <iframe
            className={"w-full aspect-video rounded-b-md focus:outline-none"}
            src={EAGLERCRAFT_EMBED_URL}
        >
            Your browser does not support iframes.
        </iframe>
    ), []);

    if (currentInstance.launched !== EAGLERCRAFT_INSTANCE_NAME) {
        return;
    }

    return (
        <div className="absolute top-[24px] sm:top-[32px] z-[6000] transition w-full px-[64px] sm:px-[128px]">
            <div
                onContextMenu={(event) => event.preventDefault()}
                className={`${animation} transition w-full flex flex-col gap-0 border-[1px] border-[#181825] rounded-md drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)] box-border`}
            >
                <WindowContext.Provider
                    value={{
                        name: EAGLERCRAFT_INSTANCE_NAME,
                        onClose: onClose,
                        onMinimize: onMinimize,
                        onMaximize: onMinimize,
                    }}
                >
                    <WindowHeader/>
                </WindowContext.Provider>
                {MemoizedMinecraft}
            </div>
        </div>
    );
}