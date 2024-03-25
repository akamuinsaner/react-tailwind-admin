import Basic from './Basic/index'
import Size from './Sizes'
import Variants from './Variants'
import Colors from './Colors'
import Shapes from './Shapes'
import SizeOption from './SizeOption'
import Columns from '@/src/components/Columns'

const InputPage = () => {
    return (
        <Columns
            count={1}
            gap='medium'
            space='medium'
            className='max-w-[1200px] mx-auto'
        >
            <Basic />
            <Size />
            <Variants />
            <Colors />
            <Shapes />
            <SizeOption />
        </Columns>
    )
}

export default InputPage
