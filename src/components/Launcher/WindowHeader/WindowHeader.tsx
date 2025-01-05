import React, {useEffect, useState} from "react";
import getPlatformName from "@/utils/Helpers/getPlatformName";
import WinHeader from "@/components/Launcher/WindowHeader/WinHeader/WinHeader";
import MacHeader from "@/components/Launcher/WindowHeader/MacHeader/MacHeader";
import LinuxHeader from "@/components/Launcher/WindowHeader/LinuxHeader/LinuxHeader";

export default React.memo(function WindowHeader() {
    const [definedNavigator, setDefinedNavigator] = useState<Navigator | null>(null);

    const platform = definedNavigator?.platform.toLowerCase();
    const displayPlatform = getPlatformName(platform ?? '');

    useEffect(() => {
        setDefinedNavigator(navigator);
    }, []);

    switch (displayPlatform) {
        case "macOS":
            return (
                <MacHeader />
            );
        case "Linux":
            return (
                <LinuxHeader />
            );
        case "Windows":
        case "OS":
        default:
            return (
                <WinHeader />
            );
    }
});