import { RTSize } from '@/src/types/size';
import { CSSProperties, FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { RTTreeSelectOption } from '.';
import List from '../List';
import ListItem from '../List/ListItem';
import ListItemAction from '../List/ListItemAction';
import ListItemText from '../List/ListItemText';
import { styles } from './styles';
import Expand from '../Cascader/Expand';
import ListItemIcon from '../List/ListItemIcon';
import { highlightText, RESERVED_KEY } from '../Cascader/utils';
import Check from '../Cascader/Check';

export type RTTreeSelectOptionProps = {
    openKeys: any[];
    searchData: RTTreeSelectOption[];
    value: Array<number | string>;
    size: RTSize;
    style?: CSSProperties;
    className?: string;
    loadData?: (option: RTTreeSelectOption) => any;
    setLoadingId: (id: number | string) => void;
    loadingId: number | string;
    showCheck: boolean;
    multiple: boolean;
    onSelect: (option: RTTreeSelectOption) => void;
    searchValue: string;
    toggleCheck: (node: RTTreeSelectOption, checked: boolean) => void;
    checkWithRelation: boolean;
    idChildrenIdMap: Map<string | number, (string | number)[]>;
    toggleExpand: (id: string | number) => void;
};

const Options: FC<RTTreeSelectOptionProps> = ({
    openKeys,
    searchData,
    value,
    size,
    style,
    className,
    loadData,
    setLoadingId,
    loadingId,
    showCheck,
    multiple,
    onSelect,
    searchValue,
    toggleCheck,
    checkWithRelation,
    idChildrenIdMap,
    toggleExpand,
}) => {
    const renderItems = (
        pId: RTTreeSelectOption['id'] = RESERVED_KEY,
        depth: number = 0,
    ) => {
        let nodes = searchData.filter(o => o.parentId === pId);
        return nodes.map(node => {
            const selected = value.includes(node.id);
            const hasChildren = !!(node.children && node.children.length);
            const showChildren = openKeys.includes(node.id);
            const isLoading = loadingId === node.id;
            return (
                <>
                    <ListItem
                        key={node.id}
                        active={selected}
                        onClick={e => {
                            multiple && e.stopPropagation();
                            onSelect(node);
                        }}
                    >
                        {showCheck ? (
                            <ListItemIcon>
                                <Check
                                    option={node}
                                    show={showCheck}
                                    value={value}
                                    toggleCheck={toggleCheck}
                                    idChildrenIdMap={idChildrenIdMap}
                                    checkWithRelation={checkWithRelation}
                                />
                            </ListItemIcon>
                        ) : null}
                        <ListItemText
                            body={highlightText(node.name, searchValue)}
                        />
                        <ListItemAction>
                            <Expand
                                loadData={loadData}
                                hasChildren={hasChildren}
                                showChildren={showChildren}
                                isLoading={isLoading}
                                openChildren={() => {
                                    toggleExpand(node.id);
                                }}
                                startLoadData={() => {
                                    if (!loadData) return;
                                    setLoadingId(node.id);
                                    loadData(node)
                                        .then(data => {
                                            toggleExpand(node.id);
                                        })
                                        .finally(() => {
                                            setLoadingId(null);
                                        });
                                }}
                            />
                        </ListItemAction>
                    </ListItem>
                    {showChildren ? renderTreeList(node.id, depth + 1) : null}
                </>
            );
        });
    };

    const renderTreeList = (id = RESERVED_KEY, depth = 0) => {
        return (
            <List
                size={size}
                key={id}
                style={{
                    ...style,
                    paddingLeft: `${depth ? 24 : 0}px`,
                }}
                className={twMerge(styles.option.base, className)}
            >
                {renderItems(id, depth)}
            </List>
        );
    };
    return <>{renderTreeList()}</>;
};

export default Options;
