import { CSSProperties, FC, memo, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { styles } from './styles'

export type RTTableBodyProps = {
    style?: CSSProperties
    className?: string
    children?: ReactNode
}

const TableBody: FC<RTTableBodyProps> = ({ style, className, children }) => {
    const bodyClassName = twMerge(styles.body.base, className)

    return (
        <tbody style={style} className={bodyClassName}>
            {children}
        </tbody>
    )
}

export default memo(TableBody)
