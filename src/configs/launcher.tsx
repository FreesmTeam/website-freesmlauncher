import {Icon} from "@iconify/react";
import {TabNameType} from "@/types/TabName.type";

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