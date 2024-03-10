'use client'
import { CSSProperties, FC, ReactNode, memo } from 'react';
import { twMerge } from 'tailwind-merge';
import Text from '../Text';
import { styles } from './styles';

export type Props = {
    className?: string;
    style?: CSSProperties;
    body: ReactNode;
    bodyStyle?: CSSProperties;
    bodyClassName?: string;
    tip?: ReactNode;
    tipStyle?: CSSProperties;
    tipClassName?: string;
}

const ListItemText: FC<Props> = ({
    className,
    style,
    body,
    bodyStyle,
    bodyClassName,
    tip,
    tipStyle,
    tipClassName
}) => {

    const computedClassNames = twMerge(styles.text, className);

    return (
        <div
            style={style}
            className={computedClassNames}
        >
            <Text
                style={bodyStyle}
                className={bodyClassName}
                size="body"
            >
                {body}
            </Text>
            {tip ? (
                <Text
                    style={tipStyle}
                    className={tipClassName}
                    size='tip'
                >
                    {tip}
                </Text>
            ) : null}
        </div>
    )
}

export default memo(ListItemText);