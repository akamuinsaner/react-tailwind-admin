import Basic from './Basic/index'
import Size from './Size'
import Variant from './Variant'
import Status from './Status'
import Format from './Format'
import Mask from './Mask'
import Limit from './Limit'
import Box from '@/src/components/Box'

const DatePickerPage = () => {
  return (
    <Box className='columns-1 xl:columns-2 gap-6'>
      <Basic />
      <Size />
      <Variant />
      <Status />
      <Format />
      <Mask />
      <Limit />
    </Box>
  )
}

export default DatePickerPage
