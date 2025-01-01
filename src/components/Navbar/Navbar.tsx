'use client';

import { NAVBAR_ITEMS } from "@/configs/constants";
import { NavbarItemType } from "@/types/NavbarItem.type";
import NavButton from "./NavButton/NavButton";

export default function Navbar() {
    return (
        <div
            className="z-[2000] flex flex-row flex-nowrap items-center justify-between bg-[#1e1e2e] px-8 py-4 w-full sm:hidden fixed bottom-0"
        >
            {
                NAVBAR_ITEMS.map((item: NavbarItemType) => {
                    return (
                        <NavButton 
                            key={item.name} 
                            item={item}
                        />
                    );
                })
            }
        </div>
    );
}