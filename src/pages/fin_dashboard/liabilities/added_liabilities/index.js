import React, { useEffect, useState } from 'react';
import './added_liabilities.css';
import { Card, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, Input, Label, UncontrolledDropdown } from 'reactstrap';
import ReactApexChart from "react-apexcharts";
import AddLiabilitiesForm from './AddLiabilitiesForm';
 

const AddedLiabilities = () => {

    const [showAddLiabilities, setShowAddLiabilities] = useState(false)
    const [showUpdate, setShowUpdate] = useState(0)

    const addLiabilitiesHandler = () => setShowAddLiabilities(true);
    const closeLiabilities = () => setShowAddLiabilities(false);

   const [data, setData] = useState([
    {
        id: 1,
        loan_type: 'Personal Loan',
        amount: 6400000,
        yearly_interest_rate: '9.00%',
        start_date: '10-Aug-2021',
        tenure_months: 52,
        emi: 149088 
    },
    {
        id: 2,
        loan_type: 'Car Loan',
        amount: 120000,
        monthly_interest_rate: '0.58%',
        start_date: '10-Aug-2021',
        tenure_months: 16,
        emi: 0
    },
    {
        id: 3,
        loan_type: 'Education Loan',
        amount: 30000,
        yearly_interest_rate: '5%',
        start_date: '10-Aug-2021',
        tenure_months: 52,
        emi: 199088
    },
    {
        id: 4,
        loan_type: 'Education Loan',
        amount: 50000,
        yearly_interest_rate: '15%',
        start_date: '10-Aug-2021',
        tenure_months: 52,
        emi: 199088
    },

   ])


    const liabilitiesUpdate = (id) => {
        setShowUpdate(id);
    }

    return (
            <div className='card'>
                <div className="card-body">
                    <div className='added_income_header'>
                        <div className='h4'>
                            Liabilities
                        </div>
                        <div>
                        <button className='added_income_btn' onClick={addLiabilitiesHandler}>
                                <span>
                                    <i className="ri-add-circle-line addedIncome_add__btnIcon"></i>
                                </span>
                                Add Liability
                            </button>
                        </div>
                    </div>

                    <div className='added_income'>
                        <table className='added_income_table' >
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Loan type</th>
                                    <th>Amount</th>
                                    <th>Yearly Interest Rate</th>
                                    <th>Start Date</th>
                                    <th>Tenure Months</th>
                                    <th>EMI</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <React.Fragment>
                                    {
                                        showAddLiabilities &&
                                        <AddLiabilitiesForm closeLiabilities={closeLiabilities} />
                                    }
                                </React.Fragment>

                                {
                                    data.map((val) => (
                                        <React.Fragment key={val.id}>
                                            <tr className='text-muted'>
                                                <td>{val.id}</td>
                                                <td>
                                                    {
                                                        val.id === showUpdate ?
                                                            <select name="" id="" className='form-select' defaultValue={val.loan_type}>
                                                                <option value="">Loan Type</option>
                                                                <option value="Personal Loan">Personal Loan</option>
                                                                <option value="Home Loan">Home Loan</option>
                                                                <option value="BoCar Loannus">Car Loan</option>
                                                                <option value="Loan on Credit Card">Loan on Credit Card</option>
                                                                <option value="Education Loan">Education Loan</option>
                                                                <option value="Loan against Mutual funds or Shares">Loan against Mutual funds or Shares</option>
                                                                <option value="Loan against Fixed Deposite">Loan against Fixed Deposite</option>
                                                                <option value="Loan against Life Insurance">Loan against Life Insurance</option>
                                                                <option value="Loan against Property">Loan against Property</option>
                                                                <option value="Gold Loan">Gold Loan</option>
                                                                <option value="Loan from PPF">Loan from PPF</option>
                                                                <option value="Loan for small Business">Loan for small Business</option>
                                                                <option value="Vehicle Loan">Vehicle Loan</option>
                                                                <option value="Others">Others</option>
                                                            </select>
                                                            : val.loan_type
                                                    }
                                                </td>
                                                <td>
                                                    {
                                                        val.id === showUpdate ?
                                                            <Input type="text" className="form-control" id="income" value={val.amount} placeholder='Amount' />
                                                        : val.amount
                                                    }
                                                </td>
                                                <td>
                                                    {
                                                        val.id === showUpdate ?
                                                            <Input type="text" className="form-control" id="income" value={val.yearly_interest_rate} placeholder='Interest rate' />
                                                       : val.yearly_interest_rate
                                                    }
                                                </td>
                                                <td>
                                                    {
                                                        val.id === showUpdate ?
                                                            <Input type="date" className="form-control" value={val.start_date} id="Started Date" />
                                                        : val.start_date
                                                    }
                                                </td>
                                                <td>
                                                    {
                                                        val.id === showUpdate ?
                                                            <Input type="text" className="form-control" id="Yearly-raise" value={val.tenure_months} placeholder='Tenure Months' />
                                                        : val.tenure_months
                                                    }
                                                </td>
                                                <td>{val.emi}</td>
                                                <td>
                                                    {
                                                        val.id === showUpdate ?
                                                            <div>
                                                                <button type={val.id === showUpdate ? 'submit' : 'button'} className='btn'><i className="ri-check-line text-success h4"></i></button>
                                                                <div className='btn' onClick={() => setShowUpdate(0)}><i className="ri-close-line text-danger h4"></i></div>
                                                            </div>
                                                            :
                                                            <div>
                                                                <div className='btn' onClick={() => liabilitiesUpdate(val.id)}><i className="ri-edit-line h5 text-primary"></i></div>
                                                                <div className='btn'><i className="ri-delete-bin-line h5 text-danger"></i></div>
                                                            </div>

                                                    }
                                                </td>
                                            </tr>
                                        </React.Fragment>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

    )
}

export default AddedLiabilities;



