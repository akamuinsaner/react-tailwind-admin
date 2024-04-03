'use client';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import { useState } from 'react';
import { message, MessageProvider } from '@/src/components/Message';
import Button from '@/src/components/Button';

const Duration = () => {
    const showMessage = () => {
        message.info(
            'This is a customized duration message lasting for 10 second',
            {
                duration: 10000,
            },
        );
    };
    return (
        <MessageProvider>
            <Card className='break-inside-avoid mb-6'>
                <CardHeader>Duration</CardHeader>
                <CardBody>
                    <Button onClick={showMessage}>Customized duration</Button>
                </CardBody>
            </Card>
        </MessageProvider>
    );
};

export default Duration;
