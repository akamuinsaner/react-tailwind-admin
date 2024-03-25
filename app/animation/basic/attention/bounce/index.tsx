'use client';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import { motion, useScroll } from 'framer-motion';

const Bounce = () => {
    return (
        <motion.div
            initial={{ y: 0 }}
            whileTap={{
                transition: {
                    repeat: 1,
                },
                y: [-50, -50, -50, -20, 0, -10, 0, -5, 0],
            }}
        >
            <Card>
                <CardBody className='text-center py-10'>Bounce</CardBody>
            </Card>
        </motion.div>
    );
};

export default Bounce;
