import {StaticImageData} from "next/image";

export type ProfileItemType = {
    skin: StaticImageData;
    icon: React.ReactNode;
    name: "windstone_" | "hand7s" | "kaeeraa" | "so5iso4ka" | "m3oweezed" | "no-default-account" | "manage-accounts";
    hotkey?: string;
};
