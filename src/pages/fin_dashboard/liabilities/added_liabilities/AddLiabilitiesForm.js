import React from 'react'
import { Input } from 'reactstrap';

const AddLiabilitiesForm = ({ closeLiabilities }) => {
    return (
        <tr>
            <td>1</td>
            <td>
                <select name="" id="" className='form-select'>
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
            </td>
            <td>
                <Input type="text" className="form-control" id="income" placeholder='Amount' />

            </td>
            <td>
                <Input type="text" className="form-control" id="income" placeholder='Yearly Interest rate' />
            </td>
            <td>0</td>
            <td>
                <Input type="date" className="form-control" id="Started Date" />
            </td>
            <td>
                <Input type="text" className="form-control" id="Yearly-raise" placeholder='Tenure Months' />
            </td>
            <td>0</td>
            <td>0</td>
            <td>
                <button className='addedLoans_add__btn'><i className="ri-add-circle-line"></i></button>
                <button className='addedIncome_close__btn' onClick={closeLiabilities}><i className="ri-close-fill"></i></button>
            </td>
        </tr>
    )
}

export default AddLiabilitiesForm;