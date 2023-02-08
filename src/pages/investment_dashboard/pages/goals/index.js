import React from 'react'
import { Container } from 'reactstrap';
import GoalsTable from '../../pages/goals/GoalsTable';
import GoalsChart from './GoalsChart';

const InvestmentGoals = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <div className='row'>
                        <div className="col-lg-8">
                            <GoalsTable />
                        </div>
                        <div className="col-lg-4">
                            <GoalsChart />
                        </div>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    )
}

                   
export default InvestmentGoals;