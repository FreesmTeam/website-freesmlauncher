import {useTranslations} from "next-intl";
import {Icon} from "@iconify/react";
import {useInstanceStore} from "@/utils/stores";

export default function StatusBar() {
    const translate = useTranslations('Translations');
    const instancesStore = useInstanceStore((state) => state);
    const { currentInstance } = instancesStore;

    return (
        <div className="select-none p-2 gap-2 flex justify-between items-center h-9 w-full bg-[#09090e]">
            <div
                className="px-4 text-nowrap text-[10px] sm:text-[13px] text-[#cdd6f4]">
                <p className="w-fit text-nowrap">
                    Minecraft {currentInstance.name}
                </p>
            </div>
            <div
                className="px-4 text-nowrap text-[10px] sm:text-[13px] text-[#cdd6f4]">
                <p className="w-fit text-nowrap">
                    {translate('launcher.time-played')}:{' '}

                </p>
            </div>
        </div>
    );
}