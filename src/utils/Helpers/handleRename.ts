import {LauncherRenamesType} from "@/types/Launcher/LauncherRenames.type";

export default function handleRename({
    instanceName,
    currentRenames,
    updateCurrentRenames,
}: {
    instanceName: string;
    currentRenames: LauncherRenamesType;
    updateCurrentRenames: (instance: LauncherRenamesType) => void;
}) {
    updateCurrentRenames({
        ...currentRenames,
        [instanceName]: {
            name: currentRenames[instanceName].name,
            isBeingRenamed: !currentRenames[instanceName].isBeingRenamed,
        }
    });
}