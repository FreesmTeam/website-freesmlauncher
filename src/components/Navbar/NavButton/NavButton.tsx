import { NavbarItemType } from "@/types/NavbarItem.type";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/routing";
import { useRouter } from 'nextjs-toploader/app';

export default function NavButton({ item }: { item: NavbarItemType }) {
    const {
        name,
        icon,
        selectedIcon,
        isAction,
        link,
    } = item;
    const router = useRouter();
    const translate = useTranslations('Translations');
    const info = useTranslations('Info');
    const locale = info('locale');
    const pathname = usePathname();
    const isCurrentPage = pathname === link;

    let redirectLocale: string;
    let currentLanguageFlag: string;

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

    function handleClick() {
        if (isAction) {
            router.push(`/${redirectLocale}${pathname}`);

            return;
        }

        router.push(`/${locale}${link}`);
    }

    return (
        <div className="relative">
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
                                {currentLanguageFlag}
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
                    {translate(name)}
                </p>
            </button>
        </div>
    );
}