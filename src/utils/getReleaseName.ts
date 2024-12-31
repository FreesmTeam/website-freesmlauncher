export default function getReleaseName(name: string) {
    const lowerCaseName = name.toLowerCase();
    let prefix;

    if (lowerCaseName.includes('mingw')) {
        prefix = 'MinGW - '
    } else if (lowerCaseName.includes('msvc')) {
        prefix = 'MSVC - '
    }

    if (lowerCaseName.includes('portable')) {
        return prefix + 'Portable (.zip)';
    }

    if (lowerCaseName.includes('setup')) {
        return prefix + 'Setup (.exe)';
    }

    return null;
}