"use client";

import { createContext } from "react";
import { DictionariesType } from "@/types/Other/Dictionaries.type";

export const DictionariesContext = createContext<{
    dictionaries: DictionariesType;
}>({
    dictionaries: undefined,
});

export function DictionariesProvider({
    children,
    dictionaries,
}: {
    children: React.ReactNode;
    dictionaries: DictionariesType;
}) {
    return (
        <DictionariesContext.Provider value={{
            dictionaries:         dictionaries,
        }}>
            {children}
        </DictionariesContext.Provider>
    );
}
