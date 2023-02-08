import React from 'react'
import { Container } from 'reactstrap'
// import ChartCards from '../../Dashboard/card';
import AddedIncome from './added_income';
import IncomeOverview from './income_overview';

const Income = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    
                    <div className="card">
                        <div className="card-body">
                            <h2>Income</h2>
                        </div>
                    </div>

                    {/* <ChartCards /> */}
                    <IncomeOverview />
                    <AddedIncome />
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Income;