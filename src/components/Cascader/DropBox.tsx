import { CSSProperties, FC, ReactNode, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import Popup from '../Tooltip/Popup';
import { styles } from './styles';
import { RTCascaderPlacement } from './index';
import Empty from '../Empty';

type RTCascaderDropBoxProps = {
    noData: boolean;
    placement?: RTCascaderPlacement;
    anchor?: HTMLElement;
    wrapper?: HTMLElement;
    removeWrapper: () => void;
    children: ReactNode;
};

const DropBox: FC<RTCascaderDropBoxProps> = ({
    noData,
    placement = 'bottom-start',
    anchor,
    wrapper,
    removeWrapper,
    children,
}) => {
    const style = useMemo(() => {
        if (noData)
            return {
                width: noData ? `${anchor.offsetWidth}px` : 'auto',
            };
        return null;
    }, [noData, anchor]);

    const finalChildren = useMemo(() => {
        if (noData) return <Empty />;
        return children;
    }, [children, noData]);

    return (
        <Popup
            style={style}
            className={twMerge(styles.selectBox.base)}
            anchor={anchor}
            wrapper={wrapper}
            placement={placement}
            visibleClassName={styles.selectBox.show}
            onClose={removeWrapper}
            arrow={false}
            timerRef={null}
            trigger='click'
        >
            {finalChildren}
        </Popup>
    );
};

export default DropBox;
