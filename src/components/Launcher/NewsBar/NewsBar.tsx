import {useTranslations} from "next-intl";
import {Icon} from "@iconify/react";

export default function NewsBar() {
    const translate = useTranslations('Translations');

    return (
        <div className="select-none p-2.5 gap-2 flex justify-stretch items-stretch h-10 w-full bg-[#09090e]">
            <div className="cursor-move w-[5px] rounded-full bg-[#dbcafe]"/>
            <div className="w-full px-1 flex items-center gap-1 rounded-md text-nowrap text-[13px] text-[#cdd6f4] hover:bg-[#1a1723]">
                <Icon fontSize={16} icon="fluent:news-16-regular" />
                <p>
                    Next.js is awesome
                </p>
            </div>
            <div className="w-fit flex items-center gap-1 px-1 rounded-md text-nowrap text-[13px] text-[#cdd6f4] hover:bg-[#1a1723]">
                <Icon fontSize={16} icon="fluent:news-16-regular" />
                <p>
                    {translate('launcher.more-news')}
                </p>
            </div>
        </div>
    );
}