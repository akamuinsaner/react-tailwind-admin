import Card from '@/src/components/Card'
import CardBody from '@/src/components/Card/CardBody'
import CardHeader from '@/src/components/Card/CardHeader'
import Pagination from '@/src/components/Pagination'

const SizeOption = () => {
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Size options</CardHeader>
            <CardBody className='flex flex-col gap-3'>
                <Pagination total={100} sizeOptions={[5, 10, 20, 25, 50]} />
            </CardBody>
        </Card>
    )
}

export default SizeOption
