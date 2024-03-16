import Basic from './Basic/index'
import Sizes from './Sizes'
import Addons from './Addons'
import Variant from './Variant'
import Status from './Status'
import Password from './Password'
import Textareas from './Textarea'
import Count from './Count'
import Grouped from './Grouped'
import Box from '@/src/components/Box'

const InputPage = () => {
  return (
    <Box className='columns-1 xl:columns-2 gap-6'>
      <Basic />
      <Sizes />
      <Addons />
      <Variant />
      <Status />
      <Password />
      <Textareas />
      <Count />
      <Grouped />
    </Box>
  )
}

export default InputPage
