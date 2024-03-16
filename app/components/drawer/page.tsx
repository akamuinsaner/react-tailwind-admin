import Box from '@/src/components/Box'
import Basic from './Basic/index'
import Placement from './Placement'
import Size from './Size'

const ModalPage = () => {
    return (
        <Box className='columns-1 xl:columns-2 gap-6'>
            <Basic />
            <Placement />
            <Size />
        </Box>
    )
}

export default ModalPage
