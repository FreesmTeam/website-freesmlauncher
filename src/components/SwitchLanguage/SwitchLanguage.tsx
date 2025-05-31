import Link from "next/link";
import locales from '@/configs/locales.json';
import {useContext, useEffect, useState} from "react";
import {useClickOutside} from "@mantine/hooks";
import {usePathname} from "next/navigation";
import {DictionariesContext} from "@/utils/Providers/DictionariesProvider";
import {CookieLocaleKey, DefaultLocale} from "@/configs/localization";
import {getRelativeDate} from "@/utils/Helpers/getRelativeDate";
import {setCookie} from "@/lib/cookies";

const handleLocaleSwitch = async (locale: string | undefined) => {
    await setCookie({
        key:       CookieLocaleKey,
        value:     JSON.stringify(locale),
        expiresAt: getRelativeDate({ days: 365 }),
        httpOnly:  false,
    });
};

export default function SwitchLanguage() {
    const { dictionaries } = useContext(DictionariesContext);

    const currentLocale = dictionaries?.Info?.locale ?? DefaultLocale;

    const [opened, setOpened] = useState(false);
    const ref = useClickOutside(() => setOpened(false));

    const currentPathname = usePathname();
    const pathnameArray = currentPathname.split("/");
    pathnameArray.shift();
    pathnameArray.shift();
    const pathnameWithoutLocale = pathnameArray.join("/");

    function handleClick() {
        setOpened((state) => !state);
    }

    useEffect(() => {
        setOpened(false);
    }, [currentPathname])

    return (
        <div ref={ref} className="relative">
            <div
                className="z-[4000] transition flex flex-col gap-2 bg-mantle rounded-md p-2 border-[1px] border-surfaceZero drop-shadow-lg text-md absolute text-white top-10 right-0"
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
                                href={`/${locale.code}/${pathnameWithoutLocale}`}
                                onClick={() => handleLocaleSwitch(locale.code)}
                            >
                                <p className="text-white">
                                    {locale.flag}
                                </p>
                                <p className="text-white group-hover:text-mauve transition">
                                    {locale.name}
                                </p>
                            </Link>
                        );
                    })
                }
            </div>
            <button
                onClick={handleClick}
                className="w-8 h-8 transition flex justify-center items-center bg-mantle rounded-full hover:bg-surfaceZero overflow-clip text-white"
            >
                {
                    locales.find(
                            (locale) => locale.code === currentLocale
                        )?.flag
                }
            </button>
        </div>
    );
}
