import React from 'react'
import { Card, CardBody } from 'reactstrap'

const FinancialObjDashboard = () => {
    return (
        <Card>
            <CardBody>
                <h4 className='mt-1 mb-3'>Financial Objectives</h4>
                <div className=''>
                    <button className='btn btn-primary m-2'>Debt-free life</button>
                    <button className='btn btn-primary m-2'>Paying of loan</button>
                    <button className='btn btn-primary m-2'>Become a entrepreneur</button>
                    <button className='btn btn-primary m-2'>Down payment on a house</button>
                    <button className='btn btn-primary m-2'>Maintain healthy lifestyle</button>
                </div>
            </CardBody>
        </Card>
    )
}

export default FinancialObjDashboard;