import Card from '@/src/components/Card'
import CardBody from '@/src/components/Card/CardBody'
import CardHeader from '@/src/components/Card/CardHeader'
import Pagination from '@/src/components/Pagination'

const Shapes = () => {
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Shapes</CardHeader>
            <CardBody className='flex flex-col gap-3'>
                <Pagination total={10} shape="circle" />
                <Pagination total={10} shape="square" />
            </CardBody>
        </Card>
    )
}

export default Shapes
