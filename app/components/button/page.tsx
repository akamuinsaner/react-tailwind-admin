import Basic from './Basic'
import Variants from './Variants'
import Color from './Color'
import Size from './Size'
import Icon from './Icon'
import Grouped from './Grouped'
import Box from '@/src/components/Box'

const ButtonPage = () => {
  return (
    <Box className='flex flex-col gap-6'>
      <Basic />
      <Variants />
      <Color />
      <Size />
      <Icon />
      <Grouped />
    </Box>
  )
}

export default ButtonPage
