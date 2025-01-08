import {Icon} from "@iconify/react";
import {TabNameType} from "@/types/TabName.type";
import {ProfileItemType} from "@/types/ProfileItem.type";
import windstoneSkinAvatar from "../../public/windstone_skin_avatar.png";
import hand7sSkinAvatar from "../../public/hand7s_skin_avatar.png";
import kaeeraaSkinAvatar from "../../public/kaeeraa_skin_avatar.png";
import monochromeSteveSkinAvatar from "../../public/monochrome_steve.png";
import Image from "next/image";
import {LauncherInstanceBarItemType} from "@/types/LauncherInstanceBarItem.type";
import {LauncherInstanceType} from "@/types/LauncherInstance.type";
import grassSvg from "../../public/grass.svg";
import stoneSvg from "../../public/stone.svg";
import diamondSvg from "../../public/diamond.svg";
import {LauncherRenamesType} from "@/types/LauncherRenames.type";

export const PLACEHOLDER_GROUP = 'launcher.placeholder-group';
export const NO_GROUP = 'launcher.ungrouped';
export const EAGLERCRAFT_INSTANCE_NAME = 'EaglerCraft 1.5.2';
export const EAGLERCRAFT_EMBED_URL = 'https://sd592g.github.io/zj684od4lfg/';
export const ANIMATION_NAME = 'animate-shake';
export const DELETED = {
    PROCESS: 'in-the-process',
    NO: 'no',
    YES: 'yes',
};
export const LAUNCHER_ACTIONS = {
    _TYPE: 'launcher-actions-property',
    RENAME: 'rename',
    LAUNCH: 'launch',
    KILL: 'kill',
    EDIT: 'edit',
    CHANGE_GROUP: 'change_group',
    FOLDER: 'folder',
    EXPORT: 'export',
    COPY: 'copy',
    DELETE: 'delete',
    CREATE_SHORTCUT: 'create_shortcut',
};
export const LAUNCHER_TABS: TabNameType[] = [
    {
        icon: (
            <Icon className="h-4 sm:h-8" color="#fff" fontSize={24} icon="fluent:add-square-24-regular" />
        ),
        name: 'launcher.add-instance',
    },
    {
        icon: (
            <Icon className="h-4 sm:h-8" color="#9298b6" fontSize={24} icon="fluent:folder-24-regular" />
        ),
        name: 'launcher.folders',
        disabled: true,
    },
    {
        icon: (
            <Icon className="h-4 sm:h-8" color="#fff" fontSize={24} icon="fluent:settings-24-regular" />
        ),
        name: 'launcher.settings'
    },
    {
        icon: (
            <Icon className="h-4 sm:h-8" color="#fff" fontSize={24} icon="fluent:chat-help-24-regular" />
        ),
        name: 'launcher.help'
    },
    {
        icon: (
            <Icon className="h-4 sm:h-8" color="#9298b6" fontSize={24} icon="fluent:phone-update-24-regular" />
        ),
        name: 'launcher.update',
        disabled: true,
    },
    {
        icon: (
            <Icon className="h-4 sm:h-8" color="#fff" fontSize={24} icon="fluent:animal-cat-24-regular" />
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
        hotkey: "Maintainer",
    },
    {
        skin: hand7sSkinAvatar,
        icon: (
            <Image height={16} width={16} src={hand7sSkinAvatar} alt={"hand7s skin avatar"}/>
        ),
        name: "launcher.hand7s",
        hotkey: "Maintainer",
    },
    {
        skin: kaeeraaSkinAvatar,
        icon: (
            <Image height={16} width={16} src={kaeeraaSkinAvatar} alt={"kaeeraa skin avatar"}/>
        ),
        name: "launcher.kaeeraa",
        hotkey: "Maintainer",
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
        icon: <Icon fontSize={14} icon="fluent:triangle-right-16-regular" />,
        action: LAUNCHER_ACTIONS.LAUNCH,
    },
    {
        name: 'launcher.instance.kill',
        icon: <Icon fontSize={14} icon="fluent:dismiss-circle-16-regular" />,
        action: LAUNCHER_ACTIONS.KILL,
    },
    {
        name: 'launcher.instance.edit',
        icon: <Icon fontSize={14} icon="fluent:settings-16-regular" />,
        action: LAUNCHER_ACTIONS.EDIT,
    },
    {
        name: 'launcher.instance.change-group',
        icon: <Icon fontSize={14} icon="fluent:tag-16-regular" />,
        action: LAUNCHER_ACTIONS.CHANGE_GROUP,
    },
    {
        name: 'launcher.instance.folder',
        icon: <Icon fontSize={14} icon="fluent:folder-16-regular" />,
        action: LAUNCHER_ACTIONS.FOLDER,
    },
    {
        name: 'launcher.instance.export',
        icon: <Icon fontSize={14} icon="fluent:folder-arrow-right-16-regular" />,
        action: LAUNCHER_ACTIONS.EXPORT,
    },
    {
        name: 'launcher.instance.copy',
        icon: <Icon fontSize={14} icon="fluent:copy-arrow-right-16-regular" />,
        action: LAUNCHER_ACTIONS.COPY,
    },
    {
        name: 'launcher.instance.delete',
        icon: <Icon fontSize={14} icon="fluent:delete-16-regular" />,
        action: LAUNCHER_ACTIONS.DELETE,
    },
    {
        name: 'launcher.instance.create-shortcut',
        icon: <Icon fontSize={14} icon="fluent:link-16-regular" />,
        action: LAUNCHER_ACTIONS.CREATE_SHORTCUT,
    },
];
export const UNKNOWN_INSTANCE: LauncherInstanceType = {
    name: 'Unknown',
    version: 'unknown',
    group: NO_GROUP,
    icon: grassSvg,
    launched: null,
    deleted: DELETED.NO,
    grayscale: true,
};
export const LAUNCHER_GROUPS: string[] = [
    NO_GROUP, PLACEHOLDER_GROUP
];
export const LAUNCHER_INSTANCES: LauncherInstanceType[] = [
    {
        name: EAGLERCRAFT_INSTANCE_NAME,
        version: '1.5.2',
        group: NO_GROUP,
        icon: grassSvg,
        launched: null,
        deleted: DELETED.NO,
    },
    {
        name: '1.21',
        version: '1.21',
        group: PLACEHOLDER_GROUP,
        icon: grassSvg,
        launched: null,
        deleted: DELETED.NO,
    },
    {
        name: '1.12.2',
        version: '1.12.2',
        group: PLACEHOLDER_GROUP,
        icon: stoneSvg,
        launched: null,
        deleted: DELETED.NO,
    },
    {
        name: 'Some 1.16.5 modpack with a long name',
        version: '1.16.5',
        group: PLACEHOLDER_GROUP,
        icon: diamondSvg,
        launched: null,
        deleted: DELETED.NO,
    }
];
export const LAUNCHER_RENAMES: LauncherRenamesType = {
    [EAGLERCRAFT_INSTANCE_NAME]: {
        name: null,
        isBeingRenamed: false,
    },
    '1.21': {
        name: null,
        isBeingRenamed: false,
    },
    '1.12.2': {
        name: null,
        isBeingRenamed: false,
    },
    'Some 1.16.5 modpack with a long name': {
        name: null,
        isBeingRenamed: false,
    },
    'Unknown': {
        name: null,
        isBeingRenamed: false,
    }
};
export const LAUNCHER_INSTANCE_CONTEXT_MENU_ITEMS: LauncherInstanceBarItemType[] = [
    {
        name: 'launcher.instance.rename',
        icon: <Icon
            height={14}
            icon="fluent:edit-16-regular"
            aria-label={LAUNCHER_ACTIONS._TYPE}
        />,
        action: LAUNCHER_ACTIONS.RENAME,
    },
    {
        name: 'launcher.instance.change-icon',
        icon: <Image
            height={14}
            src={grassSvg}
            alt={"Grass svg icon"}
            aria-label={LAUNCHER_ACTIONS._TYPE}
        />
    },
    ...LAUNCHER_INSTANCE_BAR_ITEMS
];
