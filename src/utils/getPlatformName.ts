import {LINUX_NAME, MACOS_NAME, WINDOWS_NAME} from "@/configs/constants";

export default function getPlatformName(platform: string): 'macOS' | 'Windows' | 'Linux' {
    switch (true) {
        case platform.includes('mac'):
            return MACOS_NAME;
        case platform.includes('win'):
            return WINDOWS_NAME;
        case platform.includes('linux'):
            return LINUX_NAME;
        default:
            return WINDOWS_NAME
    }
}