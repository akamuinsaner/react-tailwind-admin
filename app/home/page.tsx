'use client';
import Grid from '@/src/components/Grid';
import Calendar from './Calendar';
import Clock from './Clock';
import Swipe from './Swipe';
import Table from './Table';
import Tl from './Timeline';
import StepperComp from './Stepper';
import ListComp from './List';
import FormComp from './Form';
import { useLayoutEffect } from 'react';
import { twMerge } from 'tailwind-merge';

const HOMESECTIONSS = [
    {
        span: { default: 12, xl: 6, '2xl': 4 },
        className: 'animation-delay-[0ms]',
        comp: <Calendar />,
    },
    {
        span: { default: 12, xl: 6, '2xl': 4 },
        className: 'animation-delay-[50ms]',
        comp: <Clock />,
    },
    {
        span: { default: 12, '2xl': 4 },
        className: 'animation-delay-[100ms]',
        comp: <Swipe />,
    },
    {
        span: { default: 12, '2xl': 4 },
        className: 'animation-delay-[150ms]',
        comp: <Tl />,
    },
    {
        span: { default: 12, '2xl': 8 },
        className: 'animation-delay-[200ms]',
        comp: <Table />,
    },
    {
        span: { default: 12, '2xl': 9 },
        className: 'animation-delay-[250ms]',
        comp: <StepperComp />,
    },
    {
        span: { default: 12, '2xl': 3 },
        className: 'animation-delay-[300ms]',
        comp: <ListComp />,
    },
];

const Home = () => {
    const commonState =
        'animate-fadeInUp opacity-0 -translate-y-full animation-duration-[0.3s]';
    useLayoutEffect(() => {
        const htmlEle = document.querySelector('html');
        htmlEle.scrollIntoView();
    }, []);
    return (
        <Grid
            wrapper
            rowGap='medium'
            colGap='medium'
            className='overflow-visible'
        >
            {HOMESECTIONSS.map(item => (
                <Grid
                    span={item.span}
                    wrapperClassName={twMerge(commonState, item.className)}
                >
                    {item.comp}
                </Grid>
            ))}
            {/* <Grid span={{ default: 12, '2xl': 3 }}>
                <FormComp />
            </Grid> */}
        </Grid>
    );
};

export default Home;
