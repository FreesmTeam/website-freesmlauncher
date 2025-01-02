import {useInstanceStore} from "@/utils/stores";
import {DELETED} from "@/configs/launcher";
import WindowHeader from "@/components/Launcher/WindowHeader/WindowHeader";
import {useTranslations} from "next-intl";

export default function DeleteInstanceModal() {
    const instancesStore = useInstanceStore((state) => state);
    const { currentInstance, updateCurrentInstance } = instancesStore;
    const translate = useTranslations('Translations');

    return (
        <div
            className="z-[1500] absolute transition top-[50%] left-[50%] text-white flex flex-col"
            style={{
                visibility: currentInstance.deleted === DELETED.PROCESS ? 'visible' : 'hidden',
            }}
        >
            <WindowHeader name={translate('launcher.confirm-deletion')} />
        </div>
    );
}