import {HandleActionType} from "@/types/HandleAction.type";

export default function handleDelete({
    deleted,
    updateCurrentInstance,
    currentInstance,
}: HandleActionType): void {
    updateCurrentInstance({
        ...currentInstance,
        deleted: deleted ?? currentInstance.deleted,
    });
}