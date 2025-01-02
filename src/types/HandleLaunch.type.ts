import {LauncherInstanceType} from "@/types/LauncherInstance.type";

export type HandleLaunchType = {
    launched: string | null;
    updateCurrentInstance: (instance: LauncherInstanceType) => void;
    currentInstance: LauncherInstanceType;
};