import React from 'react'
import { Input } from 'reactstrap';

const AddExpenseForm = ({ closeAddExpense }) => {
    return (
        <tr>
            <td>1</td>
            <td>
                <select name="" id="" className='form-select'>
                    <option value="">Expenses</option>
                    <option value="Grocery">Grocery</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Dining & Outing">Dining & Outing</option>
                    <option value="Transportation % Fuel">Transportation % Fuel</option>
                    <option value="Online Shopping">Online Shopping</option>
                    <option value="Education">Education</option>
                    <option value="Membership">Membership</option>
                    <option value="Personal Care">Personal Care</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Medical">Medical</option>
                    <option value="Life Insurance">Life Insurance</option>
                    <option value="Motor Insurance">Motor Insurance</option>
                    <option value="Hoildays">Hoildays</option>
                    <option value="Rent">Rent</option>
                    <option value="Household">Household</option>
                    <option value="Life Style">Life Style</option>
                    <option value="EMI">EMI</option>
                </select>
            </td>
            <td>
                <select name="" id="" className='form-select'>
                    <option value="">Priority</option>
                    <option value="Need">Need</option>
                    <option value="Dream">Dream</option>
                    <option value="Desire">Desire &nbsp; &nbsp;</option>
                </select>
            </td>
            <td>
                <select name="" id="" className='form-select'>
                    <option value="">Expense After Retir</option>
                    <option value="Y">Yes</option>
                    <option value="N">No</option>
                </select>
            </td>
            <td>
                <Input type="text" className="form-control" id="income" placeholder='%C' />
            </td>
            <td>
                <select name="" id="" className='form-select'>
                    <option value="">Interval</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Quarterly">Quarterly</option>
                    <option value="Half Yearly">Half Yearly</option>
                    <option value="Yearly">Yearly</option>
                    <option value="One Time">One Time</option>
                </select>
            </td>
            <td>
                <Input type="text" className="form-control" id="income" placeholder='Amount' />
            </td>
            <td>0</td>
            <td>0</td>
            <td>
                <button className='addedIncome_add__btn'><i className="ri-add-circle-line"></i></button>
                <button className='addedIncome_close__btn' onClick={closeAddExpense}><i className="ri-close-fill"></i></button>
            </td>
        </tr>
    )
}

export default AddExpenseForm;