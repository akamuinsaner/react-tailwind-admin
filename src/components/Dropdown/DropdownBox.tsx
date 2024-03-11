'use client'
import { styles } from './styles';
import { CSSProperties, FC, ReactNode, memo, useContext, useEffect, SyntheticEvent, useRef } from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { DropDownContext } from './context';
import { computePlacementStyle, computeArrowStyle } from './utils';


export type RTDropdownBoxProps = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
}

const DropdownBox: FC<RTDropdownBoxProps> = ({
    children,
    className,
    style,
}) => {
    const context = useContext(DropDownContext);
    const { anchor, placement, arrow, setActive, active } = context;

    const computedClassNames = twMerge(styles.box.base, classNames({
        [styles.box.show]: !!active,
    }), className);

    const close = () => {
        setActive(false);
        document.removeEventListener('click', close);
    }

    useEffect(() => {
        if (active) {
            document.addEventListener('click', close);
        }
    }, [active]);

    return (
        <div
            style={{
                ...computePlacementStyle(anchor, placement),
                minWidth: anchor?.offsetWidth,
                ...style
            }}
            className={computedClassNames}
            // onTransitionEnd={onTransitionEnd}
        >
            <div
                className={styles.box.arrow}
                style={computeArrowStyle(anchor, placement, arrow)}
            ></div>
            {children}
        </div>
    )
}

export default memo(DropdownBox);