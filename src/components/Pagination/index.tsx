'use client'
import { RTSize } from '@/src/types/size'
import { RTVariant } from '@/src/types/variant'
import classNames from 'classnames'
import { FC, memo, useEffect, useMemo, useReducer } from 'react'
import { twMerge } from 'tailwind-merge'
import {
    reducer,
    initialState,
    setPageAction,
    setPageSizeAction,
} from './store'
import { styles } from './styles'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { RTSeverity } from '@/src/types/severity'
import Select from '../Select'
import SelectOption from '../Select/SelectOption'

export type RTPaginationShapes = 'circle' | 'square'
export type RTPaginationVariants = 'text' | 'outlined' | 'contained'

export type RTPaginationProps = {
    disabled?: boolean
    page?: number
    pageSize?: number
    total?: number
    boundaryCount?: number
    siblingCount?: number
    shape?: RTPaginationShapes
    size?: RTSize
    variant?: RTPaginationVariants
    color?: 'primary' | 'secondary' | RTSeverity
    onChange?: (page: number, pageSize: number) => void
    sizeOptions?: number[]
}

const Pagination: FC<RTPaginationProps> = ({
    disabled = false,
    page,
    pageSize,
    total = 0,
    boundaryCount = 1,
    siblingCount = 1,
    shape = 'square',
    size = 'medium',
    variant = 'outlined',
    color = 'primary',
    onChange,
    sizeOptions,
}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const pages = useMemo(() => {
        return Math.ceil(total / state.pageSize)
    }, [state.pageSize, total])

    const list = useMemo<Array<number>>(() => {
        const { page } = state
        const leastCount = 1 + siblingCount * 2 + boundaryCount * 2 + 2
        // shouw all page items
        if (pages < leastCount)
            return Array(pages)
                .fill(0)
                .map((item, i) => i + 1)
        // page at start items
        if (page < boundaryCount + 1 + siblingCount) {
            return [
                ...Array(boundaryCount + 1 + siblingCount)
                    .fill(0)
                    .map((item, i) => i + 1),
                0,
                ...Array(boundaryCount)
                    .fill(0)
                    .map((item, i) => pages - boundaryCount + i + 1),
            ]
        }
        if (page === boundaryCount + 1 + siblingCount) {
            return [
                ...Array(boundaryCount + 1 + siblingCount + 1)
                    .fill(0)
                    .map((item, i) => i + 1),
                0,
                ...Array(boundaryCount)
                    .fill(0)
                    .map((item, i) => pages - boundaryCount + i + 1),
            ]
        }
        if (page > pages - (boundaryCount + siblingCount)) {
            return [
                ...Array(boundaryCount)
                    .fill(0)
                    .map((item, i) => i + 1),
                0,
                ...Array(boundaryCount + 1 + siblingCount)
                    .fill(0)
                    .map(
                        (item, i) =>
                            pages - (boundaryCount + 1 + siblingCount) + i + 1,
                    ),
            ]
        }
        if (page === pages - (boundaryCount + siblingCount)) {
            return [
                ...Array(boundaryCount)
                    .fill(0)
                    .map((item, i) => i + 1),
                0,
                ...Array(boundaryCount + 1 + siblingCount + 1)
                    .fill(0)
                    .map(
                        (item, i) =>
                            pages -
                            (boundaryCount + 1 + siblingCount + 1) +
                            i +
                            1,
                    ),
            ]
        }
        return [
            ...Array(boundaryCount)
                .fill(0)
                .map((item, i) => i + 1),
            0,
            ...Array(siblingCount * 2 + 1)
                .fill(0)
                .map((item, i) => page - siblingCount + i),
            0,
            ...Array(boundaryCount)
                .fill(0)
                .map((item, i) => pages - boundaryCount + i + 1),
        ]
    }, [state.page, siblingCount, boundaryCount, total, pages])

    useEffect(() => {
        if (page !== undefined) dispatch(setPageAction(page))
    }, [page])

    useEffect(() => {
        if (pageSize !== undefined) dispatch(setPageSizeAction(pageSize))
    }, [pageSize])

    const itemClassName = (page: number) =>
        twMerge(
            styles.item.base,
            styles.item[shape],
            styles.item[size],
            classNames({
                [styles.item.forbid]: page === 0,
                [styles.item.current]: page === state.page,
                [styles.item[color]]: page === state.page,
                [styles.item.disabled]: disabled,
                [styles.item[variant]]: true,
                [styles.item.containedAndCurrent]:
                    page === state.page && variant === 'contained',
            }),
        )

    const prevBtnClassName = twMerge(
        classNames({
            [itemClassName(-1)]: true,
            [styles.item.disabled]: state.page === 1 || disabled,
            [styles.item[variant]]: true,
        }),
    )

    const iconClassName = twMerge(styles.item.icon.base, styles.item.icon[size])

    const afterBtnClassName = twMerge(
        classNames({
            [itemClassName(-1)]: true,
            [styles.item.disabled]: state.page === pages,
            [styles.item[variant]]: true,
        }),
    )

    const setPage = (curPage: number) => {
        if (!curPage) return
        if (onChange) onChange(curPage, state.pageSize)
        if (page !== undefined) return
        dispatch(setPageAction(curPage))
    }

    const setPageSize = (curPageSize: string) => {
        const ps = Number(curPageSize)
        if (!ps) return
        if (onChange) onChange(1, ps)
        if (pageSize !== undefined) return
        dispatch(setPageSizeAction(ps))
    }

    return (
        <div className={styles.base}>
            <div
                className={prevBtnClassName}
                onClick={() => setPage(state.page - 1)}
            >
                <ChevronLeftIcon className={iconClassName} />
            </div>
            {list.map((item, index) => (
                <div
                    key={index}
                    className={itemClassName(item)}
                    onClick={() => setPage(item)}
                >
                    {item || '...'}
                </div>
            ))}
            <div
                className={afterBtnClassName}
                onClick={() => setPage(state.page + 1)}
            >
                <ChevronRightIcon className={iconClassName} />
            </div>
            {sizeOptions ? (
                <Select
                    className='w-24'
                    value={`${state.pageSize}`}
                    onChange={setPageSize}
                    disabled={disabled}
                >
                    {sizeOptions.map(item => (
                        <SelectOption
                            value={`${item}`}
                        >{`${item}`}</SelectOption>
                    ))}
                </Select>
            ) : null}
        </div>
    )
}

export default memo(Pagination)
