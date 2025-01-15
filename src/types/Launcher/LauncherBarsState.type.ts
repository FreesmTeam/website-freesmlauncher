import {LauncherBarType} from "@/types/Launcher/LauncherBar.type";

export type LauncherBarsStateType = {
    entries: LauncherBarType[];
    updateEntries: (bars: LauncherBarType[]) => void;
}