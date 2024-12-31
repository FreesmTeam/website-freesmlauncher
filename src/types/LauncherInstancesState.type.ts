import {LauncherInstanceType} from "@/types/LauncherInstance.type";

export type LauncherInstancesStateType = {
    currentInstance: LauncherInstanceType;
    updateCurrentInstance: (instance: LauncherInstanceType) => void;
};