import {Icon} from "@iconify/react";
import Link from "next/link";
import locales from '@/configs/locales.json';
import {useState} from "react";

export default function SwitchLanguage() {
    const [opened, setOpened] = useState(false);

    return (
        <div className="relative">
            <button
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