import Box from "@/src/components/Box"
import Card from "@/src/components/Card"
import CardBody from "@/src/components/Card/CardBody"
import CardHeader from "@/src/components/Card/CardHeader"
import Flex from "@/src/components/Flex"
import Image from "next/image";
import Avatar from './profile-thumbnail.png';
import Text from '@/src/components/Text';

export default () => {
    return (
        <Card>
            <CardHeader>Testimonial</CardHeader>
            <CardBody>
                <Box
                    style={{
                        width: '340px',
                        padding: '24px',
                        borderRadius: '8px',
                        background: '#fff',
                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                        margin: 'auto'
                    }}
                >
                    <Flex
                        style={{
                            marginBottom: '16px'
                        }}
                    >
                        <Image
                            alt=""
                            src={Avatar}
                            style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '48px',
                                marginRight: '16px'
                            }}
                        />
                        <Box>
                            <Text
                                style={{
                                    lineHeight: '28px',
                                    fontSize: '18px',
                                    color: '#171717'
                                }}
                            >Sarah Dole</Text>
                            <Text
                                style={{
                                    lineHeight: '20px',
                                    fontSize: '14px',
                                    color: '#525252'
                                }}
                            >
                                @sarahdole
                            </Text>
                        </Box>
                    </Flex>
                    <Box
                        style={{
                            lineHeight: '24px',
                            fontSize: '16px',
                            color: '#525252'
                        }}
                    >
                        I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!
                    </Box>
                </Box>
            </CardBody>
        </Card>
    )
}