import {useInstanceStore} from "@/utils/stores";
import {DELETED} from "@/configs/launcher";
import WindowHeader from "@/components/Launcher/WindowHeader/WindowHeader";
import {useTranslations} from "next-intl";
import {useMouse} from "@mantine/hooks";
import {useEffect, useState} from "react";

export default function DeleteInstanceModal() {
    const instancesStore = useInstanceStore((state) => state);
    const { currentInstance, updateCurrentInstance } = instancesStore;
    const translate = useTranslations('Translations');
    const { x, y } = useMouse();
    const [layer, setLayer] = useState({
        x: 0,
        y: 0,
    });
    const [lastPos, setLastPos] = useState({
        x: 0,
        y: 0,
    });
    const [active, setActive] = useState(false);

    const aligned = {
        x: x - layer.x,
        y: y - layer.y,
    };

    function handleMouseDown(event: React.MouseEvent) {console.log(event.nativeEvent)
        setLayer({
            x: event.nativeEvent.x,
            y: event.nativeEvent.y,
        })
        setActive(true);
    }

    function handleMouseUp(event: React.MouseEvent) {
        setActive(false);
    }

    useEffect(() => {
        if (!active) {
            setLastPos({
                x: aligned.x,
                y: aligned.y,
            })
        }
    }, [active]);

    return (
        <div
            onMouseDownCapture={handleMouseDown}
            onMouseUpCapture={handleMouseUp}
            className="z-[1500] absolute transition text-white flex flex-col"
            style={{
                left: active ? `${aligned.x}px` : `${lastPos.x}`,
                top: active ? `${aligned.y}px` : `${lastPos.y}`,
                visibility: currentInstance.deleted === DELETED.PROCESS ? 'visible' : 'hidden',
            }}
        >
            <WindowHeader name={translate('launcher.confirm-deletion')} />
        </div>
    );
}