import {LAUNCHER_TABS} from "@/configs/launcher";
import Image from "next/image";
import skinAvatar from "../../../../public/windstone_profile_skin.png";
import {useTranslations} from "next-intl";
import {useState} from "react";
import {useClickOutside} from "@mantine/hooks";

export default function MenuBar() {
    const translate = useTranslations('Translations');
    const [opened, setOpened] = useState(false);
    const ref = useClickOutside(() => setOpened(false));

    return (
        <div
            onContextMenu={() => setOpened(true)}
            className="flex justify-between p-2.5 h-14 w-full bg-[#11111b]"
        >
            {opened && (
                <div
                    ref={ref}
                    className="absolute flex flex-col gap-2 border-[#181822] border-[1px] p-2 bg-[#11111B]"
                >

                </div>
            )}
            <div className="flex items-stretch gap-2">
                <div className="cursor-move w-[5px] rounded-full bg-[#dbcafe]"/>
                {
                    LAUNCHER_TABS.map((tab) => {
                        return (
                            <button
                                key={tab?.name ?? ''}
                                className="cursor-default px-2 rounded-md flex items-center gap-1 hover:bg-[#211e2f]"
                            >
                                {tab.icon}
                                {tab?.name && (
                                    <p className="text-[13px] text-[#cdd6f4]">
                                        {translate(tab.name)}
                                    </p>
                                )}
                            </button>
                        )
                    })
                }
            </div>
            <button
                className="cursor-default px-2 rounded-md flex items-center gap-1 hover:bg-[#211e2f]"
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