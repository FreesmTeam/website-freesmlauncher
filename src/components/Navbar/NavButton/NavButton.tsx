import { NavbarItemType } from "@/types/NavbarItem.type";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useTranslations } from "next-intl";

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

    return (
        <button className="flex items-center flex-col gap-1">
            <div className="flex items-center justify-center rounded-full bg-[#313244] w-20 py-1">
                <Icon className="text-white w-6 h-6" icon={icon} />
            </div>
            <p className="text-white text-center text-sm">
                {translate(name)}
            </p>
        </button>
    );
}