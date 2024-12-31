import { create } from 'zustand'
import {ProfileItemType} from "@/types/ProfileItem.type";
import {LAUNCHER_INSTANCES, LAUNCHER_MENU_BAR_PROFILE_DROPDOWN_ITEMS} from "@/configs/launcher";
import {ProfileStateType} from "@/types/ProfileState.type";
import {LauncherBarsStateType} from "@/types/LauncherBarsState.type";
import {LauncherBarType} from "@/types/LauncherBar.type";
import {LauncherInstanceType} from "@/types/LauncherInstance.type";
import {LauncherInstancesStateType} from "@/types/LauncherInstancesState.type";

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