import { XMarkIcon } from '@heroicons/react/24/solid';
import classNames from 'classnames';
import { useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';

const SelectTag = ({
    text,
    size,
    ondelete,
    onInit
}: any) => {
    const tagRef = useRef<HTMLDivElement>(null);
    const tagClassNames = twMerge(styles.tag.base, classNames({
        [styles.tag[size]]: true,
    }));

    useEffect(() => {
        onInit && onInit(tagRef.current.offsetWidth)
    }, []);

    return (
        <div
            className={tagClassNames}
            ref={tagRef}
        >
            <span>{text}</span>
            {ondelete ? <span
                className={styles.tag.icon}
                onClick={ondelete}
            ><XMarkIcon /></span> : null}
        </div>
    )
}

export default SelectTag;