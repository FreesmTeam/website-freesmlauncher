import {LauncherRenamesType} from "@/types/LauncherRenames.type";

export type LauncherRenamesStateType = {
    currentRenames: LauncherRenamesType;
    updateCurrentRenames: (instance: LauncherRenamesType) => void;
};