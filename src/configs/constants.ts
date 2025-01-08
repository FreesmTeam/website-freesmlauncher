import {HeaderExternalLinkType} from "@/types/HeaderExternalLink.type";
import {HeaderItemType} from "@/types/HeaderItem.type";
import { NavbarItemType } from "@/types/NavbarItem.type";
import {FooterLinksType} from "@/types/FooterLinks.type";

export const APP_NAME = 'Freesm Launcher';
export const APP_DESCRIPTION = 'Prism Launcher fork aimed to provide a free way to play Minecraft.';
export const PLACEHOLDER_OS = 'OS';
export const GITHUB_LINK = "https://github.com/FreesmTeam/FreesmLauncher";
export const TELEGRAM_LINK = "https://t.me/freesmteam";
export const HOME_LINK = '/';
export const DOWNLOADS_LINK = '/downloads';
export const ABOUT_LINK = '/about';
export const WINDOWS_X64 = 'Windows 64-bit';
export const WINDOWS_ARM64 = 'Windows ARM64';
export const WINDOWS_PLATFORMS = [WINDOWS_X64, WINDOWS_ARM64];
export const NAVBAR_ITEMS: NavbarItemType[] = [
    {
        name: 'navbar.home',
        icon: 'fluent:home-16-regular',
        selectedIcon: 'fluent:home-16-filled',
        link: HOME_LINK,
    },
    {
        name: 'navbar.downloads',
        icon: 'fluent:arrow-download-16-regular',
        selectedIcon: 'fluent:arrow-download-16-filled',
        link: DOWNLOADS_LINK,
    },
    {
        name: 'navbar.about',
        icon: 'fluent:info-16-regular',
        selectedIcon: 'fluent:info-16-filled',
        link: ABOUT_LINK,
    },
    {
        name: 'navbar.other',
        icon: 'fluent:more-horizontal-16-regular',
        selectedIcon: 'fluent:more-horizontal-16-regular',
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
export const DOWNLOADS_OPTIONS: ('Windows' | 'Linux' | 'macOS')[] = [
    WINDOWS_NAME,
    LINUX_NAME,
    MACOS_NAME
];
export const FEATURES_SECTIONS = [
    {
        title: "features.first-title",
        description: "features.first-description",
        icon: "fluent:people-community-16-regular",
    },
    {
        title: "features.second-title",
        description: "features.second-description",
        icon: "fluent:lock-open-16-regular",
    },
];
export const FOOTER_LINKS: FooterLinksType = [
    {
        title: "About",
        links: [
            {
                name: "Contribute",
                link: "",
            },
            {
                name: "About Freesm Launcher",
                link: "",
            },
            {
                name: "Download",
                link: "",
            }
        ],
    },
    {
        title: "Community",
        links: [
            {
                name: "Telegram Channel",
                link: "",
            },
            {
                name: "Telegram Chat",
                link: "",
            },
            {
                name: "Follow on Github",
                link: "",
            },
        ],
    },
    {
        title: "Project",
        links: [
            {
                name: "Source Code",
                link: "",
            },
            {
                name: "Github Issues",
                link: "",
            },
            {
                name: "Github Organization",
                link: "",
            },
        ],
    }
];