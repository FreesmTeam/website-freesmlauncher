import {useTranslations} from "next-intl";
import {useInstanceStore} from "@/utils/Stores/Stores";
import {useEffect, useState} from "react";
import {useInterval} from "@mantine/hooks";
import {UNKNOWN_INSTANCE} from "@/configs/launcher";

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

    const overallSeconds = Object.values(seconds).reduce((accumulator: number, currentValue) => currentValue + accumulator, 0);
    const overallMinutes = Math.floor(overallSeconds / 60);
    const overallSecondsRemaining = overallSeconds % 60;

    const instanceSeconds = seconds[currentInstance.name] ?? 0;
    const instanceMinutes = Math.floor(instanceSeconds / 60);
    const instanceSecondsRemaining = instanceSeconds % 60;

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
                    {
                        currentInstance.name === UNKNOWN_INSTANCE.name ? (
                            <>
                                {translate('launcher.no-selection')}
                            </>
                        ) : (
                            <>
                                Minecraft {currentInstance.version}, {translate('launcher.specific-time-played')}
                                {' '}
                                {instanceMinutes > 0 && `${instanceMinutes}${translate('general.minutes-short')}`}
                                {' '}
                                {instanceSecondsRemaining}
                                {translate('general.seconds-short')}
                            </>
                        )
                    }
                </p>
            </div>
            <div
                className="px-4 text-nowrap text-[10px] sm:text-[13px] text-[#cdd6f4]">
                <p className="w-fit text-nowrap">
                    {translate('launcher.time-played')}:
                    {' '}
                    {
                        overallMinutes > 0 && `${overallMinutes}${translate('general.minutes-short')}`
                    }
                    {' '}
                    {overallSecondsRemaining}
                    {translate('general.seconds-short')}
                </p>
            </div>
        </div>
    );
}