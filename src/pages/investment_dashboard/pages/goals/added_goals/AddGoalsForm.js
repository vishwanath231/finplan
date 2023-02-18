import React from 'react';
import { Input } from 'reactstrap';

const AddGoalsForm = ({ closeGoals }) => {
    return (
        <tr>
            <td>#</td>
            <td>
                <select name="" id="" className='form-select'>
                    <option value="">Investment Type</option>
                    <option value="House">House</option>
                    <option value="Child's Education">Child's Education</option>
                    <option value="Marriage">Marriage</option>
                    <option value="Retirement">Retirement</option>
                    <option value="Foreign Vacation">Foreign Vacation</option>
                    <option value="Car">Car</option>
                    <option value="Other">Other</option>
                </select>
            </td>
            <td>
                <Input type="text" className="form-control" id="income" placeholder='Current Cost' />
            </td>
            
            <td>
                <Input type="text" className="form-control" id="income" placeholder='Duration (in Years)' />
            </td>
            <td>
                <Input type="text" className="form-control" id="income" placeholder='Assets (Today)' />
            </td>
            <td>0</td>
            <td>0</td>
            <td>
                <button className='addedIncome_add__btn'><i className="ri-add-circle-line"></i></button>
                <button className='addedIncome_close__btn' onClick={closeGoals}><i className="ri-close-fill"></i></button>
            </td>
        </tr>
    )
}

export default AddGoalsForm;