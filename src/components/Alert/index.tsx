import { CSSProperties, FC, memo, ReactNode } from "react";
import { styles } from './styles';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
import { RTSeverity } from "@/src/types/severity";

export type RTAlertProps = {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    severity?: RTSeverity;
    type?: 'normal' | 'contained' | 'outlined';
    icon?: ReactNode;
    accent?: boolean;
    action?: ReactNode;
}

const Alert: FC<RTAlertProps> = ({
    children,
    className,
    style,
    severity = 'success',
    type = 'normal',
    icon,
    accent = false,
    action
}) => {

    const computedClassNames = twMerge(styles.base, classNames({
        [styles.success]: severity === 'success',
        [styles.info]: severity === 'info',
        [styles.warning]: severity === 'warning',
        [styles.danger]: severity === 'danger',
        [styles.normal]: type === 'normal',
        [styles.contained]: type === 'contained',
        [styles.outlined]: type === 'outlined',
        [styles.accent]: accent,
    }), className);

    return (
        <div
            style={style}
            className={computedClassNames}
        >
            {icon && <div className={styles.icon}>{icon}</div>}
            {children}
            {action && <div className={styles.action}>{action}</div>}
        </div>
    )
}

export default memo(Alert);
