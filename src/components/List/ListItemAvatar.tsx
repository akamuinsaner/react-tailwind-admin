'use client';
import { FC, memo, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import Avatar, { RTAvatarProps } from '../Avatar';
import { styles } from './styles';
import { ListContext } from './context';

export type RTListItemAvatarProps = RTAvatarProps;

const ListItemAvatar: FC<RTListItemAvatarProps> = props => {
    const context = useContext(ListContext);
    const computedClassNames = twMerge(styles.avatar, props.className);

    return (
        <Avatar size={context.size} {...props} className={computedClassNames}>
            {props.children}
        </Avatar>
    );
};

export default memo(ListItemAvatar);
