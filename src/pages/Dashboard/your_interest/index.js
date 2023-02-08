import React from 'react'
import { Card, CardBody } from 'reactstrap'

const YourInterestDashboard = () => {
    return (
        <Card>
            <CardBody>
                <h4 className='mt-1 mb-3'>Your Interests</h4>
                <div className=''>
                    <button className='btn shadow m-2 text-success'>Gold</button>
                    <button className='btn shadow m-2 text-success'>Sovereign Gold Bonds</button>
                    <button className='btn shadow m-2 text-warning'>Tax Planning</button>
                    <button className='btn shadow m-2 text-warning'>Tax Filling</button>
                    <button className='btn shadow m-2 text-warning'>Tax On Interest</button>
                </div>
            </CardBody>
        </Card>
    )
}

export default YourInterestDashboard