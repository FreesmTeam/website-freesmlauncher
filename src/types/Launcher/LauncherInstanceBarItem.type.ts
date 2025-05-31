export type LauncherInstanceBarItemType = {
    name: "rename" | "change-icon" | "launch" | "kill" | "edit" | "change-group" | "folder" | "export" | "copy" | "delete" | "create-shortcut";
    icon: React.ReactNode;
    action?: string;
};
