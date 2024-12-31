import {LAUNCHER_MENU_BAR_CONTEXT_MENU_BUTTON, LAUNCHER_TABS} from "@/configs/launcher";
import {useTranslations} from "next-intl";
import {useState} from "react";
import {useClickOutside} from "@mantine/hooks";
import ProfileButton from "@/components/Launcher/MenuBar/ProfileButton/ProfileButton";

export default function MenuBar() {
    const translate = useTranslations('Translations');
    const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });
    const [opened, setOpened] = useState(false);
    const ref = useClickOutside(() => setOpened(false));

    function handleRightClick(event: React.MouseEvent) {
        setOpened(true);
        setMouseCoordinates({
            x: event.nativeEvent.layerX,
            y: event.nativeEvent.layerY,
        });
    }

    return (
        <div
            onContextMenu={handleRightClick}
            className="overflow-x-clip relative flex justify-between p-2.5 h-14 w-full bg-[#11111b]"
        >
            <div
                ref={ref}
                className="transition z-[1000] absolute flex flex-col gap-2 border-[#181822] border-[1px] p-1 bg-[#11111B]"
                style={{
                    top: mouseCoordinates.y,
                    left: mouseCoordinates.x,
                    opacity: opened ? 1 : 0,
                    visibility: opened ? 'visible' : 'hidden'
                }}
            >
                {
                    LAUNCHER_MENU_BAR_CONTEXT_MENU_BUTTON.map((button) => {
                        return (
                            <div
                                className="flex gap-4 w-full rounded-md p-1 hover:bg-[#1D1A28]"
                                key={button}
                            >
                                <div className="rounded-md bg-[#CBA6F7] min-w-[18px] h-[18px]" />
                                <p className="select-none text-nowrap text-[13px] text-[#cdd6f4]">
                                    {translate(button)}
                                </p>
                            </div>
                        );
                    })
                }
            </div>
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
            <ProfileButton />
        </div>
    );
}