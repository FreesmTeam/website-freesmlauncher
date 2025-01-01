export default function getReleaseName(name: string): {
    displayName: string;
    extension: string;
} | null {
    const lowerCaseName = name.toLowerCase();

    if (lowerCaseName.includes('linux')) {
        if (lowerCaseName.includes('qt5')) {
            return {
                displayName: 'Qt5 - Portable',
                extension: '(.tar.gz)'
            };
        } else if (lowerCaseName.includes('qt6')) {
            return {
                displayName: 'Qt6 - Portable',
                extension: '(.tar.gz)'
            };
        } else if (lowerCaseName.includes('zsync')) {
            return null;
        }

        return {
            displayName: 'Portable',
            extension: '(.AppImage)'
        };
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
        return {
            displayName: prefix + 'Portable',
            extension: '(.zip)'
        };
    }

    if (lowerCaseName.includes('setup')) {
        return {
            displayName: prefix + 'Setup',
            extension: '(.exe)'
        };
    }

    if (lowerCaseName.includes('macos')) {
        return {
            displayName: prefix + 'Release',
            extension: '(.zip)'
        };
    }

    return null;
}