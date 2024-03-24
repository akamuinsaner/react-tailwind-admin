'use client';
import { AnimationProps, motion, MotionProps } from 'framer-motion';
import { ReactElement, ReactNode, useMemo } from 'react';

const Motion = ({
    children,
    trigger = 'auto',
    ...motionProps
}: {
    children: ReactElement;
    trigger?: 'auto' | 'focus' | 'hover' | 'tap';
} & MotionProps) => {
    const { 
        initial,
        animate,
        exit,
        transition,
        variants,
        ...props
    } = motionProps;

    const finalProps: MotionProps = useMemo(() => {
        let p = { initial, exit, props };
        if (trigger === 'auto') {
            p = Object.assign({}, p, {
                animate,
                transition,
                variants,
            })
        }
        if (trigger === 'hover') {
            p = Object.assign({}, p), {
                whileHover: Object.assign
            }
        }
        return p;
    }, [motionProps, trigger]);

    return (
        <motion.div initial={initial} exit={exit}>
            {children}
        </motion.div>
    );
};

export default Motion;
