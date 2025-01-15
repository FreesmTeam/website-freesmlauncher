import {HandleActionType} from "@/types/Launcher/HandleAction.type";

export default function handleDelete({
    deleted,
    updateCurrentInstance,
    currentInstance,
}: HandleActionType): void {
    const safeDeleted = deleted === undefined ? currentInstance.deleted : deleted;

    updateCurrentInstance({
        ...currentInstance,
        deleted: safeDeleted,
    });
}