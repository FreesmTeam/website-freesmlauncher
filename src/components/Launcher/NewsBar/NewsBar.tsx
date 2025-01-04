import {useTranslations} from "next-intl";
import {Icon} from "@iconify/react";
import {useLauncherBarsStore} from "@/utils/Stores/Stores";
import {LauncherBarsStateType} from "@/types/LauncherBarsState.type";
import {useMemo} from "react";

export default function NewsBar() {
    const translate = useTranslations('Translations');
    const launcherMenuBarsStore = useLauncherBarsStore((state: LauncherBarsStateType) => state);
    const lastIndex = launcherMenuBarsStore.entries.length - 1;
    const hasLockBars = launcherMenuBarsStore.entries[lastIndex].opened;

    const translatedMoreNews = translate('launcher.more-news');

    return useMemo(() => (
        <div className="select-none p-2.5 gap-2 flex justify-stretch items-stretch h-10 w-full bg-[#09090e]">
            {
                !hasLockBars && (
                    <div className="cursor-move w-[5px] rounded-full bg-[#dbcafe]"/>
                )
            }
            <div
                className="w-full px-1 flex items-center gap-1 rounded-md flex-nowrap text-nowrap text-[10px] sm:text-[13px] text-[#cdd6f4] hover:bg-[#1a1723]">
                <Icon fontSize={16} icon="fluent:news-16-regular" />
                <p className="w-fit text-nowrap">
                    Next.js is awesome
                </p>
            </div>
            <div className="w-fit flex items-center gap-1 px-1 rounded-md flex-nowrap text-nowrap text-[10px] sm:text-[13px] text-[#cdd6f4] hover:bg-[#1a1723]">
                <Icon fontSize={16} icon="fluent:news-16-regular" />
                <p className="min-w-20 text-nowrap">
                    {translatedMoreNews}
                </p>
            </div>
        </div>
    ), [hasLockBars, translatedMoreNews]);
}