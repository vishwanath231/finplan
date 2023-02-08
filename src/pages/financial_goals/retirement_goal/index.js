import { Grid } from '@mui/material';
import React from 'react'
import { Card, CardBody, Container } from 'reactstrap';
import CountUp from "react-countup";


const RetirementGoalPlanning = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <Grid container spacing={5}>
                        <Grid item lg={4}>
                            <Card>
                                <CardBody className='text-center rounded-3' style={{ background: '#e07a5f' }}>
                                    <h2 className='h5 text-white mb-4'>No Of Months Required </h2>
                                    <div className='h4 text-white'>
                                        <CountUp
                                            start={0}
                                            // prefix='₹'
                                            // suffix='k'
                                            // separator={','}
                                            end={300}
                                            // decimals={2}
                                            duration={1}
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Grid>
                        <Grid item lg={4}>
                            <Card>
                                <CardBody className='text-center rounded-3'  style={{ background: '#3d405b'}}>
                                    <h2 className='h5 text-white mb-4'>Present Expenses </h2>
                                    <div className='h4 text-white'>
                                        <CountUp
                                            start={0}
                                            prefix='₹'
                                            // suffix='k'
                                            separator={','}
                                            end={36162}
                                            decimals={2}
                                            duration={1}
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Grid>
                        <Grid item lg={4}>
                            <Card>
                                <CardBody className='text-center rounded-3' style={{ background: '#81b29a' }}>
                                    <h2 className='h5 text-white mb-4'>Monthly Expense @ Retirement </h2>
                                    <div className='h4 text-white'>
                                        <CountUp
                                            start={0}
                                            prefix='₹'
                                            // suffix='k'
                                            separator={','}
                                            end={277943}
                                            decimals={2}
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
                                            end={73668354}
                                            decimals={2}
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

export default RetirementGoalPlanning;