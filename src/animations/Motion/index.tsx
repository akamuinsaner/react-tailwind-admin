'use client';
import { AnimationProps, motion, MotionProps } from 'framer-motion';
import { ReactElement, ReactNode, useMemo } from 'react';

export type RTMotionTrigger = 'auto' | 'focus' | 'hover' | 'tap';

const Motion = ({
    children,
    trigger = 'auto',
    ...motionProps
}: {
    children: ReactElement;
    trigger?: RTMotionTrigger;
} & MotionProps) => {
    const { initial, animate, exit, transition, variants, ...props } =
        motionProps;

    const finalProps: MotionProps = useMemo(() => {
        let p = { initial, exit, props };
        if (trigger === 'auto') {
            p = Object.assign({}, p, {
                transition,
                variants,
            });
        }
        if (trigger === 'hover') {
            p = Object.assign({}, p, {
                whileHover: Object.assign(
                    {},
                    {
                        transition,
                        variants,
                    },
                ),
            });
        }
        if (trigger === 'tap') {
            p = Object.assign({}, p, {
                whileTap: Object.assign(
                    {},
                    {
                        transition,
                        variants,
                    },
                ),
            });
        }
        if (trigger === 'focus') {
            p = Object.assign({}, p, {
                whileFocus: Object.assign(
                    {},
                    {
                        transition,
                        variants,
                    },
                ),
            });
        }
        return p;
    }, [motionProps, trigger]);
    console.log(finalProps);
    return (
        <motion.div
            initial={initial}
            animate={animate}
            exit={exit}
            {...finalProps}
        >
            {children}
        </motion.div>
    );
};

export default Motion;
