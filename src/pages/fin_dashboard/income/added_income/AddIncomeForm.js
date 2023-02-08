import React from 'react'
import { Input } from 'reactstrap';

const AddIncomeForm = ( { closeAddIncome }) => {
    return (

        <tr>
            <td>#</td>
            <td>
                <select name="" id="" className='form-select'>
                    <option value="Salary">Salary</option>
                    <option value="Self Employed">Self Employed</option>
                    <option value="Professional">Professional</option>
                    <option value="Bonus">Bonus</option>
                    <option value="Rental">Rental</option>
                    <option value="Interest">Interest</option>
                    <option value="Commission">Commission</option>
                    <option value="Pension">Pension</option>
                    <option value="Royalty">Royalty</option>
                    <option value="Consulting">Consulting</option>
                    <option value="Other">Other</option>
                </select>
            </td>
            <td>
                <select name="" id="" className='form-select'>
                    <option value="Monthly">Monthly</option>
                    <option value="Quarterly">Quarterly</option>
                    <option value="Half Yearly">Half Yearly</option>
                    <option value="Yearly">Yearly</option>
                    <option value="One Time">One Time</option>
                </select>
            </td>
            <td>
                <Input type="text" className="form-control" id="income" placeholder='Income' />
            </td>
            <td>0</td>
            <td>
                <button className='addedIncome_add__btn'><i className="ri-add-circle-line"></i></button>
                <button className='addedIncome_close__btn' onClick={closeAddIncome}><i className="ri-close-fill"></i></button>
            </td>
        </tr>
    )
}

export default AddIncomeForm;