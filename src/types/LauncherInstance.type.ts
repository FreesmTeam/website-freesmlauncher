import {StaticImageData} from "next/image";

export type LauncherInstanceType = {
    name: string;
    group?: string;
    icon: StaticImageData;
};