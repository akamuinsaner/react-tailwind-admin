import Basic from './Basic/index'
import Box from '@/src/components/Box'
import Size from './Sizes'
import Variants from './Variants'
import Colors from './Colors'
import Shapes from './Shapes'
import SizeOption from './SizeOption'

const InputPage = () => {
    return (
        <Box className='columns-1 xl:columns-2 gap-6'>
            <Basic />
            <Size />
            <Variants />
            <Colors />
            <Shapes />
            <SizeOption />
        </Box>
    )
}

export default InputPage
