import Card from '@/src/components/Card'
import CardBody from '@/src/components/Card/CardBody'
import CardHeader from '@/src/components/Card/CardHeader'
import Pagination from '@/src/components/Pagination'

const Size = () => {
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Size</CardHeader>
            <CardBody className='flex flex-col gap-3'>
                <Pagination total={10} size="small" />
                <Pagination total={10} size="medium" />
                <Pagination total={10} size="large" />
            </CardBody>
        </Card>
    )
}

export default Size
