import {ProfileItemType} from "@/types/ProfileItem.type";

export type ProfileStateType = {
    currentProfile: ProfileItemType;
    updateCurrentProfile: (profile: ProfileItemType) => void;
}