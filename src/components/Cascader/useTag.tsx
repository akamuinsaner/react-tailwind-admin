import { RTSize } from '@/src/types/size';
import { useMemo, useRef } from 'react';
import SelectTag from '../MultiSelect/SelectTag';
import { v4 as uuidV4 } from 'uuid';
import { BaseTreeData } from './utils';
import { styles } from './styles';

export type RTCascaderUseTagProps<T> = {
    tagLimit: number;
    value: Array<number | string>;
    size: RTSize;
    valueOnChange: (value: Array<number | string>) => void;
    idTreeNodeMap: Map<BaseTreeData<T>['id'], T>;
    multiple: boolean;
};

const useTag = <T extends BaseTreeData<T>>({
    value,
    tagLimit,
    size,
    valueOnChange,
    idTreeNodeMap,
    multiple,
}: RTCascaderUseTagProps<T>) => {
    const tagWidthRef = useRef<number[]>([]);

    const displayTags = useMemo(() => {
        const renderValues = value.slice(0, tagLimit);
        const restCount = value.length - tagLimit;
        return renderValues
            .map((v, i) => {
                const text = idTreeNodeMap.get(v)?.name || '';
                const ondelete = () => {
                    const values = value.filter(vl => vl !== v);
                    valueOnChange(values);
                };
                const onInit = (width: number) => {
                    tagWidthRef.current[i] = width;
                };
                return (
                    <SelectTag
                        key={v}
                        ondelete={ondelete}
                        text={text}
                        size={size}
                        onInit={onInit}
                    />
                );
            })
            .concat(
                restCount > 0
                    ? [
                          <SelectTag
                              key={uuidV4()}
                              size={size}
                              text={`+${restCount}...`}
                          />,
                      ]
                    : [],
            );
    }, [value, idTreeNodeMap, size, tagLimit]);

    if (!value.length || !multiple) return null;

    return <div className={styles.tagBox}>{displayTags}</div>;
};

export default useTag;
