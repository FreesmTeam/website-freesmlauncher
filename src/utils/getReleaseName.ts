export default function getReleaseName({ name, locale }: { name: string; locale: string; }): {
    displayName: string;
    extension: string;
    type?: string;
} | null {
    let PORTABLE_NAME;
    let SETUP_NAME;

    switch (locale) {
        case "ru":
            PORTABLE_NAME = 'Портативная версия';
            SETUP_NAME = 'Установщик';
            break;
        case "en":
        default:
            PORTABLE_NAME = 'Portable';
            SETUP_NAME = 'Setup';
            break;
    }

    const lowerCaseName = name.toLowerCase();

    if (lowerCaseName.includes('linux')) {
        if (lowerCaseName.includes('qt5')) {
            return {
                displayName: `Qt5 - ${PORTABLE_NAME}`,
                extension: '(.tar.gz)'
            };
        } else if (lowerCaseName.includes('qt6')) {
            return {
                displayName: `Qt6 - ${PORTABLE_NAME}`,
                extension: '(.tar.gz)'
            };
        } else if (lowerCaseName.includes('zsync')) {
            return null;
        }

        return {
            displayName: PORTABLE_NAME,
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
    } else if (lowerCaseName.includes('macos')) {
        prefix = 'Universal - ';
    }

    if (lowerCaseName.includes('portable')) {
        return {
            displayName: prefix + PORTABLE_NAME,
            extension: '(.zip)',
            type: prefix.toLowerCase(),
        };
    }

    if (lowerCaseName.includes('setup')) {
        return {
            displayName: prefix + SETUP_NAME,
            extension: '(.exe)',
            type: 'setup',
        };
    }

    if (lowerCaseName.includes('macos')) {
        return {
            displayName: prefix + SETUP_NAME,
            extension: '(.zip)'
        };
    }

    return null;
}