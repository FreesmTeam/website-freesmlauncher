import Image from "next/image";
import skinAvatar from "../../../../../public/windstone_profile_skin.png";
import {useTranslations} from "next-intl";

export default function ProfileButton() {
    const translate = useTranslations('Translations');

    return (
        <>
            <button
                className="cursor-default px-2 rounded-md flex items-center gap-1 hover:bg-[#211e2f]"
            >
                <Image height={24} src={skinAvatar} alt={"Profile avatar"}/>
                {(
                    <p className="text-[13px] text-[#cdd6f4]">
                        {translate('launcher.profile')}
                    </p>
                )}
            </button>
        </>
    );
}