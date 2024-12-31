import {Icon} from "@iconify/react";
import {TabNameType} from "@/types/TabName.type";
import {ProfileItemType} from "@/types/ProfileItem.type";
import windstoneSkinAvatar from "../../public/windstone_profile_skin.png";
import hand7sSkinAvatar from "../../public/hand7s_skin_avatar.png";
import monochromeSteveSkinAvatar from "../../public/monochrome_steve.png";
import Image from "next/image";
import {LauncherInstanceBarItemType} from "@/types/LauncherInstanceBarItem.type";
import {LauncherInstanceType} from "@/types/LauncherInstance.type";
import grassSvg from "../../public/grass.svg";
import stoneSvg from "../../public/stone.svg";
import diamondSvg from "../../public/diamond.svg";

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
export const LAUNCHER_INSTANCE_BAR_ITEMS: LauncherInstanceBarItemType[] = [
    {
        name: 'launcher.instance.launch',
        icon: <Icon height={14} icon="fluent:triangle-right-16-regular" />
    },
    {
        name: 'launcher.instance.kill',
        icon: <Icon height={14} icon="fluent:dismiss-circle-16-regular" />
    },
    {
        name: 'launcher.instance.edit',
        icon: <Icon height={14} icon="fluent:settings-16-regular" />
    },
    {
        name: 'launcher.instance.change-group',
        icon: <Icon height={14} icon="fluent:tag-16-regular" />
    },
    {
        name: 'launcher.instance.folder',
        icon: <Icon height={14} icon="fluent:folder-16-regular" />
    },
    {
        name: 'launcher.instance.export',
        icon: <Icon height={14} icon="fluent:folder-arrow-right-16-regular" />
    },
    {
        name: 'launcher.instance.copy',
        icon: <Icon height={14} icon="fluent:copy-arrow-right-16-regular" />
    },
    {
        name: 'launcher.instance.delete',
        icon: <Icon height={14} icon="fluent:delete-16-regular" />
    },
    {
        name: 'launcher.instance.create-shortcut',
        icon: <Icon height={14} icon="fluent:link-16-regular" />
    },
];
export const LAUNCHER_INSTANCES: LauncherInstanceType[] = [
    {
        name: '1.21',
        group: 'Vanilla',
        icon: grassSvg,
    },
    {
        name: '1.12.2',
        group: 'Vanilla',
        icon: stoneSvg,
    },
    {
        name: 'Some 1.16.5 modpack with a long name',
        group: 'Fabric',
        icon: diamondSvg,
    }
];
export const LAUNCHER_INSTANCE_CONTEXT_MENU_ITEMS: LauncherInstanceBarItemType[] = [
    {
        name: 'launcher.instance.rename',
        icon: <Icon height={14} icon="fluent:edit-16-regular" />,
    },
    {
        name: 'launcher.instance.change-icon',
        icon: <Image height={14} src={grassSvg} alt={"Grass svg icon"} />
    },
    ...LAUNCHER_INSTANCE_BAR_ITEMS
];