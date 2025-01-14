import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
import localesInfo from '@/configs/locales.json';

const locales = localesInfo.map((locale) => {
    return locale.code;
})

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: locales,

    // Used when no locale matches
    defaultLocale: 'en'
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter, getPathname} =
    createNavigation(routing);