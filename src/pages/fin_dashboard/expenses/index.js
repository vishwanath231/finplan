import React from 'react'
import { Container } from 'reactstrap'
import AddedExpense from './added_expense';
import ExpensesOverview from './expense_overview';

const Expenses = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <div className="card">
                        <div className="card-body">
                            <h2>Expenses</h2>
                        </div>
                    </div>
                    <ExpensesOverview />
                    <AddedExpense />
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Expenses;