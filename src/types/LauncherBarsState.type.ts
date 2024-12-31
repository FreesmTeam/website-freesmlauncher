import {LauncherBarType} from "@/types/LauncherBar.type";

export type LauncherBarsStateType = {
    newsBar: LauncherBarType;
    updateNewsBar: (bar: LauncherBarType) => void;
    instanceBar: LauncherBarType;
    updateInstanceBar: (bar: LauncherBarType) => void;
    statusBar: LauncherBarType;
    updateStatusBar: (bar: LauncherBarType) => void;
    lockBar: LauncherBarType;
    updateLockBar: (bar: LauncherBarType) => void;
}