import {useTranslations} from "next-intl";

export default async function Home() {
    const translate = useTranslations('general');

    return (
        <div className="text-white">
            {translate('download')}
        </div>
    );
}
