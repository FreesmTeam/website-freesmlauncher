import {LauncherRenamesType} from "@/types/Launcher/LauncherRenames.type";

export type LauncherRenamesStateType = {
    currentRenames: LauncherRenamesType;
    updateCurrentRenames: (instance: LauncherRenamesType) => void;
};