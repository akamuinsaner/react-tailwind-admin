import { CSSProperties, forwardRef, ReactNode } from 'react';

export type RTContainerProps = {
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
};

const Container = forwardRef<HTMLDivElement, RTContainerProps>(
    ({ style, className, children }, ref) => {
        return (
            <div ref={ref} style={style}>
                {children}
            </div>
        );
    },
);

export default Container;
