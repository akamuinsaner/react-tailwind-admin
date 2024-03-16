import Box from '@/src/components/Box'
import Basic from './Basic/index'
import Densed from './Densed/index'
import Divided from './Divided/index'
import Icon from './Icon/index'
import User from './User/index'

const ListPage = () => {
  return (
    <Box className='columns-1 xl:columns-2 gap-6'>
      <Basic />
      <Densed />
      <Divided />
      <Icon />
      <User />
    </Box>
  )
}

export default ListPage
