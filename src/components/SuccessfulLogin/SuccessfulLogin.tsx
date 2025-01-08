import {useTranslations} from "next-intl";
import maxwellGif from '../../../public/maxwell-christmas.gif';
import Image from "next/image";

export default function SuccessfulLogin() {
    const translate = useTranslations('Translations');

    return (
        <div className="flex flex-col items-center gap-8 pt-12 max-w-[960px] px-4 mx-auto">
            <p className="text-center font-bold text-balance text-5xl sm:text-7xl text-white">
                {translate('successful-login.title')}
            </p>
            <p className="text-center text-balance text-lg sm:text-2xl text-gray-400">
                {translate('successful-login.description')}
            </p>
            <Image src={maxwellGif} alt={"Maxwell cat rotating gif"} />
        </div>
    );
}