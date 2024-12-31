export default function getReleaseName(name: string) {
    const lowerCaseName = name.toLowerCase();

    if (lowerCaseName.includes('linux')) {
        if (lowerCaseName.includes('qt5')) {
            return 'Qt5 - Portable (.tar.gz)';
        } else if (lowerCaseName.includes('qt6')) {
            return 'Qt6 - Portable (.tar.gz)';
        } else if (lowerCaseName.includes('zsync')) {
            return null;
        }

        return 'Portable (.AppImage)';
    }

    let prefix = '';

    if (lowerCaseName.includes('mingw')) {
        prefix = 'MinGW - ';
    } else if (lowerCaseName.includes('msvc')) {
        prefix = 'MSVC - ';
    } else if (lowerCaseName.includes('legacy')) {
        prefix = 'Legacy - ';
    }

    if (lowerCaseName.includes('portable')) {
        return prefix + 'Portable (.zip)';
    }

    if (lowerCaseName.includes('setup')) {
        return prefix + 'Setup (.exe)';
    }

    if (lowerCaseName.includes('macos')) {
        return prefix + 'Release (.zip)';
    }

    return null;
}