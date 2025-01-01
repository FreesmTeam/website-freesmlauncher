import { NavbarItemType } from "@/types/NavbarItem.type";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export default function NavButton({ item }: { item: NavbarItemType }) {
    const {
        name,
        icon,
        selectedIcon,
        isAction,
        link,
    } = item;
    const translate = useTranslations('Translations');
    const info = useTranslations('Info');
    const locale = info('locale');
    const pathname = usePathname();
    const filteredPathname = pathname.split('/').filter((value) => value !== locale).join('');
    const formattedLink = link?.split('/')?.join('');

    const isCurrentPage = formattedLink === filteredPathname;

    return (
        <button 
            className="flex items-center flex-col gap-1"
        >
            <div 
                className="flex items-center justify-center rounded-full w-16 py-1"
                style={{
                    background: isCurrentPage ? '#313244' : 'transparent'
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
    );
}