'use client';
import classNames from 'classnames';
import { CSSProperties, FC, ReactNode, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';
import { StepperContext } from './context';
import { CheckIcon } from '@heroicons/react/24/outline';

export type RTStepperItemProps = {
    style?: CSSProperties;
    className?: string;
    children: ReactNode;
    description?: ReactNode;
    index?: number;
};

const StepperItem: FC<RTStepperItemProps> = ({
    style,
    className,
    children,
    description,
    index,
}) => {
    const { length, alternative, direction, active } =
        useContext(StepperContext);
    const baseClasses = twMerge(
        styles.item.base,
        classNames({
            [styles.item.last]: length === index,
            [styles.item.alternative]: alternative,
            [styles.item.vertical]: direction === 'vertical',
        }),
        className,
    );
    const innerClasses = twMerge(
        styles.inner.base,
        classNames({
            [styles.inner.alternative]: alternative,
        }),
    );
    const labelClasses = twMerge(
        styles.label.base,
        classNames({
            [styles.label.last]: length === index,
            [styles.label.alternative]: alternative || direction === 'vertical',
        }),
    );
    const descriptionClasses = twMerge(styles.item.description);
    const orderClasses = twMerge(
        styles.order.base,
        classNames({
            [styles.order.alternative]: alternative,
            [styles.order.vertical]: direction === 'vertical',
            [styles.order.last]: length === index,
            [styles.order.first]: index === 1,
            [styles.order.active]: active >= index,
        }),
    );

    return (
        <li style={style} className={baseClasses}>
            <div className={innerClasses}>
                <div className={orderClasses}>
                    {active > index ? <CheckIcon /> : index}
                </div>
                <dl>
                    <dt className={labelClasses}>{children}</dt>
                    {description ? (
                        <dl className={descriptionClasses}>{description}</dl>
                    ) : null}
                </dl>
            </div>
        </li>
    );
};

export default StepperItem;
