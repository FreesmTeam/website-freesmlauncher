'use client';

import {Icon} from "@iconify/react";
import {FEATURES_SECTIONS} from "@/configs/constants";
import {useContext} from "react";
import {DictionariesContext} from "@/utils/Providers/DictionariesProvider";

export default function Features() {
    const { dictionaries } = useContext(DictionariesContext);

    return (
        <div className="flex flex-col flex-wrap lg:flex-row gap-8 justify-between items-start mt-12 max-w-[960px] px-8 mx-auto">
            {
                FEATURES_SECTIONS(dictionaries).map((feature) => {
                    return (
                        <div
                            key={feature.title}
                            className="shrink-0 lg:max-w-[432px] flex flex-col gap-2"
                        >
                            <div className="flex items-center text-white gap-2">
                                <Icon
                                    className="w-6 h-6 sm:w-8 sm:h-8"
                                    height={32}
                                    icon={feature.icon}
                                />
                                <p className="text-justify text-xl sm:text-3xl text-white font-semibold">
                                    {feature.title}
                                </p>
                            </div>
                            <p className="text-justify text-[16px] sm:text-xl text-gray-300">
                                {feature.description}
                            </p>
                        </div>
                    );
                })
            }
        </div>
    );
}
