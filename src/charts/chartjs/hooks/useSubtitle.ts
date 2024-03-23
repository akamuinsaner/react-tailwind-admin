import { DefaultSubtitleOption } from '../configs/subTitle';
import { TitleOptions } from 'chart.js/auto';
import deepmerge from 'deepmerge';
import { useEffect, useState } from 'react';

const useSubtitle = ({ subtitle }: { subtitle?: Partial<TitleOptions> }) => {
    const [config, setConfig] = useState<TitleOptions>(DefaultSubtitleOption);
    const display: Partial<TitleOptions> = { display: true };
    useEffect(() => {
        if (subtitle) {
            const conf: TitleOptions = deepmerge.all([
                DefaultSubtitleOption,
                subtitle,
                display,
            ]) as TitleOptions;
            setConfig(conf);
        }
    }, [subtitle]);

    return config;
};

export default useSubtitle;
