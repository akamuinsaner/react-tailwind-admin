import { RTSize } from '@/src/types/size';
import { CSSProperties, FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { RTCascaderOption } from '.';
import List from '../List';
import ListItem from '../List/ListItem';
import ListItemAction from '../List/ListItemAction';
import ListItemText from '../List/ListItemText';
import { styles } from './styles';
import Expand from './Expand';
import ListItemIcon from '../List/ListItemIcon';
import { highlightText } from './utils';
import Check from './Check';

export type RTCascaderOptionProps = {
    openKeys: any[];
    searchData: RTCascaderOption[];
    value: Array<number | string>;
    size: RTSize;
    style?: CSSProperties;
    className?: string;
    loadData?: (option: RTCascaderOption) => any;
    setOpenKeys: (keys: any[]) => void;
    setLoadingId: (id: number | string) => void;
    loadingId: number | string;
    showCheck: boolean;
    multiple: boolean;
    onSelect: (option: RTCascaderOption) => void;
    searchValue: string;
    toggleCheck: (node: RTCascaderOption, checked: boolean) => void;
    checkWithRelation: boolean;
    idChildrenIdMap: Map<string | number, (string | number)[]>;
};

const Options: FC<RTCascaderOptionProps> = ({
    openKeys,
    searchData,
    value,
    size,
    style,
    className,
    loadData,
    setOpenKeys,
    setLoadingId,
    loadingId,
    showCheck,
    multiple,
    onSelect,
    searchValue,
    toggleCheck,
    checkWithRelation,
    idChildrenIdMap,
}) => {
    const renderItems = (pId: any, depth: number) => {
        let nodes = searchData.filter(o => o.parentId === pId);
        return nodes.map(node => {
            const selected = value.includes(node.id);
            const hasChildren = !!(node.children && node.children.length);
            const isLoading = loadingId === node.id;
            return (
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
                            isLoading={isLoading}
                            openChildren={() => {
                                const a = [...openKeys];
                                a[depth + 1] = node.id;
                                setOpenKeys(a);
                            }}
                            startLoadData={() => {
                                if (!loadData) return;
                                setLoadingId(node.id);
                                loadData(node)
                                    .then(data => {
                                        const a = [...openKeys];
                                        a[depth + 1] = node.id;
                                        setOpenKeys(a);
                                    })
                                    .finally(() => {
                                        setLoadingId(null);
                                    });
                            }}
                        />
                    </ListItemAction>
                </ListItem>
            );
        });
    };

    const renderTreeList = () => {
        return openKeys.map((key, depth) => {
            return (
                <List
                    size={size}
                    key={key}
                    style={style}
                    className={twMerge(styles.option.base, className)}
                >
                    {renderItems(key, depth)}
                </List>
            );
        });
    };
    return <>{renderTreeList()}</>;
};

export default Options;
