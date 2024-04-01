import classNames from 'classnames';
import { FC, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { CarouselContext, RTCarouselContext } from './context';
import { styles } from './styles';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export type RTCarouselNavigationProps = {
    onNavigation: (active: number) => void;
};

const CarouselNavigation: FC<RTCarouselNavigationProps> = ({
    onNavigation,
}) => {
    const { count, actualActive } =
        useContext<RTCarouselContext>(CarouselContext);
    const prevClassName = twMerge(
        styles.navigation.base,
        styles.navigation.prev,
        classNames({}),
    );
    const afterClassName = twMerge(
        styles.navigation.base,
        styles.navigation.after,
        classNames({}),
    );
    const iconClassName = twMerge(styles.navigation.icon.base, classNames({}));
    return (
        <div>
            <div
                className={prevClassName}
                onClick={() => onNavigation(actualActive - 1)}
            >
                <ChevronLeftIcon className={iconClassName} />
            </div>
            <div
                className={afterClassName}
                onClick={() => onNavigation(actualActive + 1)}
            >
                <ChevronRightIcon className={iconClassName} />
            </div>
        </div>
    );
};

export default CarouselNavigation;
