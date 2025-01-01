import { NavbarItemType } from "@/types/NavbarItem.type";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useClickOutside } from "@mantine/hooks";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
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
    const filteredPathname = pathname.split('/').filter((value) => value !== locale).join('');
    const formattedLink = link?.split('/')?.join('');

    const isCurrentPage = formattedLink === filteredPathname;

    function handleClick() {
        if (isAction || !link) {
            setOpened((state) => !state)

            return;
        }

        router.push(link);
    }

    useEffect(() => {
        setOpened(false);
    }, [pathname])

    return (
        <div className="relative">
            {
                opened && (
                    <div 
                        ref={ref}
                        className="absolute bottom-14 right-4 bg-[#1e1e2e] rounded-md p-2 border-[1px] border-[#181825] drop-shadow-lg text-white text-sm"
                    >
                        1234
                    </div>
                )
            }
            <button 
                onClick={handleClick}
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
        </div>
    );
}