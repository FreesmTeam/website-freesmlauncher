import {Icon} from "@iconify/react";
import Link from "next/link";
import locales from '@/configs/locales.json';
import {useState} from "react";
import {useClickOutside} from "@mantine/hooks";

export default function SwitchLanguage() {
    const [opened, setOpened] = useState(false);
    const ref = useClickOutside(() => setOpened(false));

    function handleClick() {
        setOpened((state) => !state);
    }

    return (
        <div ref={ref} className="relative">
            {
                opened && (
                    <div
                        className="absolute text-white top-10 rounded-md right-0"
                    >
                        change language
                    </div>
                )
            }
            <button
                onClick={handleClick}
                className="w-8 h-8 transition flex justify-center items-center bg-[#181825] rounded-full hover:bg-[#313244] overflow-clip"
            >
                <Icon
                    className="text-white"
                    icon={"mdi:earth"}
                    height={20}
                />
            </button>
        </div>
    );
}