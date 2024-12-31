import {LauncherBarType} from "@/types/LauncherBar.type";

export type LauncherBarsStateType = {
    entries: LauncherBarType[];
    updateEntries: (bars: LauncherBarType[]) => void;
}