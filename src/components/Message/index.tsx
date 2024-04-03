import {
    cloneElement,
    CSSProperties,
    FC,
    ReactNode,
    SyntheticEvent,
    useEffect,
    useLayoutEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import { createPortal } from 'react-dom';
import { createWrapperAndAppendToBody } from '../Modal/utils';
import { v4 as uuidV4 } from 'uuid';
import { styles } from './styles';
import { twMerge } from 'tailwind-merge';
import {
    CheckCircleIcon,
    ExclamationCircleIcon,
    XCircleIcon,
} from '@heroicons/react/24/solid';

export type RTMessageType = 'success' | 'info' | 'warning' | 'danger';

export type RTMessageProps = {
    content?: string;
    type?: RTMessageType;
    className?: string;
    style?: CSSProperties;
    duration?: number;
    icon?: ReactNode;
    onClose?: () => void;
};

class message {
    static info: RTMessageMethod;
    static warning: RTMessageMethod;
    static success: RTMessageMethod;
    static danger: RTMessageMethod;
}

const Message = () => {
    const baseClassName = twMerge(styles.box.base);
    const showClassName = twMerge(styles.box.base, styles.box.show);
    const wrapperIdRef = useRef(uuidV4());
    const [wrapper, setWrapper] = useState<HTMLElement>(null);
    const [boxClassName, setBoxClassName] = useState<string>(baseClassName);
    const [messageInfo, setMessageInfo] = useState<RTMessageProps>(null);

    const setOpen = () => {
        const wrapperId = wrapperIdRef.current;
        let element = document.getElementById(wrapperId);
        if (!element) element = createWrapperAndAppendToBody(wrapperId);
        setWrapper(element);
    };

    const onTransitionEnd = (e: SyntheticEvent) => {
        const target = e.currentTarget;
        if (!target.className.includes(styles.box.show)) {
            setWrapper(null);
            setMessageInfo(null);
            if (messageInfo?.onClose) messageInfo.onClose();
        }
    };

    const resetClassName = () => {
        setBoxClassName(baseClassName);
    };

    const icon = useMemo(() => {
        if (!messageInfo) return;
        let icon;
        if (messageInfo?.icon) icon = messageInfo?.icon;
        else if (messageInfo?.type === 'success') icon = <CheckCircleIcon />;
        else if (messageInfo?.type === 'danger') icon = <XCircleIcon />;
        else icon = <ExclamationCircleIcon />;
        return cloneElement(icon, {
            className: twMerge(
                styles.icon.base,
                styles.icon[messageInfo?.type],
            ),
        });
    }, [messageInfo]);

    useEffect(() => {
        if (wrapper) setBoxClassName(showClassName);
    }, [wrapper]);

    useEffect(() => {
        if (!messageInfo) return;
        const duration = messageInfo?.duration || 3000;
        setTimeout(() => {
            resetClassName();
        }, duration);
    }, [messageInfo]);

    const generateMessage = (type: RTMessageType) => {
        return (content, params = {}) => {
            if (wrapper) return;
            setOpen();
            setMessageInfo({
                content,
                ...params,
                type,
            });
        };
    };
    useEffect(() => {
        message.success = generateMessage('success');
        message.info = generateMessage('info');
        message.warning = generateMessage('warning');
        message.danger = generateMessage('danger');
    });
    if (!wrapper) return null;

    return createPortal(
        <div
            className={twMerge(boxClassName, messageInfo?.className)}
            style={messageInfo?.style}
            onTransitionEnd={onTransitionEnd}
        >
            {icon}
            {messageInfo?.content}
        </div>,
        wrapper,
    );
};

type RTMessageMethod = (
    content: string,
    option?: Exclude<RTMessageProps, 'content'>,
) => void;

const MessageProvider = ({ children }: { children: any }) => {
    return (
        <>
            {children}
            <Message />
        </>
    );
};

export { message, MessageProvider };
