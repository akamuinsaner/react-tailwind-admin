'use client';
import {
    CSSProperties,
    FC,
    ReactNode,
    useContext,
    useEffect,
    useMemo,
    useRef,
} from 'react';
import { twMerge } from 'tailwind-merge';
import { CarouselContext, RTCarouselContext } from './context';
import { styles } from './styles';

export type RTCarouselItemProps = {
    children: ReactNode;
    style?: CSSProperties;
    className?: string;
    index?: number;
};

const CarouselItem: FC<RTCarouselItemProps> = ({
    children,
    style,
    className,
    index,
}) => {
    const slideRef = useRef<HTMLDivElement>(null);
    const {
        span,
        direction,
        space,
        childrenRefs,
        active,
        count,
        actualActive,
    } = useContext<RTCarouselContext>(CarouselContext);
    const itemClasses = twMerge(
        styles.item.base,
        styles.item[direction],
        className,
        '!last:mr-0',
    );

    useEffect(() => {
        childrenRefs.current[index] = slideRef.current;
    }, []);

    const finalStyle = useMemo(() => {
        let fs = style;
        if (direction === 'horizontal') {
            fs = Object.assign({}, fs, {
                width: `${span - space}px`,
                marginRight: `${space}px`,
            });
        }
        if (direction === 'vertical') {
            fs = Object.assign({}, fs, {
                height: `${span - space}px`,
                marginBottom: `${space}px`,
            });
        }
        return fs;
    }, [style, direction, span, space]);

    return (
        <div
            data-index={index}
            data-active={index === actualActive}
            data-offset={index - actualActive}
            ref={slideRef}
            style={finalStyle}
            className={itemClasses}
        >
            {children}
        </div>
    );
};

export default CarouselItem;
