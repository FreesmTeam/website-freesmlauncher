import {HeaderExternalLinkType} from "@/types/HeaderExternalLink.type";
import {HeaderItemType} from "@/types/HeaderItem.type";

export const GITHUB_LINK = "https://github.com/FreesmTeam/FreesmLauncher";
export const TELEGRAM_LINK = "https://t.me/freesmteam";
export const DOWNLOADS_LINK = '/downloads';
export const ABOUT_LINK = '/about';
export const HEADER_LINKS: HeaderExternalLinkType[] = [
    {
        link: GITHUB_LINK,
        icon: "mdi:github",
        height: 24,
    },
    {
        link: TELEGRAM_LINK,
        icon: "mdi:telegram",
        height: 20,
    }
];
export const HEADER_ITEMS: HeaderItemType[] = [
    {
        name: 'general.download',
        link: DOWNLOADS_LINK,
    },
    {
        name: 'general.about',
        link: ABOUT_LINK,
    }
];