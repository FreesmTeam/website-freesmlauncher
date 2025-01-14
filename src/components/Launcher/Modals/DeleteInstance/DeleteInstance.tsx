import {useInstanceStore} from "@/utils/Stores/Stores";
import {DELETED} from "@/configs/launcher";
import WindowHeader from "@/components/Launcher/WindowHeader/WindowHeader";
import {useTranslations} from "next-intl";
import {WindowContext} from "@/utils/Contexts/Contexts";

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
            className="z-[1500] top-[50%] left-[50%] absolute transition text-white flex flex-col gap-0  rounded-md bg-crust"
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
            <WindowContext.Provider
                value={{
                    name: translate('launcher.confirm-deletion.title'),
                    onClose: onClose,
                    onlyCloseButton: true,
                }}
            >
                <WindowHeader />
            </WindowContext.Provider>
            <div className="px-1.5 pb-1.5 pt-0.5 sm:px-2 sm:pb-2 rounded-b-md text-xs sm:text-sm flex flex-col gap-4 text-[#cdd6f4]">
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
                <div className="flex justify-end items-center gap-2">
                    <button
                        className="flex items-center justify-center bg-[#1E1C2A] hover:bg-[#2e283e] transition w-14 h-7 rounded-md"
                        onClick={onConfirmation}
                    >
                        Да
                    </button>
                    <button
                        className="flex items-center justify-center bg-[#1E1C2A] hover:bg-[#2e283e] transition w-14 h-7 rounded-md"
                        onClick={onClose}
                    >
                        Нет
                    </button>
                </div>
            </div>
        </div>
    );
}