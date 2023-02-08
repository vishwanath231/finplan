import { Grid } from '@mui/material';
import React from 'react'
import { Card, CardBody, Container } from 'reactstrap';
import CountUp from "react-countup";


const InvestmentPlanning = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <Grid container spacing={5}>
                        <Grid item lg={4}>
                            <Card>
                                <CardBody className='text-center rounded-3' style={{ background: '#e07a5f' }}>
                                    <h2 className='h5 text-white mb-4'>No Of Years to retirement </h2>
                                    <div className='h4 text-white'>
                                        <CountUp
                                            start={0}
                                            // prefix='₹'
                                            // suffix='k'
                                            // separator={','}
                                            end={35}
                                            // decimals={2}
                                            duration={1}
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Grid>
                        <Grid item lg={4}>
                            <Card>
                                <CardBody className='text-center rounded-3' style={{ background: '#3d405b' }}>
                                    <h2 className='h5 text-white mb-4'>Current Investments </h2>
                                    <div className='h4 text-white'>
                                        <CountUp
                                            start={0}
                                            prefix='₹'
                                            // suffix='k'
                                            separator={','}
                                            end={654000}
                                            // decimals={2}
                                            duration={1}
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Grid>
                        <Grid item lg={4}>
                            <Card>
                                <CardBody className='text-center rounded-3' style={{ background: '#81b29a' }}>
                                    <h2 className='h5 text-white mb-4'>Investment at Retirement Age </h2>
                                    <div className='h4 text-white'>
                                        <CountUp
                                            start={0}
                                            prefix='₹'
                                            // suffix='k'
                                            separator={','}
                                            end={6886396}
                                            // decimals={2}
                                            duration={1}
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Grid>
                        <Grid item lg={4}>
                            <Card>
                                <CardBody className='text-center rounded-3' style={{ background: '#bc4749' }}>
                                    <h2 className='h5 text-white mb-4'>Corpus Required @ Retirement </h2>
                                    <div className='h4 text-white'>
                                        <CountUp
                                            start={0}
                                            prefix='₹'
                                            // suffix='k'
                                            separator={','}
                                            end={74668354}
                                            // decimals={2}
                                            duration={1}
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Grid>
                        <Grid item lg={4}>
                            <Card>
                                <CardBody className='text-center rounded-3' style={{ background: '#457b9d' }}>
                                    <h2 className='h5 text-white mb-4'>Corpus Required with Investments </h2>
                                    <div className='h4 text-white'>
                                        <CountUp
                                            start={0}
                                            prefix='₹'
                                            // suffix='k'
                                            separator={','}
                                            end={76781354}
                                            // decimals={2}
                                            duration={1}
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Grid>
                        <Grid item lg={4}>
                            <Card>
                                <CardBody className='text-center rounded-3' style={{ background: '#0081a7' }}>
                                    <h2 className='h5 text-white mb-4'>No of Months in Retirement</h2>
                                    <div className='h4 text-white'>
                                        <CountUp
                                            start={0}
                                            // prefix='₹'
                                            // suffix='k'
                                            separator={','}
                                            end={420}
                                            // decimals={2}
                                            duration={1}
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Grid>
                        <Grid item lg={4}>
                            <Card>
                                <CardBody className='text-center rounded-3' style={{ background: '#463f3a' }}>
                                    <h2 className='h5 text-white mb-4'>Expected Return (Avg) </h2>
                                    <div className='h4 text-white'>
                                        <CountUp
                                            start={0}
                                            // prefix='₹'
                                            suffix='%'
                                            // separator={','}
                                            end={7}
                                            // decimals={2}
                                            duration={1}
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Grid>
                        <Grid item lg={4}>
                            <Card>
                                <CardBody className='text-center rounded-3' style={{ background: '#118ab2' }}>
                                    <h2 className='h5 text-white mb-4'>Required Monthly Saving </h2>
                                    <div className='h4 text-white'>
                                        <CountUp
                                            start={0}
                                            prefix='₹'
                                            // suffix='k'
                                            separator={','}
                                            end={33489}
                                            // decimals={2}
                                            duration={1}
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default InvestmentPlanning;