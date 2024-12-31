import Image from "next/image";
import skinAvatar from "../../../../../public/windstone_profile_skin.png";
import {useTranslations} from "next-intl";
import {useState} from "react";
import {useClickOutside} from "@mantine/hooks";
import {LAUNCHER_MENU_BAR_PROFILE_DROPDOWN_ITEMS} from "@/configs/launcher";

export default function ProfileButton() {
    const translate = useTranslations('Translations');
    const [opened, setOpened] = useState(false);
    const ref = useClickOutside(() => setOpened(false));

    function handleLeftClick() {
        setOpened(true);
    }

    return (
        <div className="relative">
            <div
                ref={ref}
                className="transition absolute right-0 top-9 flex flex-col gap-2 border-[#181822] border-[1px] p-1 bg-[#11111B]"
                style={{
                    opacity: opened ? 1 : 0,
                    visibility: opened ? 'visible' : 'hidden'
                }}
            >
                {
                    LAUNCHER_MENU_BAR_PROFILE_DROPDOWN_ITEMS.map((item) => {
                        return (
                            <div
                                className="flex gap-4 items-center rounded-md p-1 hover:bg-[#1D1A28]"
                                key={item.name}
                            >
                                {item.icon}
                                <div className="w-72 flex justify-between items-center gap-2">
                                    <p className="select-none text-nowrap text-[13px] text-[#cdd6f4]">
                                        {translate(item.name)}
                                    </p>
                                    <p className="select-none text-nowrap text-[13px] text-[#cdd6f4]">
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
                className="w-full h-full cursor-default px-2 rounded-md flex items-center gap-1 hover:bg-[#211e2f]"
            >
                <Image height={24} src={skinAvatar} alt={"Profile avatar"}/>
                {(
                    <p className="text-[13px] text-[#cdd6f4]">
                        {translate('launcher.profile')}
                    </p>
                )}
            </button>
        </div>
    );
}