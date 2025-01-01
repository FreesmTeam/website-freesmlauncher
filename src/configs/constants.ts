import {HeaderExternalLinkType} from "@/types/HeaderExternalLink.type";
import {HeaderItemType} from "@/types/HeaderItem.type";

export const GITHUB_LINK = "https://github.com/FreesmTeam/FreesmLauncher";
export const TELEGRAM_LINK = "https://t.me/freesmteam";
export const HOME_LINK = '/';
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
        name: 'general.home',
        link: HOME_LINK,
    },
    {
        name: 'general.download',
        link: DOWNLOADS_LINK,
    },
    {
        name: 'general.about',
        link: ABOUT_LINK,
    }
];
export const WINDOWS_NAME = 'Windows';
export const LINUX_NAME = 'Linux';
export const MACOS_NAME = 'macOS';
export const DOWNLOADS_OPTIONS = [
    WINDOWS_NAME,
    LINUX_NAME,
    MACOS_NAME
];