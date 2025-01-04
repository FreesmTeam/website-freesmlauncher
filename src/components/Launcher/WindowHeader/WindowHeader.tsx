import Image from "next/image";
import freesmLogo from "../../../../public/favicon.webp";
import {APP_NAME} from "@/configs/constants";
import {useEffect, useState} from "react";
import getPlatformName from "@/utils/getPlatformName";
import WinHeader from "@/components/Launcher/WindowHeader/WinHeader/WinHeader";

export default function WindowHeader() {
    const [definedNavigator, setDefinedNavigator] = useState<Navigator | null>(null);

    const platform = definedNavigator?.platform.toLowerCase();
    let displayPlatform = getPlatformName(platform ?? '');

    useEffect(() => {
        setDefinedNavigator(navigator);
    }, []);

    switch (displayPlatform) {
        case "macOS":
            return (
                <></>
            );
        case "Linux":
            return (
                <></>
            );
        case "Windows":
        case "OS":
        default:
            return (
                <WinHeader />
            );
    }
}