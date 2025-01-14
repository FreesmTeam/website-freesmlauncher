import Link from 'next/link';
import {useTranslations} from "next-intl";

export default function NotFound() {
    const translate = useTranslations('Translations');

    return (
        <div className="flex text-balance text-center justify-center items-center h-[calc(100svh-106px)] w-full max-w-[900px] px-4 sm:px-6 mx-auto flex-col text-white gap-2">
            <p className="text-[#cba6f7] text-6xl sm:text-9xl font-black pb-2 sm:pb-4">
                {translate('pages.not-found.title')}
            </p>
            <p className="text-xl sm:text-3xl font-bold">
                {translate('pages.not-found.subtitle')}
            </p>
            <p className="text-sm sm:text-lg">
                {translate('pages.not-found.description')}
            </p>
            <Link
                className="text-center text-balance bg-[#cba6f7] flex gap-2 items-center py-1 px-2 sm:py-2 sm:px-4 rounded-md font-bold text-[12px] sm:text-[18px] text-black transition hover:bg-[#8839ef] hover:text-white mt-2"
                href="/"
            >
                {translate('pages.not-found.go-to-home').toUpperCase()}
            </Link>
        </div>
    );
}