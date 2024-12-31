export default function getPlatformName(platform: string) {
    let displayPlatform;

    switch (true) {
        case platform.includes('mac'):
            displayPlatform = 'macOS';
            break;
        case platform.includes('win'):
            displayPlatform = 'Windows';
            break
        case platform.includes('linux'):
            displayPlatform = 'Linux';
            break;
        default:
            displayPlatform = 'Windows'
            break;
    }

    return displayPlatform;
}