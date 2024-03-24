'use client';
import {
    useReducer,
    CSSProperties,
    FC,
    ReactNode,
    memo,
    useRef,
    useEffect,
    useLayoutEffect,
    useState,
    SyntheticEvent,
    useMemo,
} from 'react';
import classNames from 'classnames';
import { styles } from './styles';
import { reducer, initialState, setWrapperAction } from './store';
import { createPortal } from 'react-dom';
import { v4 as uuidV4 } from 'uuid';
import { twMerge } from 'tailwind-merge';
import { createWrapperAndAppendToBody } from '../Modal/utils';

export type RTDrawerPlacements = 'top' | 'right' | 'bottom' | 'left';
export type RTDrawerSizes = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type RTDrawerProps = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    open?: boolean;
    onClose?: () => void;
    size?: RTDrawerSizes;
    fullWidth?: boolean;
    closable?: boolean;
    placement?: RTDrawerPlacements;
};

const sizeMap = {
    hsm: 'h-[400px]',
    hmd: 'h-[480px]',
    hlg: 'h-[720px]',
    hxl: 'h-[960px]',
    h2xl: 'h-[1280px]',
    wsm: 'w-[400px]',
    wmd: 'w-[480px]',
    wlg: 'w-[720px]',
    wxl: 'w-[960px]',
    w2xl: 'w-[1280px]',
};

const Drawer: FC<RTDrawerProps> = ({
    children,
    className,
    style,
    fullWidth = false,
    placement = 'right',
    size,
    open,
    onClose,
    closable,
}) => {
    const wrapperIdRef = useRef(uuidV4());
    const finslSize = useMemo(() => {
        if (size) return size;
        return placement === 'top' || placement === 'bottom' ? 'lg' : 'sm';
    }, [size, placement]);

    const drawerBaseClassName = useMemo(() => {
        const heightProperty = sizeMap[`h${finslSize}`];
        const widthProperty = sizeMap[`w${finslSize}`];
        return twMerge(
            styles.base,
            styles[placement],
            classNames({
                [heightProperty]: placement === 'top' || placement === 'bottom',
                [widthProperty]: placement === 'left' || placement === 'right',
                'w-full': fullWidth,
            }),
            className,
        );
    }, [placement, className, fullWidth, finslSize]);

    const [maskClassName, setMaskClassName] = useState(styles.mask);
    const [drawerClassName, setdrawerClassName] = useState(drawerBaseClassName);
    const [state, dispatch] = useReducer(reducer, initialState);
    const { wrapper } = state;

    const setWrapper = (wrapper: HTMLElement) =>
        dispatch(setWrapperAction(wrapper));

    const onMaskTransitionEnd = (e: SyntheticEvent) => {
        const target = e.currentTarget;
        if (target.classList.contains('opacity-0')) {
            if (onClose) onClose();
            setWrapper(null);
        }
    };

    useEffect(() => {
        setdrawerClassName(drawerBaseClassName);
    }, [placement, size, fullWidth]);

    useEffect(() => {
        if (wrapper) {
            setMaskClassName(twMerge(maskClassName, 'opacity-100'));
            setdrawerClassName(twMerge(drawerClassName, styles.show));
        }
    }, [wrapper]);

    const closeModal = () => {
        setMaskClassName(styles.mask);
        setdrawerClassName(drawerBaseClassName);
    };

    const onClickClose = () => {
        if (!closable) return;
        closeModal();
    };

    useLayoutEffect(() => {
        if (open) {
            const wrapperId = wrapperIdRef.current;
            let element = document.getElementById(wrapperId);
            if (!element) element = createWrapperAndAppendToBody(wrapperId);
            setWrapper(element);
        } else {
            closeModal();
        }
    }, [open]);

    if (!wrapper) return <></>;

    return createPortal(
        <>
            <div
                className={maskClassName}
                onTransitionEnd={onMaskTransitionEnd}
                onClick={onClickClose}
            ></div>
            <div
                style={style}
                className={drawerClassName}
                onClick={e => e.stopPropagation()}
            >
                {children}
            </div>
        </>,
        wrapper,
    );
};

export default memo(Drawer);
