import {HandleLaunchType} from "@/types/HandleLaunch.type";

export default function handleLaunch({
    launched,
    updateCurrentInstance,
    currentInstance,
}: HandleLaunchType): void {
    updateCurrentInstance({
        ...currentInstance,
        launched: launched,
    });
}