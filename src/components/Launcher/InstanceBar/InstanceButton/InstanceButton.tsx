import Image from "next/image";
import {LauncherInstanceType} from "@/types/LauncherInstance.type";
import {useInstanceStore} from "@/utils/stores";

export default function InstanceButton(instance: LauncherInstanceType) {
    const instancesStore = useInstanceStore((state) => state);
    const { currentInstance, updateCurrentInstance } = instancesStore;

    return (
        <button
            className="flex flex-col items-center justify-start gap-2 w-[100px]"
            onClick={() => updateCurrentInstance(instance)}
        >
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