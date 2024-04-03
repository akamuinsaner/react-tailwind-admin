'use client';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import { useState } from 'react';
import { message, MessageProvider } from '@/src/components/Message';
import Button from '@/src/components/Button';
import Flex from '@/src/components/Flex';

const Type = () => {
    const showSuccessMessage = () => {
        message.success('This is a success message');
    };
    const showInfoMessage = () => {
        message.info('This is a info message');
    };
    const showWarningMessage = () => {
        message.warning('This is a warning message');
    };
    const showDangerMessage = () => {
        message.danger('This is a danger message');
    };
    return (
        <MessageProvider>
            <Card className='break-inside-avoid mb-6'>
                <CardHeader>Type</CardHeader>
                <CardBody>
                    <Flex gap='medium'>
                        <Button color='success' onClick={showSuccessMessage}>
                            success
                        </Button>
                        <Button color='info' onClick={showInfoMessage}>
                            info
                        </Button>
                        <Button color='warning' onClick={showWarningMessage}>
                            warning
                        </Button>
                        <Button color='danger' onClick={showDangerMessage}>
                            danger
                        </Button>
                    </Flex>
                </CardBody>
            </Card>
        </MessageProvider>
    );
};

export default Type;
