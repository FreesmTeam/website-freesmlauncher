import {Icon} from "@iconify/react";
import {TabNameType} from "@/types/TabName.type";
import {ProfileItemType} from "@/types/ProfileItem.type";
import windstoneSkinAvatar from "../../public/windstone_profile_skin.png";
import hand7sSkinAvatar from "../../public/hand7s_skin_avatar.png";
import monochromeSteveSkinAvatar from "../../public/monochrome_steve.png";
import Image from "next/image";

export const LAUNCHER_TABS: TabNameType[] = [
    {
        icon: (
            <Icon color="#fff" fontSize={24} icon="fluent:add-square-24-regular" />
        ),
        name: 'launcher.add-instance',
    },
    {
        icon: (
            <Icon color="#fff" fontSize={24} icon="fluent:folder-24-regular" />
        ),
        name: 'launcher.folders'
    },
    {
        icon: (
            <Icon color="#fff" fontSize={24} icon="fluent:settings-24-regular" />
        ),
        name: 'launcher.settings'
    },
    {
        icon: (
            <Icon color="#fff" fontSize={24} icon="fluent:chat-help-24-regular" />
        ),
        name: 'launcher.help'
    },
    {
        icon: (
            <Icon color="#fff" fontSize={24} icon="fluent:phone-update-24-regular" />
        ),
        name: 'launcher.update'
    },
    {
        icon: (
            <Icon color="#fff" fontSize={24} icon="fluent:animal-cat-24-regular" />
        ),
    },
];
export const LAUNCHER_MENU_BAR_CONTEXT_MENU_BUTTON = [
    'launcher.news-toolbar',
    'launcher.instance-toolbar',
    'launcher.status-bar',
    'launcher.lock-toolbars',
];
export const LAUNCHER_MENU_BAR_PROFILE_DROPDOWN_ITEMS: ProfileItemType[] = [
    {
        skin: windstoneSkinAvatar,
        icon: (
            <Image height={16} width={16} src={windstoneSkinAvatar} alt={"windstone_ skin avatar"}/>
        ),
        name: "launcher.windstone_",
        hotkey: "Ctrl+2",
    },
    {
        skin: hand7sSkinAvatar,
        icon: (
            <Image height={16} width={16} src={hand7sSkinAvatar} alt={"hand7s skin avatar"}/>
        ),
        name: "launcher.hand7s",
        hotkey: "Ctrl+1",
    },
    {
        skin: monochromeSteveSkinAvatar,
        icon: (
            <Image height={16} width={16} src={monochromeSteveSkinAvatar} alt={"Monochrome Steve avatar"}/>
        ),
        name: "launcher.no-default-account",
        hotkey: "Ctrl+0",
    },
    {
        skin: monochromeSteveSkinAvatar,
        icon: (
            <Icon color="#fff" fontSize={16} icon="fluent:people-16-regular" />
        ),
        name: "launcher.manage-accounts",
    }
];