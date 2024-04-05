import Columns from '@/src/components/Columns';
import Grid from '@/src/components/Grid';
import AnimateBox from './AnimateBox';

const FadeInList = [
    'animate-fadeIn',
    'animate-fadeInUp',
    'animate-fadeInDown',
    'animate-fadeInLeft',
    'animate-fadeInRight',
];
const FadeOutList = [
    'animate-fadeOut',
    'animate-fadeOutUp',
    'animate-fadeOutDown',
    'animate-fadeOutLeft',
    'animate-fadeOutRight',
];

const BasicAnimations = () => {
    return (
        <Columns count={1} space='medium'>
            <Grid
                wrapper
                className='overflow-visible'
                colGap='medium'
                rowGap='medium'
            >
                {FadeInList.map(name => (
                    <AnimateBox name={`${name}`} />
                ))}
                {FadeOutList.map(name => (
                    <AnimateBox name={`${name}`} />
                ))}
            </Grid>
        </Columns>
    );
};

export default BasicAnimations;
