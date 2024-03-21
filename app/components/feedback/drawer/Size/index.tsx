'use client'
import Button from '@/src/components/Button'
import Card from '@/src/components/Card'
import CardBody from '@/src/components/Card/CardBody'
import CardHeader from '@/src/components/Card/CardHeader'
import Drawer, { RTDrawerSizes } from '@/src/components/Drawer'
import { useState } from 'react'

const Sizes = () => {
    const [fullWidth, setFullwidth] = useState<boolean>(false)
    const [size, setSize] = useState<RTDrawerSizes>(null)
    const close = () => {
        setSize(null)
        setFullwidth(false)
    }
    const sizes: RTDrawerSizes[] = ['sm', 'md', 'lg', 'xl', '2xl']
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Sizes</CardHeader>
            <CardBody className='flex gap-3'>
                {sizes.map(size => (
                    <Button key={size} onClick={() => setSize(size)}>
                        {size}
                    </Button>
                ))}
                <Button key={size} onClick={() => setFullwidth(true)}>
                    full width
                </Button>
                <Drawer
                    open={!!size || fullWidth}
                    size={size}
                    onClose={close}
                    fullWidth={fullWidth}
                    closable
                ></Drawer>
            </CardBody>
        </Card>
    )
}

export default Sizes
