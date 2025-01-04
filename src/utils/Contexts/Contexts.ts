import {WindowHeaderContextType} from "@/types/WindowHeaderContext.type";
import React from "react";

export const WindowContext = React.createContext<WindowHeaderContextType>({
    name: "Default window",
});