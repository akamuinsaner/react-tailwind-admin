import { CSSProperties, FC, memo, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { styles } from './styles'

export type RTTableFootProps = {
    style?: CSSProperties
    className?: string
    children?: ReactNode
}

const TableFoot: FC<RTTableFootProps> = ({ style, className, children }) => {
    const footClassName = twMerge(styles.foot.base, className)

    return (
        <tfoot style={style} className={footClassName}>
            {children}
        </tfoot>
    )
}

export default memo(TableFoot)
