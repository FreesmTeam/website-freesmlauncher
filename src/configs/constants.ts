import {HeaderExternalLinkType} from "@/types/HeaderExternalLink.type";
import {HeaderItemType} from "@/types/HeaderItem.type";
import { NavbarItemType } from "@/types/NavbarItem.type";
import {FooterLinksType} from "@/types/FooterLinks.type";

export const APP_NAME = 'Freesm Launcher';
export const APP_DESCRIPTION = 'Prism Launcher fork aimed to provide a free way to play Minecraft.';
export const PLACEHOLDER_OS = 'OS';
export const GITHUB_LINK = "https://github.com/FreesmTeam/FreesmLauncher";
export const GITHUB_ISSUES_LINK = "https://github.com/FreesmTeam/FreesmLauncher/issues";
export const GITHUB_CONTRIBUTE_LINK = "https://github.com/FreesmTeam/FreesmLauncher/blob/develop/CONTRIBUTING.md";
export const GITHUB_ORGANIZATION_LINK = "https://github.com/FreesmTeam/";
export const TELEGRAM_GROUP_LINK = "https://t.me/freesmteam";
export const TELEGRAM_CHAT_LINK = "https://t.me/+ibDmmJF4TXo2Y2Ey";
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
        name: 'navbar.change-language',
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
        title: "features.open-source.title",
        description: "features.open-source.description",
        icon: "fluent:people-community-16-regular",
    },
    {
        title: "features.drm-free.title",
        description: "features.drm-free.description",
        icon: "fluent:lock-open-16-regular",
    },
    {
        title: "features.performance.title",
        description: "features.performance.description",
        icon: "fluent:flash-16-regular",
    },
    {
        title: "features.customization.title",
        description: "features.customization.description",
        icon: "fluent:settings-16-regular",
    },
];
export const FOOTER_LINKS: FooterLinksType = [
    {
        title: "footer.about.title",
        links: [
            {
                name: "footer.about.links.contribute",
                link: GITHUB_CONTRIBUTE_LINK,
            },
            {
                name: "footer.about.links.about",
                link: ABOUT_LINK,
            },
            {
                name: "footer.about.links.download",
                link: DOWNLOADS_LINK,
            }
        ],
    },
    {
        title: "footer.community.title",
        links: [
            {
                name: "footer.community.links.telegram-channel",
                link: TELEGRAM_GROUP_LINK,
            },
            {
                name: "footer.community.links.telegram-chat",
                link: TELEGRAM_CHAT_LINK,
            },
            {
                name: "footer.community.links.follow-on-github",
                link: GITHUB_ORGANIZATION_LINK,
            },
        ],
    },
    {
        title: "footer.project.title",
        links: [
            {
                name: "footer.project.links.source-code",
                link: GITHUB_LINK,
            },
            {
                name: "footer.project.links.github-issues",
                link: GITHUB_ISSUES_LINK,
            },
        ],
    }
];