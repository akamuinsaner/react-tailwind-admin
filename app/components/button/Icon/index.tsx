import Button from '@/src/components/Button'
import Card from '@/src/components/Card'
import CardHeader from '@/src/components/Card/CardHeader'
import CardBody from '@/src/components/Card/CardBody'
import { HomeIcon, BellAlertIcon } from '@heroicons/react/24/solid'

const Icon = () => {
  return (
    <Card>
      <CardHeader>Icon</CardHeader>
      <CardBody className='flex gap-4 flex-wrap'>
        <Button prefix={<HomeIcon />} variant='text'>
          Prefix
        </Button>
        <Button suffix={<BellAlertIcon />} variant='text'>
          Suffix
        </Button>
        <Button prefix={<HomeIcon />} variant='outlined'>
          Prefix
        </Button>
        <Button suffix={<BellAlertIcon />} variant='outlined'>
          Suffix
        </Button>
        <Button prefix={<HomeIcon />} variant='contained'>
          Prefix
        </Button>
        <Button suffix={<BellAlertIcon />} variant='contained'>
          Suffix
        </Button>
      </CardBody>
    </Card>
  )
}

export default Icon
