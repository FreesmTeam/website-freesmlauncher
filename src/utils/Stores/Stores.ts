import { create } from 'zustand'
import {ProfileItemType} from "@/types/ProfileItem.type";
import {LAUNCHER_INSTANCES, LAUNCHER_MENU_BAR_PROFILE_DROPDOWN_ITEMS, LAUNCHER_RENAMES} from "@/configs/launcher";
import {ProfileStateType} from "@/types/ProfileState.type";
import {LauncherBarsStateType} from "@/types/LauncherBarsState.type";
import {LauncherBarType} from "@/types/LauncherBar.type";
import {LauncherInstanceType} from "@/types/LauncherInstance.type";
import {LauncherInstancesStateType} from "@/types/LauncherInstancesState.type";
import {LauncherRenamesStateType} from "@/types/LauncherRenamesState.type";
import {LauncherRenamesType} from "@/types/LauncherRenames.type";
import {LauncherCatPackStateType} from "@/types/LauncherCatPackState.type";

export const useProfileStore = create<ProfileStateType>((set) => ({
    currentProfile: LAUNCHER_MENU_BAR_PROFILE_DROPDOWN_ITEMS[0],
    updateCurrentProfile: (profile: ProfileItemType) => set({ currentProfile: profile }),
}));

export const useLauncherBarsStore = create<LauncherBarsStateType>((set) => ({
    entries: [
        {
            name: 'launcher.news-toolbar',
            opened: true,
        },
        {
            name: 'launcher.instance-toolbar',
            opened: true,
        },
        {
            name: 'launcher.status-bar',
            opened: true,
        },
        {
            name: 'launcher.lock-toolbars',
            opened: false,
        }
    ],
    updateEntries: (bars: LauncherBarType[]) => set({
        entries: bars,
    })
}));

export const useInstanceStore = create<LauncherInstancesStateType>((set) => ({
    currentInstance: LAUNCHER_INSTANCES[0],
    updateCurrentInstance: (instance: LauncherInstanceType) => set({ currentInstance: instance }),
}));

export const useRenamesStore = create<LauncherRenamesStateType>((set) => ({
    currentRenames: LAUNCHER_RENAMES,
    updateCurrentRenames: (renames: LauncherRenamesType) => set({ currentRenames: renames})
}));

export const useCatPackStore = create<LauncherCatPackStateType>((set) => ({
    enabled: false,
    updateEnabled: (enabled: boolean) => set({ enabled })
}));