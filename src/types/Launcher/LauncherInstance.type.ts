import {StaticImageData} from "next/image";

export type LauncherInstanceType = {
    name: string;
    version: string;
    group: string;
    icon: StaticImageData;
    launched: string | null,
    deleted: string;
    grayscale?: true;
};