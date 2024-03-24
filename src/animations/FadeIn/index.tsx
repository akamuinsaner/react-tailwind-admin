'use client';
import { ReactElement } from 'react';
import Motion, { RTMotionTrigger } from '../Motion';

const FadeIn = ({
    children,
    trigger = 'auto',
}: {
    children: ReactElement;
    trigger?: RTMotionTrigger;
}) => {
    return (
        <Motion
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            trigger={trigger}
        >
            {children}
        </Motion>
    );
};

export default FadeIn;
