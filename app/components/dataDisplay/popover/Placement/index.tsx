import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Grid from '@/src/components/Grid';
import Popover from '@/src/components/Popover';

const Placement = () => {
    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Placement</CardHeader>
            <CardBody>
                <Grid
                    wrapper
                    rowGap='medium'
                    colGap='small'
                    className='w-[500px]'
                >
                    <Grid span={2} offset={2}>
                        <Popover
                            title='this is a top start prompt'
                            placement='top-start'
                        >
                            <Button className='w-full'>TS</Button>
                        </Popover>
                    </Grid>
                    <Grid span={2}>
                        <Popover title='this is a top prompt' placement='top'>
                            <Button className='w-full'>T</Button>
                        </Popover>
                    </Grid>
                    <Grid span={2}>
                        <Popover
                            title='this is a top end prompt'
                            placement='top-end'
                        >
                            <Button className='w-full'>TE</Button>
                        </Popover>
                    </Grid>
                    <Grid span={4}></Grid>
                    <Grid span={2}>
                        <Popover
                            title={
                                <span>
                                    this is a left
                                    <br />
                                    start prompt
                                </span>
                            }
                            placement='left-start'
                        >
                            <Button className='w-full'>LS</Button>
                        </Popover>
                    </Grid>
                    <Grid span={6}></Grid>
                    <Grid span={2}>
                        <Popover
                            title={
                                <span>
                                    this is a right
                                    <br />
                                    start prompt
                                </span>
                            }
                            placement='right-start'
                        >
                            <Button className='w-full'>RS</Button>
                        </Popover>
                    </Grid>
                    <Grid span={2}></Grid>
                    <Grid span={2}>
                        <Popover
                            title={
                                <span>
                                    this is a left
                                    <br />
                                    prompt
                                </span>
                            }
                            placement='left'
                        >
                            <Button className='w-full'>L</Button>
                        </Popover>
                    </Grid>
                    <Grid span={6}></Grid>
                    <Grid span={2}>
                        <Popover
                            title={
                                <span>
                                    this is a right
                                    <br />
                                    prompt
                                </span>
                            }
                            placement='right'
                        >
                            <Button className='w-full'>R</Button>
                        </Popover>
                    </Grid>
                    <Grid span={2}></Grid>
                    <Grid span={2}>
                        <Popover
                            title={
                                <span>
                                    this is a left
                                    <br />
                                    end prompt
                                </span>
                            }
                            placement='left-end'
                        >
                            <Button className='w-full'>LE</Button>
                        </Popover>
                    </Grid>
                    <Grid span={6}></Grid>
                    <Grid span={2}>
                        <Popover
                            title={
                                <span>
                                    this is a right
                                    <br />
                                    end prompt
                                </span>
                            }
                            placement='right-end'
                        >
                            <Button className='w-full'>RE</Button>
                        </Popover>
                    </Grid>
                    <Grid span={2}></Grid>
                    <Grid span={2} offset={2}>
                        <Popover
                            title='this is a bottom start prompt'
                            placement='bottom-start'
                        >
                            <Button className='w-full'>BS</Button>
                        </Popover>
                    </Grid>
                    <Grid span={2}>
                        <Popover
                            title='this is a bottom prompt'
                            placement='bottom'
                        >
                            <Button className='w-full'>B</Button>
                        </Popover>
                    </Grid>
                    <Grid span={2}>
                        <Popover
                            title='this is a bottom end prompt'
                            placement='bottom-end'
                        >
                            <Button className='w-full'>BE</Button>
                        </Popover>
                    </Grid>
                    <Grid span={4}></Grid>
                </Grid>
            </CardBody>
        </Card>
    );
};

export default Placement;
