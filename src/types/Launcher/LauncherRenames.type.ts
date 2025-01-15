// null means that instance was not renamed
//
export type LauncherRenamesType = {
    [key: string]: {
        name: string | null;
        isBeingRenamed: boolean;
    };
};