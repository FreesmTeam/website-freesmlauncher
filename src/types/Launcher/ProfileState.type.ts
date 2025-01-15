import {ProfileItemType} from "@/types/Launcher/ProfileItem.type";

export type ProfileStateType = {
    currentProfile: ProfileItemType;
    updateCurrentProfile: (profile: ProfileItemType) => void;
}