import {useInstanceStore} from "@/utils/stores";
import {DELETED} from "@/configs/launcher";
import WindowHeader from "@/components/Launcher/WindowHeader/WindowHeader";
import {useTranslations} from "next-intl";

export default function DeleteInstanceModal() {
    const instancesStore = useInstanceStore((state) => state);
    const { currentInstance, updateCurrentInstance } = instancesStore;
    const translate = useTranslations('Translations');

    function onClose() {
        updateCurrentInstance({
            ...currentInstance,
            deleted: DELETED.NO,
        })
    }

    return (
        <div
            className="z-[1500] top-[50%] left-[50%] absolute transition text-white flex flex-col"
            style={{
                transform: currentInstance.deleted === DELETED.PROCESS ? (
                    `translateX(-50%) translateY(-50%) scale(100%)`
                ) : (
                    `translateX(-50%) translateY(-50%) scale(80%)`
                ),

                opacity: currentInstance.deleted === DELETED.PROCESS ? 1 : 0,
                visibility: currentInstance.deleted === DELETED.PROCESS ? 'visible' : 'hidden',
            }}
        >
            <WindowHeader
                name={translate('launcher.confirm-deletion')}
                onClose={onClose}
            />
        </div>
    );
}