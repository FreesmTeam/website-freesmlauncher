import { create } from 'zustand'
import {ProfileItemType} from "@/types/ProfileItem.type";
import {LAUNCHER_MENU_BAR_PROFILE_DROPDOWN_ITEMS} from "@/configs/launcher";
import {ProfileStateType} from "@/types/ProfileState.type";

export const useProfileStore = create<ProfileStateType>((set) => ({
    currentProfile: LAUNCHER_MENU_BAR_PROFILE_DROPDOWN_ITEMS[0],
    updateCurrentProfile: (profile: ProfileItemType) => set({ currentProfile: profile }),
}))
