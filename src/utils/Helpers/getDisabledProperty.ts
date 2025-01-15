import {DELETED, LAUNCHER_ACTIONS, UNKNOWN_INSTANCE} from "@/configs/launcher";
import {LauncherInstanceBarItemType} from "@/types/Launcher/LauncherInstanceBarItem.type";
import {LauncherInstanceType} from "@/types/Launcher/LauncherInstance.type";
import {HandleActionType} from "@/types/Launcher/HandleAction.type";
import handleDelete from "@/utils/Helpers/handleDelete";
import handleRename from "@/utils/Helpers/handleRename";
import {LauncherRenamesType} from "@/types/Launcher/LauncherRenames.type";

export default function getDisabledProperty({
    item,
    currentInstance,
    updateCurrentInstance,
    handleLaunch,
    currentRenames,
    updateCurrentRenames,
}: {
    item: LauncherInstanceBarItemType;
    currentInstance: LauncherInstanceType;
    updateCurrentInstance: (instance: LauncherInstanceType) => void;
    handleLaunch: (data: HandleActionType) => void;
    currentRenames: LauncherRenamesType;
    updateCurrentRenames: (instance: LauncherRenamesType) => void;
}) {
    let disabled;
    let action = () => {};

    if (currentInstance.name === UNKNOWN_INSTANCE.name) {
        return {
            disabled: true,
            action,
        }
    }

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
        case LAUNCHER_ACTIONS.RENAME:
            disabled = false;
            action = () => handleRename({
                instanceName: currentInstance.name,
                currentRenames,
                updateCurrentRenames,
            });

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
            disabled = currentInstance.deleted === DELETED.YES;
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