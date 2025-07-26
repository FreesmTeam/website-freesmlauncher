"use client";

import WindowHeader from "@/components/Launcher/WindowHeader/WindowHeader";
import {useMemo, useState} from "react";
import {
    ANIMATION_NAME,
    CLASSIC_MINECRAFT_EMBED_URL,
    CLASSIC_MINECRAFT_INSTANCE_NAME,
    EAGLERCRAFT_EMBED_URL,
    EAGLERCRAFT_INSTANCE_NAME,
} from "@/configs/launcher";
import {WindowContext} from "@/utils/Contexts/Contexts";
import {useInstanceStore} from "@/utils/Stores/Stores";
import getPlatformName from "@/utils/Helpers/getPlatformName";

export default function EaglerCraft({
    platform,
}: {
    platform: ReturnType<typeof getPlatformName>
}) {
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

    const shouldHaveClassicMinecraft = currentInstance.name === CLASSIC_MINECRAFT_INSTANCE_NAME;

    const MemoizedMinecraft = useMemo(() => (
        <iframe
            className={"w-full aspect-video rounded-b-md focus:outline-none"}
            src={
                shouldHaveClassicMinecraft
                    ? CLASSIC_MINECRAFT_EMBED_URL
                    : EAGLERCRAFT_EMBED_URL
            }
        >
            Your browser does not support iframes.
        </iframe>
    ), [shouldHaveClassicMinecraft]);

    if (
        currentInstance.launched !== EAGLERCRAFT_INSTANCE_NAME &&
        currentInstance.launched !== CLASSIC_MINECRAFT_INSTANCE_NAME
    ) {
        return;
    }

    return (
        <div className="absolute top-[24px] left-[50%] translate-x-[-50%] sm:top-[32px] z-[6000] transition w-full px-2 max-w-[80vw]">
            <div
                onContextMenu={(event) => event.preventDefault()}
                className={`${animation} transition w-full flex flex-col gap-0 border-[1px] border-mantle rounded-md drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)] box-border bg-crust`}
            >
                <WindowContext.Provider
                    value={{
                        name: shouldHaveClassicMinecraft
                            ? CLASSIC_MINECRAFT_INSTANCE_NAME
                            : EAGLERCRAFT_INSTANCE_NAME,
                        onClose: onClose,
                        onMinimize: onMinimize,
                        onMaximize: onMinimize,
                    }}
                >
                    <WindowHeader platform={platform} />
                </WindowContext.Provider>
                {MemoizedMinecraft}
            </div>
        </div>
    );
}
