import {HandleActionType} from "@/types/Launcher/HandleAction.type";

export default function handleLaunch({
    launched,
    updateCurrentInstance,
    currentInstance,
}: HandleActionType): void {
    const safeLaunched = launched === undefined ? currentInstance.launched : launched;

    updateCurrentInstance({
        ...currentInstance,
        launched: safeLaunched,
    });
}