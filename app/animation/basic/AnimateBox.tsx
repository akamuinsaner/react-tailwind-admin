'use client';

import Box from '@/src/components/Box';
import Grid from '@/src/components/Grid';
import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

const AnimateBox = ({ name }: { name: string }) => {
    const prefix = 'animate-';
    const boxRef = useRef<HTMLDivElement>(null);
    const baseClassName =
        'h-24 rounded bg-main flex items-center justify-center cursor-pointer';
    const [boxClass, setBoxClass] = useState<string>('');

    const startAnimation = () => {
        setBoxClass(twMerge(baseClassName, name));
    };

    useEffect(() => {
        startAnimation();
    }, []);

    const onAnimationEnd = e => {
        setBoxClass(baseClassName);
    };

    return (
        <Grid
            className='overflow-visible'
            span={{ default: 6, lg: 4, xl: 3, '2xl': 2 }}
        >
            <Box
                onAnimationEnd={onAnimationEnd}
                ref={boxRef}
                className={boxClass}
                onClick={startAnimation}
            >
                {name.replace(prefix, '')}
            </Box>
        </Grid>
    );
};

export default AnimateBox;
