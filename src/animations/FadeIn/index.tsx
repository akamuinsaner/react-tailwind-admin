'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const FadeIn = ({ children }: { children: ReactNode }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                repeat: Infinity,
                duration: 2,
            }}
            whileHover={{
                opacity: [0, 1],
                transition: {
                    repeat: Infinity,
                    duration: 2,
                },
            }}
        >
            {children}
        </motion.div>
    );
};

export default FadeIn;
