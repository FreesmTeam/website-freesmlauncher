import {useTranslations} from "next-intl";
import {useInstanceStore} from "@/utils/stores";
import {useEffect, useState} from "react";
import {useInterval} from "@mantine/hooks";

export default function StatusBar() {
    const translate = useTranslations('Translations');
    const instancesStore = useInstanceStore((state) => state);
    const { currentInstance } = instancesStore;

    const [seconds, setSeconds] = useState<{
        [key: string]: number;
    }>({
        [currentInstance.name]: 0,
    });
    const interval = useInterval(() => setSeconds((state) => {
        return {
            ...state,
            [currentInstance.launched ?? 'unknown']: (
                state[currentInstance.launched ?? 'unknown'] ?? 0
            ) + 1,
        };
    }), 1000);

    useEffect(() => {
        if (currentInstance.launched !== null) {
            interval.start();
        } else {
            interval.stop();
        }

        return interval.stop;
    }, [interval, currentInstance]);


    return (
        <div className="rounded-b-md select-none p-2 gap-2 flex justify-between items-center h-9 w-full bg-[#09090e]">
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
                    {seconds[currentInstance.name]}
                    {translate('general.seconds-short')}
                </p>
            </div>
        </div>
    );
}