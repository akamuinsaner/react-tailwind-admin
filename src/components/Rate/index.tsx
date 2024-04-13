import {
    cloneElement,
    CSSProperties,
    forwardRef,
    ReactElement,
    ReactNode,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';
import { RTSize } from '@/src/types/size';
import classNames from 'classnames';

export type RTRateProps = {
    className?: string;
    style?: CSSProperties;
    size?: RTSize;
    token?: ReactNode;
    value?: number;
    onChange?: (value: number) => void;
};

const Rate = forwardRef<HTMLUListElement, RTRateProps>(
    (
        {
            className,
            style,
            size = 'medium',
            token = <StarIcon />,
            value,
            onChange,
        },
        ref,
    ) => {
        const [score, setScore] = useState<number>(0);
        const [temp, setTemp] = useState<number>(0);
        const boxClassName = twMerge(styles.box, className);
        const itemClassName = twMerge(styles.item.base, styles.item[size]);
        const innerClassName = twMerge(styles.item.inner);
        const leftClassName = twMerge(innerClassName, styles.item.left);
        const rightClassName = twMerge(innerClassName, styles.item.right);
        const iconClassName = s =>
            twMerge(
                styles.icon.base,
                styles.icon[size],
                classNames({
                    [styles.icon.active]: temp >= s,
                }),
            );
        const leftIconClassName = s =>
            twMerge(iconClassName(s), styles.icon.left);
        const rightIconClassName = s =>
            twMerge(iconClassName(s), styles.icon.right);
        const count = useRef<number>(5);

        const onMouseEnter = (temp: number) => () => {
            setTemp(temp);
        };

        const onClick = (score: number) => () => {
            if (onChange) onChange(score);
            if (value !== undefined) return;
            setScore(score);
        };

        const onMouseLeave = () => {
            setTemp(score);
        };

        useEffect(() => {
            setTemp(score);
        }, [score]);

        const getSafeValue = (value: number): number => {
            if (value > 5) return 5;
            if (value < 0) return 0;
            return Math.round(value);
        };

        useEffect(() => {
            if (value !== undefined) {
                setScore(getSafeValue(value));
            }
        }, [value]);

        const children = useMemo(() => {
            return Array(count.current)
                .fill(0)
                .map((a, index) => {
                    return (
                        <li className={itemClassName}>
                            <div
                                className={leftClassName}
                                onMouseEnter={onMouseEnter(index + 1)}
                                onClick={onClick(index + 1)}
                            >
                                {typeof token === 'string' ? (
                                    <div
                                        className={twMerge(
                                            leftIconClassName(index + 1),
                                            styles.icon.string,
                                        )}
                                    >
                                        {token}
                                    </div>
                                ) : (
                                    cloneElement(token as ReactElement, {
                                        className: leftIconClassName(index + 1),
                                    })
                                )}
                            </div>
                            <div
                                className={rightClassName}
                                onMouseEnter={onMouseEnter(index + 1 + 0.5)}
                                onClick={onClick(index + 1 + 0.5)}
                            >
                                {typeof token === 'string' ? (
                                    <div
                                        className={twMerge(
                                            rightIconClassName(index + 1 + 0.5),
                                            styles.icon.string,
                                        )}
                                    >
                                        {token}
                                    </div>
                                ) : (
                                    cloneElement(token as ReactElement, {
                                        className: rightIconClassName(
                                            index + 1 + 0.5,
                                        ),
                                    })
                                )}
                            </div>
                        </li>
                    );
                });
        }, [temp]);
        return (
            <ul
                ref={ref}
                style={style}
                className={boxClassName}
                onMouseLeave={onMouseLeave}
            >
                {children}
            </ul>
        );
    },
);

export default Rate;
