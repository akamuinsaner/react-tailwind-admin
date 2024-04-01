import classNames from 'classnames';
import { FC, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { CarouselContext, RTCarouselContext } from './context';
import { styles } from './styles';

export type RTCarouselPaginationProps = {
    onPagination: (active: number) => void;
};

const CarouselPagination: FC<RTCarouselPaginationProps> = ({
    onPagination,
}) => {
    const { count, actualActive } =
        useContext<RTCarouselContext>(CarouselContext);
    const paginationClassName = twMerge(styles.pagination.base);
    const itemClassName = index =>
        twMerge(
            styles.pagination.item,
            classNames({
                [styles.pagination.active]: index === actualActive,
            }),
        );
    return (
        <div className={paginationClassName}>
            {Array(count)
                .fill(0)
                .map((a, i) => (
                    <div
                        onClick={() => onPagination(i)}
                        className={itemClassName(i)}
                    ></div>
                ))}
        </div>
    );
};

export default CarouselPagination;
