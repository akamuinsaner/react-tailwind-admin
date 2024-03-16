import Basic from './Basic/index'
import Clear from './Clear'
import Sizes from './Sizes'
import Status from './Status'
import Variant from './Variant'
import Search from './Search'
import Multiple from './Multiple'
import TagLimit from './TagLimits'
import Box from '@/src/components/Box'

const SelectPage = () => {
  return (
    <Box className='columns-1 xl:columns-2 gap-6'>
      <Basic />
      <Clear />
      <Sizes />
      <Status />
      <Variant />
      <Search />
      <Multiple />
      <TagLimit />
    </Box>
  )
}

export default SelectPage
