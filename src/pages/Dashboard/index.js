import { Grid } from '@mui/material';
import React from 'react'
import { Container } from 'reactstrap'
import ChartCards from './card';
import CashFlowDashboard from './cash_flow';
import FinancialObjDashboard from './financial_obj';
import ProfileCardDashboard from './profile_card';
import SpeedometerDashboard from './speedometer';
import YourInterestDashboard from './your_interest';

const Dashboard = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <ChartCards />
                    <Grid container spacing={3} className='mt-2'>
                        <Grid item lg={8}>
                            <CashFlowDashboard />
                            {/* <YourInterestDashboard /> */}
                        </Grid>
                        <Grid item lg={4}>
                            <ProfileCardDashboard />
                            {/* <FinancialObjDashboard /> */}
                            <SpeedometerDashboard />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Dashboard;

