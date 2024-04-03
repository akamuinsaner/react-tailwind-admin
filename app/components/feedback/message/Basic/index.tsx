'use client';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import { useState } from 'react';
import { message, MessageProvider } from '@/src/components/Message';
import Button from '@/src/components/Button';

const Basic = () => {
    const showMessage = () => {
        message.info('This is a default info message lasting for 3 second');
    };
    return (
        <MessageProvider>
            <Card className='break-inside-avoid mb-6'>
                <CardHeader>Basic usage</CardHeader>
                <CardBody>
                    <Button onClick={showMessage}>Show default message</Button>
                </CardBody>
            </Card>
        </MessageProvider>
    );
};

export default Basic;
