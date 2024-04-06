import { Children, CSSProperties, forwardRef, ReactNode, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';

export type RTBreadcrumbProps = {
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
    separator?: ReactNode;
};

const Breadcrumb = forwardRef<HTMLDivElement, RTBreadcrumbProps>(
    ({ children, className, style, separator }, ref) => {
        const baseClassName = twMerge(styles.base, className);
        const separatorClassName = twMerge(styles.separator);
        const finalChildren = useMemo(() => {
            if (!Array.isArray(children)) return children;
            let final = [];
            Children.map(children, (child, index) => {
                final.push(child);
                if (index !== children.length - 1) {
                    final.push(
                        <span className={separatorClassName}>
                            {separator || '/'}
                        </span>,
                    );
                }
            });
        }, [children, separator]);
        return (
            <div ref={ref} style={style} className={baseClassName}>
                {finalChildren}
            </div>
        );
    },
);

export default Breadcrumb;
