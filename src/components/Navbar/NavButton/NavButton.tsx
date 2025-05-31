import { NavbarItemType } from "@/types/Layout/NavbarItem.type";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from 'nextjs-toploader/app';
import {useEffect, useState} from "react";
import {useClickOutside} from "@mantine/hooks";
import locales from "@/configs/locales.json";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {setCookie} from "@/lib/cookies";
import {CookieLocaleKey} from "@/configs/localization";
import {getRelativeDate} from "@/utils/Helpers/getRelativeDate";

const handleLocaleSwitch = async (locale: string | undefined) => {
    await setCookie({
        key:       CookieLocaleKey,
        value:     JSON.stringify(locale),
        expiresAt: getRelativeDate({ days: 365 }),
        httpOnly:  false,
    });
};

export default function NavButton({ item, currentLocale }: { item: NavbarItemType, currentLocale: string | undefined }) {
    const {
        name,
        icon,
        selectedIcon,
        isAction,
        link,
    } = item;

    const [opened, setOpened] = useState(false);
    const ref = useClickOutside(() => setOpened(false));

    const router = useRouter();

    const currentPathname = usePathname();
    const pathnameArray = currentPathname.split("/");
    pathnameArray.shift();
    pathnameArray.shift();
    const pathnameWithoutLocale = pathnameArray.join("/");

    const isCurrentPage = pathnameWithoutLocale === link;

    function handleClick() {
        if (isAction) {
            setOpened((state) => !state);

            return;
        }

        router.push(`${link}`);
    }

    useEffect(() => {
        setOpened(false);
    }, [currentPathname])

    return (
        <div ref={ref} className="relative">
            <div
                className="z-[4000] transition flex flex-col gap-2 bg-mantle rounded-md p-2 border-[1px] border-surfaceZero drop-shadow-lg absolute text-white bottom-14 right-0"
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
                className="flex items-center flex-col gap-1"
            >
                <div
                    className="transition flex items-center justify-center rounded-full w-16 py-1"
                    style={{
                        background: isCurrentPage ? '#313244' : 'unset'
                    }}
                >
                    {
                        isAction ? (
                            <div className="text-white w-5 h-5 flex justify-center items-center">
                                {
                                    locales.find(
                                        (locale) => locale.code === currentLocale
                                    )?.flag
                                }
                            </div>
                        ) : (
                            <Icon
                                className="text-white w-5 h-5"
                                icon={isCurrentPage ? selectedIcon : icon}
                            />
                        )
                    }
                </div>
                <p
                    className="text-white text-center text-xs"
                    style={{
                        fontWeight: isCurrentPage ? 600 : 400
                    }}
                >
                    {name}
                </p>
            </button>
        </div>
    );
}
