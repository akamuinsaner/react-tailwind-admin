import Card from '@/src/components/Card'
import CardBody from '@/src/components/Card/CardBody'
import CardHeader from '@/src/components/Card/CardHeader'
import Pagination from '@/src/components/Pagination'

const Colors = () => {
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Colors</CardHeader>
            <CardBody className='flex flex-col gap-3'>
                <Pagination total={10} color="primary" />
                <Pagination total={10} color="secondary" variant='contained' />
                <Pagination total={10} color="success" variant='text' />
                <Pagination total={10} color="info" variant='outlined' />
                <Pagination total={10} color="warning" variant='contained' />
                <Pagination total={10} color="danger" variant='text' />
            </CardBody>
        </Card>
    )
}

export default Colors
