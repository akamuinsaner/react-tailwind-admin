'use client'
import Button from '@/src/components/Button'
import Card from '@/src/components/Card'
import CardBody from '@/src/components/Card/CardBody'
import CardHeader from '@/src/components/Card/CardHeader'
import Drawer, { RTDrawerPlacements } from '@/src/components/Drawer'
import { useEffect, useState } from 'react'

const Basic = () => {
    const [open, setOpen] = useState<boolean>(false)
    const [placement, setPlacement] = useState<RTDrawerPlacements>(null)
    const placements: RTDrawerPlacements[] = ['top', 'right', 'bottom', 'left']
    const close = () => setPlacement(null)
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Basic usage</CardHeader>
            <CardBody className='flex gap-3'>
                {placements.map(place => (
                    <Button key={place} onClick={() => setPlacement(place)}>
                        {place}
                    </Button>
                ))}
            </CardBody>
            <Drawer
                open={!!placement}
                closable
                onClose={close}
                placement={placement}
            />
        </Card>
    )
}

export default Basic
