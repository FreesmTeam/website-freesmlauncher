import {LauncherInstanceType} from "@/types/Launcher/LauncherInstance.type";

export type LauncherInstancesStateType = {
    currentInstance: LauncherInstanceType;
    updateCurrentInstance: (instance: LauncherInstanceType) => void;
};