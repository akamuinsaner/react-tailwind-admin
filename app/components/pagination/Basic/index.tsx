import Card from '@/src/components/Card'
import CardBody from '@/src/components/Card/CardBody'
import CardHeader from '@/src/components/Card/CardHeader'
import Pagination from '@/src/components/Pagination'

const Basic = () => {
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Basic usage</CardHeader>
            <CardBody className='flex flex-col gap-3'>
                <Pagination total={10} />
                <Pagination total={10} disabled />
            </CardBody>
        </Card>
    )
}

export default Basic
