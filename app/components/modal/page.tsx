import Basic from './Basic/index'
import Sizes from './Sizes'
import Closable from './Closable'
import Confirms from './Confirms'
import CloseIcon from './CloseIcon'
import Box from '@/src/components/Box'

const ModalPage = () => {
  return (
    <Box className='columns-1 xl:columns-2 gap-6'>
      <Basic />
      <Sizes />
      <Closable />
      <Confirms />
      <CloseIcon />
    </Box>
  )
}

export default ModalPage
