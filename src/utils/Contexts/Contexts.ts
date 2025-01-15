import {WindowHeaderContextType} from "@/types/Launcher/WindowHeaderContext.type";
import React from "react";

export const WindowContext = React.createContext<WindowHeaderContextType>({
    name: "Default window",
});