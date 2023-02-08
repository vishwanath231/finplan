import React from 'react'
import { Container } from 'reactstrap'
// import ChartCards from '../../Dashboard/card';
import NetWorthOverview from './networth_overview';

const NetWorth = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <div className="card">
                        <div className="card-body">
                            <h2>Net Worth</h2>
                        </div>
                    </div>
                    {/* <ChartCards /> */}
                    <NetWorthOverview />
                </Container>
            </div>
        </React.Fragment>
    )
}

export default NetWorth;