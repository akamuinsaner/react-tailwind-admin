'use client'
import { useReducer, CSSProperties, FC, ReactNode, memo, useRef, useEffect, useLayoutEffect, useState, SyntheticEvent } from 'react';
import classNames from 'classnames';
import { styles } from './styles';
import { reducer, initialState, setWrapperAction } from './store';
import { ModalContext } from './context';
import { createPortal } from 'react-dom';
import { v4 as uuidV4 } from 'uuid';
import { twMerge } from 'tailwind-merge';
import { createWrapperAndAppendToBody } from './utils';
import { confirm, ConfirmModalProvider } from './confirm';

export type RTModalProps = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    open?: boolean;
    onClose?: () => void;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    fullWidth?: boolean;
    closable?: boolean;
}

const sizeMap = {
    'xs': 'w-[450px]',
    'sm': 'w-[600px]',
    'md': 'w-[900px]',
    'lg': 'w-[1200px]',
    'xl': 'w-[1800px]',
}

const ModalContainer: FC<RTModalProps> = ({
    children,
    className,
    style,
    size = 'sm',
    fullWidth = false,
}) => {
    const computedClassNames = twMerge(styles.base, classNames(sizeMap[size], {
        'w-full': fullWidth
    }), className);

    return (
        <div
            style={style}
            className={computedClassNames}
            onClick={e => e.stopPropagation()}
        >
            {children}
        </div>
    )
}

const Modal = (props: RTModalProps) => {
    const wrapperIdRef = useRef(uuidV4());
    const [maskClassName, setMaskClassName] = useState(styles.mask);
    const [wrapClassName, setWrapClassName] = useState(styles.wrap);
    const [state, dispatch] = useReducer(reducer, initialState);
    const { wrapper } = state;

    const setWrapper = (wrapper: HTMLElement) => dispatch(setWrapperAction(wrapper));

    const onMaskTransitionEnd = (e: SyntheticEvent) => {
        const target = e.currentTarget;
        if (target.classList.contains('opacity-0')) {
            if (props.onClose) props.onClose();
            setWrapper(null);
        }
    }

    useEffect(() => {
        if (wrapper) {
            setMaskClassName(twMerge(maskClassName, 'opacity-100'));
            setWrapClassName(twMerge(wrapClassName, 'scale-100'));
        }
    }, [wrapper]);

    const closeModal = () => {
        setMaskClassName(styles.mask);
        setWrapClassName(styles.wrap);
    }

    const onClickClose = () => {
        if (!props.closable) return;
        closeModal();
    }

    useLayoutEffect(() => {
        if (props.open) {
            const wrapperId = wrapperIdRef.current;
            let element = document.getElementById(wrapperId);
            if (!element) element = createWrapperAndAppendToBody(wrapperId);
            setWrapper(element);
        } else {
            closeModal();
        }
    }, [props.open])

    if (!wrapper) return <></>

    return createPortal(<>
        <ModalContext.Provider value={{
            closable: props.closable,
            onClickClose
        }}>
            <div className={maskClassName} onTransitionEnd={onMaskTransitionEnd}></div>
            <div className={wrapClassName} onClick={onClickClose}>
                <ModalContainer {...props}>{props.children}</ModalContainer>
            </div>
        </ModalContext.Provider>
    </>, wrapper);
}

export {
    confirm,
    ConfirmModalProvider
};

export default memo(Modal);