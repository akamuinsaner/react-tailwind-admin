import Basic from './Basic'
import Status from './Status'
import Indeterminate from './Indeterminate'
import Disabled from './Disabled'
import Controlled from './Controlled'
import Box from '@/src/components/Box'

const CheckboxPage = () => {
  return (
    <Box className='columns-1 xl:columns-2 gap-3'>
      <Basic />
      <Status />
      <Indeterminate />
      <Disabled />
      <Controlled />
    </Box>
  )
}

export default CheckboxPage
