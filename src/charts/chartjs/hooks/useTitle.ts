import { DefaultTitleOption } from '../configs/title';
import { TitleOptions } from 'chart.js/auto';
import deepmerge from 'deepmerge';
import { useEffect, useState } from 'react';

const useTitle = ({ title }: { title?: Partial<TitleOptions> }) => {
    const [config, setConfig] = useState<TitleOptions>(DefaultTitleOption);
    const display: Partial<TitleOptions> = { display: true };
    useEffect(() => {
        if (title) {
            const conf: TitleOptions = deepmerge.all([
                DefaultTitleOption,
                title,
                display,
            ]) as TitleOptions;
            setConfig(conf);
        }
    }, [title]);

    return config;
};

export default useTitle;
