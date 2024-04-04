import { RTSize } from '@/src/types/size';
import { useMemo, useRef } from 'react';
import SelectTag from './SelectTag';
import { v4 as uuidV4 } from 'uuid';
import { styles } from './styles';

export type RTSelectUseTagProps = {
    tagLimit: number;
    value: string[];
    size: RTSize;
    valueOnChange: (value: string[]) => void;
    displayMap: Map<string, string>;
    multiple: boolean;
};

const useTag = ({
    value,
    tagLimit,
    size,
    valueOnChange,
    displayMap,
    multiple,
}: RTSelectUseTagProps) => {
    const tagWidthRef = useRef<number[]>([]);

    const displayTags = useMemo(() => {
        const renderValues = value.slice(0, tagLimit);
        const restCount = value.length - tagLimit;
        return renderValues
            .map((v, i) => {
                const text = displayMap.get(v);
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
    }, [value, displayMap, size, tagLimit]);

    if (!value.length || !multiple) return null;

    return <div className={styles.tagBox}>{displayTags}</div>;
};

export default useTag;
