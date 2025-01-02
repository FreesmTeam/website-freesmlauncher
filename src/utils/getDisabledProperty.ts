import {LAUNCHER_ACTIONS} from "@/configs/launcher";
import {LauncherInstanceBarItemType} from "@/types/LauncherInstanceBarItem.type";
import {LauncherInstanceType} from "@/types/LauncherInstance.type";
import {HandleLaunchType} from "@/types/HandleLaunch.type";

export default function getDisabledProperty({
    item,
    currentInstance,
    updateCurrentInstance,
    handleLaunch,
}: {
    item: LauncherInstanceBarItemType;
    currentInstance: LauncherInstanceType;
    updateCurrentInstance: (instance: LauncherInstanceType) => void;
    handleLaunch: (data: HandleLaunchType) => void;
}) {
    let disabled;
    let action = () => {};

    const handleLaunchSpecified = (launched: string | null) => (
        handleLaunch({
            launched: launched,
            updateCurrentInstance: updateCurrentInstance,
            currentInstance: currentInstance,
        })
    );

    switch (item.action) {
        case LAUNCHER_ACTIONS.LAUNCH:
            disabled = currentInstance.launched === currentInstance.name;
            action = () => handleLaunchSpecified(currentInstance.name);

            break;
        case LAUNCHER_ACTIONS.KILL:
            disabled = currentInstance.launched !== currentInstance.name;
            action = () => handleLaunchSpecified(null);

            break;
        case LAUNCHER_ACTIONS.EDIT:
            // TODO
            disabled = true;

            break;
        case LAUNCHER_ACTIONS.CHANGE_GROUP:
            // TODO
            disabled = true;

            break;
        case LAUNCHER_ACTIONS.DELETE:
            // TODO
            disabled = true;

            break;
        default:
            disabled = true;

            break;
    }

    return {
        disabled,
        action,
    };
}