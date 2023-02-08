import React from 'react'
import { Container } from 'reactstrap'
import SavingsOverview from './savings_overview';

const Savings = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <div className="card">
                        <div className="card-body">
                            <h2>Savings</h2>
                        </div>
                    </div>
                    <SavingsOverview />
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Savings;