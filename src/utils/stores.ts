import { create } from 'zustand'
import {ProfileItemType} from "@/types/ProfileItem.type";
import {LAUNCHER_MENU_BAR_PROFILE_DROPDOWN_ITEMS} from "@/configs/launcher";
import {ProfileStateType} from "@/types/ProfileState.type";
import {LauncherBarsStateType} from "@/types/LauncherBarsState.type";
import {LauncherBarType} from "@/types/LauncherBar.type";

export const useProfileStore = create<ProfileStateType>((set) => ({
    currentProfile: LAUNCHER_MENU_BAR_PROFILE_DROPDOWN_ITEMS[0],
    updateCurrentProfile: (profile: ProfileItemType) => set({ currentProfile: profile }),
}));

export const useLauncherBarsStore = create<LauncherBarsStateType>((set) => ({
    newsBar: {
        name: 'launcher.news-toolbar',
        opened: true,
    },
    updateNewsBar: (bar: LauncherBarType) => set({
        newsBar: {
            name: bar.name,
            opened: bar.opened,
        }
    }),
    instanceBar: {
        name: 'launcher.instance-toolbar',
        opened: true,
    },
    updateInstanceBar: (bar: LauncherBarType) => set({
        newsBar: {
            name: bar.name,
            opened: bar.opened,
        }
    }),
    statusBar: {
        name: 'launcher.status-bar',
        opened: true,
    },
    updateStatusBar: (bar: LauncherBarType) => set({
        newsBar: {
            name: bar.name,
            opened: bar.opened,
        }
    }),
    lockBar: {
        name: 'launcher.lock-toolbars',
        opened: true,
    },
    updateLockBar: (bar: LauncherBarType) => set({
        newsBar: {
            name: bar.name,
            opened: bar.opened,
        }
    }),
}));