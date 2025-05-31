import {HeaderExternalLinkType} from "@/types/Layout/HeaderExternalLink.type";
import {HeaderItemType} from "@/types/Layout/HeaderItem.type";
import { NavbarItemType } from "@/types/Layout/NavbarItem.type";
import {FooterLinksType} from "@/types/Layout/FooterLinks.type";
import {DictionariesType} from "@/types/Other/Dictionaries.type";

export const APP_NAME = 'Freesm Launcher';
export const APP_DESCRIPTION = 'Prism Launcher fork aimed to provide a free way to play Minecraft.';
export const PLACEHOLDER_OS = 'OS';
export const GITHUB_LINK = "https://github.com/FreesmTeam/FreesmLauncher";
export const GITHUB_ISSUES_LINK = "https://github.com/FreesmTeam/FreesmLauncher/issues";
export const GITHUB_CONTRIBUTE_LINK = "https://github.com/FreesmTeam/FreesmLauncher/blob/develop/CONTRIBUTING.md";
export const GITHUB_ORGANIZATION_LINK = "https://github.com/FreesmTeam/";
export const TELEGRAM_GROUP_LINK = "https://t.me/freesmteam";
export const TELEGRAM_CHAT_LINK = "https://t.me/+DL82hkeJAq9kMTMy";
export const HOME_LINK = '/';
export const DOWNLOADS_LINK = '/downloads';
export const ABOUT_LINK = '/about';
export const WINDOWS_X64 = 'Windows 64-bit';
export const WINDOWS_ARM64 = 'Windows ARM64';
export const WINDOWS_PLATFORMS = [WINDOWS_X64, WINDOWS_ARM64];
export const NAVBAR_ITEMS = (dictionaries: DictionariesType): NavbarItemType[] => [
    {
        name: dictionaries?.Translations?.navbar?.home,
        icon: 'fluent:home-16-regular',
        selectedIcon: 'fluent:home-16-filled',
        link: HOME_LINK,
    },
    {
        name: dictionaries?.Translations?.navbar?.downloads,
        icon: 'fluent:arrow-download-16-regular',
        selectedIcon: 'fluent:arrow-download-16-filled',
        link: DOWNLOADS_LINK,
    },
    {
        name: dictionaries?.Translations?.navbar?.about,
        icon: 'fluent:info-16-regular',
        selectedIcon: 'fluent:info-16-filled',
        link: ABOUT_LINK,
    },
    {
        name: dictionaries?.Translations?.navbar?.["change-language"],
        icon: 'placeholder',
        selectedIcon: 'placeholder',
        isAction: true,
    }
];
export const HEADER_LINKS: HeaderExternalLinkType[] = [
    {
        name: 'Github',
        link: GITHUB_LINK,
        icon: "mdi:github",
        height: 24,
    },
    {
        name: 'Telegram',
        link: TELEGRAM_GROUP_LINK,
        icon: "mdi:telegram",
        height: 20,
    }
];
export const HEADER_ITEMS = (dictionaries: DictionariesType): HeaderItemType[] => [
    {
        name: dictionaries?.Translations?.general?.home,
        link: HOME_LINK,
    },
    {
        name: dictionaries?.Translations?.general?.download,
        link: DOWNLOADS_LINK,
    },
    {
        name: dictionaries?.Translations?.general?.about,
        link: ABOUT_LINK,
    }
];
export const WINDOWS_NAME = 'Windows';
export const LINUX_NAME = 'Linux';
export const MACOS_NAME = 'macOS';
export const DOWNLOADS_OPTIONS: ('Windows' | 'Linux' | 'macOS')[] = [
    WINDOWS_NAME,
    LINUX_NAME,
    MACOS_NAME
];
export const FEATURES_SECTIONS = (dictionaries: DictionariesType) => [
    {
        title: dictionaries?.Translations?.features?.["open-source"]?.title,
        description: dictionaries?.Translations?.features?.["open-source"]?.description,
        icon: "fluent:people-community-16-regular",
    },
    {
        title: dictionaries?.Translations?.features?.["drm-free"]?.title,
        description: dictionaries?.Translations?.features?.["drm-free"]?.description,
        icon: "fluent:lock-open-16-regular",
    },
    {
        title: dictionaries?.Translations?.features?.["performance"]?.title,
        description: dictionaries?.Translations?.features?.["performance"]?.description,
        icon: "fluent:flash-16-regular",
    },
    {
        title: dictionaries?.Translations?.features?.["customization"]?.title,
        description: dictionaries?.Translations?.features?.["customization"]?.description,
        icon: "fluent:settings-16-regular",
    },
];
export const FOOTER_LINKS = (dictionaries: DictionariesType): FooterLinksType => [
    {
        title: dictionaries?.Translations?.footer?.about?.title,
        links: [
            {
                name: dictionaries?.Translations?.footer?.about?.links?.contribute,
                link: GITHUB_CONTRIBUTE_LINK,
            },
            {
                name: dictionaries?.Translations?.footer?.about?.links?.about,
                link: ABOUT_LINK,
            },
            {
                name: dictionaries?.Translations?.footer?.about?.links?.download,
                link: DOWNLOADS_LINK,
            }
        ],
    },
    {
        title: dictionaries?.Translations?.footer?.community?.title,
        links: [
            {
                name: dictionaries?.Translations?.footer?.community?.links?.["telegram-channel"],
                link: TELEGRAM_GROUP_LINK,
            },
            {
                name: dictionaries?.Translations?.footer?.community?.links?.["telegram-chat"],
                link: TELEGRAM_CHAT_LINK,
            },
            {
                name: dictionaries?.Translations?.footer?.community?.links?.["follow-on-github"],
                link: GITHUB_ORGANIZATION_LINK,
            },
        ],
    },
    {
        title: dictionaries?.Translations?.footer?.project?.title,
        links: [
            {
                name: dictionaries?.Translations?.footer?.project?.links?.["source-code"],
                link: GITHUB_LINK,
            },
            {
                name: dictionaries?.Translations?.footer?.project?.links?.["github-issues"],
                link: GITHUB_ISSUES_LINK,
            },
        ],
    }
];
