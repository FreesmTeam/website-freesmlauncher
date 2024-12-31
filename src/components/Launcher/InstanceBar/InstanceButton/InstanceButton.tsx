import Image from "next/image";
import {LauncherInstanceType} from "@/types/LauncherInstance.type";
import {useInstanceStore} from "@/utils/stores";
import {useRef, useState} from "react";
import {useClickOutside} from "@mantine/hooks";

export default function InstanceButton(instance: LauncherInstanceType) {
    const instancesStore = useInstanceStore((state) => state);
    const { currentInstance, updateCurrentInstance } = instancesStore;

    const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });
    const [opened, setOpened] = useState(false);
    const ref = useClickOutside(() => setOpened(false));
    const instanceRef = useRef<HTMLButtonElement>(null);

    function handleRightClick(event: React.MouseEvent) {
        if (!opened) {
            setMouseCoordinates({
                x: event.nativeEvent.layerX,
                y: event.nativeEvent.layerY,
            });
        }

        setOpened(true);
    }

    return (
        <button
            ref={instanceRef}
            onContextMenu={handleRightClick}
            className="relative h-fit flex flex-col items-center justify-start gap-2 w-[100px]"
            onClick={() => updateCurrentInstance(instance)}
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
                123
            </div>
                <Image width={48} src={instance.icon} alt="Grass svg icon"/>
                <p
                    className="text-[13px] text-[#CDD6F4] text-center w-full"
                    style={{
                        background: instance.name === currentInstance.name ? "#a285c6" : "#040407"
                    }}
                >
                    {instance.name}
                </p>
        </button>
);
}