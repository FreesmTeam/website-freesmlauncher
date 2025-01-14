import {Icon} from "@iconify/react";
import Link from "next/link";
import locales from '@/configs/locales.json';
import {useState} from "react";
import {useClickOutside} from "@mantine/hooks";
import {useTranslations} from "next-intl";

export default function SwitchLanguage() {
    const [opened, setOpened] = useState(false);
    const ref = useClickOutside(() => setOpened(false));

    const info = useTranslations('Info');

    function handleClick() {
        setOpened((state) => !state);
    }

    return (
        <div ref={ref} className="relative">
            <div
                className="z-[4000] transition flex flex-col gap-2 bg-[#181825] rounded-md p-2 border-[1px] border-[#313244] drop-shadow-lg text-md absolute text-white top-10 right-0"
                style={{
                    opacity: opened ? 1 : 0,
                    visibility: opened ? 'visible' : 'hidden'
                }}
            >
                {
                    locales.map((locale) => {
                        return (
                            <Link
                                className="group flex flex-nowrap items-center gap-2 transition"
                                key={locale.code}
                                href={locale.code}
                            >
                                <p className="text-white">
                                    {locale.flag}
                                </p>
                                <p className="text-white group-hover:text-[#cba6f7] transition">
                                    {locale.name}
                                </p>
                            </Link>
                        );
                    })
                }
            </div>
            <button
                onClick={handleClick}
                className="w-8 h-8 transition flex justify-center items-center bg-[#181825] rounded-full hover:bg-[#313244] overflow-clip text-white"
            >
                {
                    locales.find((locale) => locale.code === info('locale'))?.flag
                }
            </button>
        </div>
    );
}