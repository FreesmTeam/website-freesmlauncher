'use client';

import { NAVBAR_ITEMS } from "@/configs/constants";
import { NavbarItemType } from "@/types/Layout/NavbarItem.type";
import NavButton from "./NavButton/NavButton";
import {DictionariesContext} from "@/utils/Providers/DictionariesProvider";
import {useContext} from "react";

export default function Navbar() {
    const { dictionaries } = useContext(DictionariesContext);

    return (
        <div
            className="z-[2000] h-20 flex flex-row flex-nowrap items-center justify-between bg-[#1e1e2e] p-4 w-full sm:hidden fixed bottom-0 right-0 left-0"
        >
            {
                NAVBAR_ITEMS(dictionaries).map((item: NavbarItemType) => {
                    return (
                        <NavButton
                            key={item.name}
                            currentLocale={dictionaries?.Info?.locale}
                            item={item}
                        />
                    );
                })
            }
        </div>
    );
}
