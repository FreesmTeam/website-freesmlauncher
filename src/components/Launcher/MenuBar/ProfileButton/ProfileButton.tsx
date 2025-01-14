import Image from "next/image";
import {useTranslations} from "next-intl";
import {useState} from "react";
import {useClickOutside, useHotkeys} from "@mantine/hooks";
import {LAUNCHER_MENU_BAR_PROFILE_DROPDOWN_ITEMS} from "@/configs/launcher";
import {ProfileItemType} from "@/types/ProfileItem.type";
import {useProfileStore} from "@/utils/Stores/Stores";
import {ProfileStateType} from "@/types/ProfileState.type";

const PROFILE_UNSELECT_HOTKEY = 'ctrl+0';

export default function ProfileButton() {
    const translate = useTranslations('Translations');

    useHotkeys(
        [[PROFILE_UNSELECT_HOTKEY, () => handleProfileChange(
            LAUNCHER_MENU_BAR_PROFILE_DROPDOWN_ITEMS.find(
                (profile) => profile.hotkey?.toLowerCase() === PROFILE_UNSELECT_HOTKEY
            ) ?? LAUNCHER_MENU_BAR_PROFILE_DROPDOWN_ITEMS[0]
        )]],
        ['INPUT', 'TEXTAREA']
    );

    const currentProfile = useProfileStore((state: ProfileStateType) => state.currentProfile);
    const updateCurrentProfile = useProfileStore((state: ProfileStateType) => state.updateCurrentProfile);

    const [opened, setOpened] = useState(false);
    const ref = useClickOutside(() => setOpened(false));

    function handleLeftClick() {
        setOpened(true);
    }

    function handleProfileChange(profile: ProfileItemType) {
        // Only selectable profiles have hotkey
        if (profile.hotkey) {
            updateCurrentProfile(profile);
            setOpened(false);
        }
    }

    return (
        <div className="relative">
            <div
                ref={ref}
                className="z-[1000] transition absolute right-0 top-9 flex flex-col gap-2 border-[#181822] border-[1px] p-1 bg-crust"
                style={{
                    opacity: opened ? 1 : 0,
                    visibility: opened ? 'visible' : 'hidden'
                }}
            >
                {
                    LAUNCHER_MENU_BAR_PROFILE_DROPDOWN_ITEMS.map((item: ProfileItemType) => {
                        if (!item.hotkey) {
                            return (
                                <div
                                    className="select-none flex gap-2 sm:gap-4 items-center p-1"
                                    key={item.name}
                                >
                                    {item.icon}
                                    <div className="w-80 flex justify-between items-center gap-2">
                                        <p className="text-nowrap text-[10px] sm:text-[13px] text-[#939AB8]">
                                            {translate(item.name)}
                                        </p>
                                    </div>
                                </div>
                            );
                        }

                        return (
                            <div
                                onClick={() => handleProfileChange(item)}
                                className="transition flex gap-2 sm:gap-4 items-center rounded-md p-1 hover:bg-[#1D1A28]"
                                key={item.name}
                            >
                                {item.icon}
                                <div className="w-80 flex justify-between items-center gap-2">
                                    <p className="select-none text-nowrap text-[10px] sm:text-[13px] text-[#cdd6f4]">
                                        {translate(item.name)}
                                    </p>
                                    <p className="select-none text-nowrap text-[10px] sm:text-[13px] text-[#cdd6f4]">
                                        {item.hotkey}
                                    </p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <button
                onClick={handleLeftClick}
                className="transition flex-wrap sm:flex-nowrap justify-center sm:justify-normal w-full h-full px-2 rounded-md flex items-center gap-2 hover:bg-[#211e2f] focus:bg-[#171721]"
            >
                <Image height={24} src={currentProfile.skin} alt={"Profile avatar"}/>
                {(
                    <p className="text-[10px] sm:text-[13px] text-[#cdd6f4]">
                        {translate(currentProfile.name)}
                    </p>
                )}
            </button>
        </div>
    );
}