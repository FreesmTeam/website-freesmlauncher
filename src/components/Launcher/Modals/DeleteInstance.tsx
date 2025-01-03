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

    function onConfirmation() {
        updateCurrentInstance({
            ...currentInstance,
            deleted: DELETED.YES,
        })
    }

    return (
        <div
            className="z-[1500] top-[50%] left-[50%] absolute transition text-white flex flex-col gap-0  rounded-md bg-[#11111b]"
            style={{
                transform: currentInstance.deleted === DELETED.PROCESS ? (
                    `translateX(-50%) translateY(-50%) scale(100%)`
                ) : (
                    `translateX(-50%) translateY(-50%) scale(85%)`
                ),

                opacity: currentInstance.deleted === DELETED.PROCESS ? 1 : 0,
                visibility: currentInstance.deleted === DELETED.PROCESS ? 'visible' : 'hidden',
            }}
        >
            <WindowHeader
                name={translate('launcher.confirm-deletion.title')}
                onClose={onClose}
                onlyCloseButton={true}
            />
            <div className="px-2 pb-2 rounded-b-md">
                <div className="whitespace-pre-wrap">
                    {
                        translate(
                            'launcher.confirm-deletion.description',
                            {
                                instanceName: currentInstance.name
                            }
                        )
                    }
                </div>
                <button
                    onClick={onConfirmation}
                >
                    Да
                </button>
                <button
                    onClick={onClose}
                >
                    Нет
                </button>
            </div>
        </div>
    );
}