import Basic from './Basic'
import Severity from './Severity'
import Icon from './Icon'
import Type from './Type'
import Accent from './Accent'
import Action from './Action'
import Box from '@/src/components/Box'

const AlertPage = () => {
  return (
    <Box className='columns-1 xl:columns-2'>
      <Basic />
      <Severity />
      <Icon />
      <Type />
      <Accent />
      <Action />
    </Box>
  )
}

export default AlertPage
