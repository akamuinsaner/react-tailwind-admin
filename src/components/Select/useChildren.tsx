import {
    Children,
    cloneElement,
    ReactElement,
    ReactNode,
    useMemo,
} from 'react';
import Empty from '../Empty';

export type RTSelectUseChildrenProps = {
    children: ReactNode;
    searchValue: string;
};

const useChildren = ({ children, searchValue }: RTSelectUseChildrenProps) => {
    const displayMap = useMemo(() => {
        let preChildren = [];
        let result = new Map<string, string>();
        if (!Array.isArray(children)) preChildren = [children];
        else preChildren = children;
        Children.map(preChildren, (child: ReactElement) => {
            result.set(child.props.value, child.props.children);
        });
        return result;
    }, [children]);

    const filterChildren = useMemo(() => {
        let preChildren = [];
        if (!Array.isArray(children)) preChildren = [children];
        else preChildren = children;
        return Children.map(preChildren, (child: ReactElement) => {
            if (
                (child.props.children as string)
                    .toUpperCase()
                    .includes(searchValue.toUpperCase())
            ) {
                return cloneElement(child);
            }
            return null;
        });
    }, [searchValue, children]);

    const displayChildren = useMemo(() => {
        if (!!searchValue && !filterChildren.length) {
            return <Empty />;
        }
        return filterChildren;
    }, [searchValue]);

    return { displayMap, displayChildren };
};

export default useChildren;
