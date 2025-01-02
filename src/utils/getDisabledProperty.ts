import {DELETED, LAUNCHER_ACTIONS} from "@/configs/launcher";
import {LauncherInstanceBarItemType} from "@/types/LauncherInstanceBarItem.type";
import {LauncherInstanceType} from "@/types/LauncherInstance.type";
import {HandleActionType} from "@/types/HandleAction.type";
import handleDelete from "@/utils/handleDelete";

export default function getDisabledProperty({
    item,
    currentInstance,
    updateCurrentInstance,
    handleLaunch,
}: {
    item: LauncherInstanceBarItemType;
    currentInstance: LauncherInstanceType;
    updateCurrentInstance: (instance: LauncherInstanceType) => void;
    handleLaunch: (data: HandleActionType) => void;
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

    const handleDeleteWrapper = () => (
        handleDelete({
            deleted: DELETED.PROCESS,
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
            disabled = true;
            action = () => handleDeleteWrapper();

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