import Box from '@/src/components/Box';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Image from 'next/image';
import Cover from './spacejoy-YqFz7UMm8qE-unsplash.jpg';
import Flex from '@/src/components/Flex';
import Tag from '@/src/components/Tag';
import Text from '@/src/components/Text';

const BlogCard = () => {
    return (
        <Card>
            <CardHeader>Blog</CardHeader>
            <CardBody>
                <Box
                    style={{
                        width: '340px',
                        borderRadius: '8px',
                        background: '#fff',
                        boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
                        overflow: 'hidden',
                        margin: 'auto'
                    }}
                >
                    <Image
                        alt=""
                        src={Cover}
                        style={{
                            width: '100%'
                        }}
                    />
                    <Flex
                        direction='column'
                        align='start'
                        style={{
                            padding: '24px 16px'
                        }}
                    >
                        <Tag
                            style={{
                                padding: '2px 8px',
                                height: '24px',
                                borderRadius: '24px',
                                background: 'rgb(240,253,244)',
                                border: '1px solid rgb(187,247,208)',
                                color: '#15803D',
                                marginBottom: '8px'
                            }}
                        >Interior</Tag>
                        <Text
                            style={{
                                color: '#171717',
                                fontSize: '18px',
                                marginBottom: '12px',
                            }}
                        >
                            Top 5 Living Room Inspirations
                        </Text>
                        <Text
                            style={{
                                fontSize: '16px',
                                lineHeight: '24px',
                                color: '#525252',
                                marginBottom: '24px'
                            }}
                        >
                            Curated vibrants colors for your living, make it pop & calm in the same time.
                        </Text>
                        <Box
                            style={{
                                lineHeight: '24px',
                                fontSize: '16px',
                                color: '#4338CA'
                            }}
                        >
                            Read more 
                        </Box>
                    </Flex>
                </Box>
            </CardBody>
        </Card>
    );
};

export default BlogCard;
