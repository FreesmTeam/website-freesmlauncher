import {StaticImageData} from "next/image";

export type ProfileItemType = {
    skin: StaticImageData;
    icon: React.ReactNode;
    name: string;
    hotkey?: string;
};