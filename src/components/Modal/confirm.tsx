import { ReactNode, useEffect, useState } from 'react';
import Modal from '.';
import Button from '../Button';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';
import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

export type RTModalConfirmProps = {
    title: ReactNode;
    content: ReactNode,
    icon?: ReactNode,
    confirmText?: ReactNode;
    closeText?: ReactNode;
    onConfirm?: () => void | Promise<any>;
    onClose?: () => void;
}

export type RTConfirmModalType = 'confirm' | 'success' | 'info' | 'warning' | 'danger';

type RTModalMethod = (params: RTModalConfirmProps) => void

export class confirm {
    static confirm: RTModalMethod
    static info: RTModalMethod
    static warning: RTModalMethod
    static success: RTModalMethod
    static danger: RTModalMethod
}


const ConfirmModal = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [confirmInfo, setConfirmInfo] = useState<RTModalConfirmProps & {
        type: RTConfirmModalType
    }>(null);


    const generateConfirm = (type: RTConfirmModalType) => {
        return (params: RTModalConfirmProps) => {
            setOpen(true);
            setConfirmInfo({
                ...params,
                type,
            })
        }
    }

    useEffect(() => {
        confirm.confirm = generateConfirm('confirm');
        confirm.success = generateConfirm('success');
        confirm.info = generateConfirm('info');
        confirm.warning = generateConfirm('warning');
        confirm.danger = generateConfirm('danger');
    })

    if (!confirmInfo) return null;

    const {
        type,
        icon,
        title,
        content,
        closeText,
        confirmText,
        onClose = () => {},
        onConfirm = () => {},
    } = confirmInfo;

    const onCancel = () => {
        onClose();
        setOpen(false);
    }

    const onOk = () => {
        onConfirm();
        onCancel();
    }

    const iconClassName = twMerge('h-8 w-8 mr-3', classNames(`text-${type === 'confirm' ? 'primary' : type}`))

    return (
        <Modal
            open={open}
            onClose={onCancel}
            size="xs"
        >
            <ModalHeader>
                <div className={iconClassName}>
                    {icon || <ExclamationCircleIcon />}
                </div>
                {title}
            </ModalHeader>
            <ModalBody>{content}</ModalBody>
            <ModalFooter>
                {type === 'confirm' ? <Button onClick={onCancel}>{closeText || 'Cancel'}</Button> : ''}
                <Button onClick={onOk}>{confirmText || 'Ok'}</Button>
            </ModalFooter>
        </Modal>
    )
}

export const ConfirmModalProvider = ({
    children
}: { children: any }) => {
    return <>
        {children}
        <ConfirmModal />
    </>
}
