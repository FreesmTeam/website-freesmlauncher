import { HEADER_LINKS } from "@/configs/constants";
import { HeaderExternalLinkType } from "@/types/HeaderExternalLink.type";
import { NavbarItemType } from "@/types/NavbarItem.type";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useClickOutside } from "@mantine/hooks";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "@/i18n/routing";
import { useRouter } from 'nextjs-toploader/app';
import { useEffect, useState } from "react";

export default function NavButton({ item }: { item: NavbarItemType }) {
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
    const translate = useTranslations('Translations');
    const info = useTranslations('Info');
    const locale = info('locale');
    const pathname = usePathname();
    const isCurrentPage = pathname === link;

    function handleClick() {
        if (isAction || !link) {
            setOpened((state) => !state)

            return;
        }

        router.push(`/${locale}${link}`);
    }

    let redirectLocale;
    let currentLanguageFlag;

    switch (locale) {
        case "ru":
            redirectLocale = "en";
            currentLanguageFlag = "🇷🇺";
            break;
        case "en":
        default:
            redirectLocale = "ru";
            currentLanguageFlag = "🇺🇸";
            break;
    }

    useEffect(() => {
        setOpened(false);
    }, [pathname])

    return (
        <div className="relative">
            <div 
                ref={ref}
                className="z-[4000] transition absolute bottom-14 right-4 flex flex-col gap-2 bg-[#1e1e2e] rounded-md p-2 border-[1px] border-[#181825] drop-shadow-lg text-white text-md"
                style={{
                    opacity: opened ? 1 : 0,
                    visibility: opened ? 'visible' : 'hidden'
                }}
            >
                {
                    HEADER_LINKS.map((link: HeaderExternalLinkType) => {
                        return (
                            <Link
                                target="_blank"
                                href={link.link}
                                key={link.name}
                                className="flex flex-nowrap items-center gap-2 hover:text-[#cba6f7] transition"
                            >
                                <Icon fontSize={16} icon={link.icon} />
                                <p className="text-nowrap">
                                    {link.name}
                                </p>
                            </Link>
                        );
                    })
                }
                <Link
                    href={`/${redirectLocale}${pathname}`}
                    className="flex flex-nowrap items-center gap-2 hover:text-[#cba6f7] transition"
                >
                    <p className="text-xs">
                        {currentLanguageFlag}
                    </p>
                    <p className="text-nowrap">
                        {translate('navbar.change-language')}
                    </p>
                </Link>
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
                    <Icon 
                        className="text-white w-5 h-5"
                        icon={isCurrentPage ? selectedIcon : icon}
                    />
                </div>
                <p 
                    className="text-white text-center text-xs"
                    style={{
                        fontWeight: isCurrentPage ? 600 : 400
                    }}
                >
                    {translate(name)}
                </p>
            </button>
        </div>
    );
}