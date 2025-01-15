export type WindowHeaderContextType = {
    name: string;
    onMinimize?: () => void;
    onMaximize?: () => void;
    onClose?: () => void;
    maximized?: boolean;
    onlyCloseButton?: boolean;
};