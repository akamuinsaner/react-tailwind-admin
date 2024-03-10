'use client'
import { FC, memo } from 'react';
import { twMerge } from 'tailwind-merge';
import Avatar, { RTAvatarProps } from '../Avatar';
import { styles } from './styles';

export type RTListItemAvatarProps = RTAvatarProps;

const ListItemAvatar: FC<RTListItemAvatarProps> = (props) => {

    const computedClassNames = twMerge(styles.avatar, props.className);

    return (
        <Avatar
            {...props}
            className={computedClassNames}
        >{props.children}</Avatar>
    )
}

export default memo(ListItemAvatar);