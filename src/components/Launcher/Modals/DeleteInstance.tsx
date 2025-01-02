import {useInstanceStore} from "@/utils/stores";
import {DELETED} from "@/configs/launcher";

export default function DeleteInstanceModal() {
    const instancesStore = useInstanceStore((state) => state);
    const { currentInstance, updateCurrentInstance } = instancesStore;

    return (
        <div
            className="z-[1500] absolute transition top-[50%] left-[50%] text-white"
            style={{
                visibility: currentInstance.deleted === DELETED.PROCESS ? 'visible' : 'hidden',
            }}
        >
            1234
        </div>
    );
}