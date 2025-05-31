import {useInstanceStore} from "@/utils/Stores/Stores";
import {useContext, useEffect, useState} from "react";
import {useInterval} from "@mantine/hooks";
import {UNKNOWN_INSTANCE} from "@/configs/launcher";
import {DictionariesContext} from "@/utils/Providers/DictionariesProvider";

export default function StatusBar() {
    const { dictionaries } = useContext(DictionariesContext);

    const translations = dictionaries?.Translations;
    const translationsLauncher = translations?.launcher;

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
                                {translationsLauncher?.["no-selection"]}
                            </>
                        ) : (
                            <>
                                Minecraft {currentInstance.version}, {translationsLauncher?.["specific-time-played"]}
                                {' '}
                                {instanceMinutes > 0 && `${instanceMinutes}${translations?.general?.["minutes-short"]}`}
                                {' '}
                                {instanceSecondsRemaining}
                                {translations?.general?.["seconds-short"]}
                            </>
                        )
                    }
                </p>
            </div>
            <div
                className="px-4 text-nowrap text-[10px] sm:text-[13px] text-[#cdd6f4]">
                <p className="w-fit text-nowrap">
                    {translationsLauncher?.["time-played"]}:
                    {' '}
                    {
                        overallMinutes > 0 && `${overallMinutes}${translations?.general?.["minutes-short"]}`
                    }
                    {' '}
                    {overallSecondsRemaining}
                    {translations?.general?.["seconds-short"]}
                </p>
            </div>
        </div>
    );
}
