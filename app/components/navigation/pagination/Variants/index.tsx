import Card from '@/src/components/Card'
import CardBody from '@/src/components/Card/CardBody'
import CardHeader from '@/src/components/Card/CardHeader'
import Pagination from '@/src/components/Pagination'

const Variant = () => {
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Variant</CardHeader>
            <CardBody className='flex flex-col gap-3'>
                <Pagination total={10} variant="text" />
                <Pagination total={10} variant="text" disabled />
                <Pagination total={10} variant="outlined" />
                <Pagination total={10} variant="outlined" disabled />
                <Pagination total={10} variant="contained" />
                <Pagination total={10} variant="contained" disabled />
            </CardBody>
        </Card>
    )
}

export default Variant
