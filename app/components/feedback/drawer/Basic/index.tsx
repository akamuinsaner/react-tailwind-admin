'use client'
import Button from '@/src/components/Button'
import Card from '@/src/components/Card'
import CardBody from '@/src/components/Card/CardBody'
import CardHeader from '@/src/components/Card/CardHeader'
import Drawer from '@/src/components/Drawer'
import { useState } from 'react'

const Basic = () => {
    const [open, setOpen] = useState<boolean>(false)
    const close = () => setOpen(false)
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Basic usage</CardHeader>
            <CardBody>
                <Button onClick={() => setOpen(true)}>Open Drawer</Button>
                <Drawer open={open} closable onClose={close} />
            </CardBody>
        </Card>
    )
}

export default Basic
