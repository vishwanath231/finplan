import React from 'react'
import { Input } from 'reactstrap';

const AddCashForm = ({ closeAddIncome }) => {
    return (
        <tr>
            <td>#</td>
            <td>
                <Input type="text" className="form-control" id="allocation" placeholder='Segment' />

            </td>
            <td>
                <Input type="text" className="form-control" id="allocation" placeholder='Allocation' />
            </td>
            
            <td>
                <select name="" id="" className='form-select'>
                    <option value="">Fund</option>
                    <option value="Savings Account">Savings Account</option>
                    <option value="Current Account">Current Account</option>
                </select>
            </td>
            <td>0</td>
            <td>0</td>
            <td>
                <button className='' style={{color:'green', border: '0', background: 'none', fontSize: '1rem'}}>
                    <i className="ri-add-circle-line"></i>
                    </button>
                <button className='btn' onClick={closeAddIncome} style={{ color: 'red', border: '0', background: 'none', fontSize: '1.1rem' }}>
                    <i className="ri-close-fill"></i>
                    </button>
            </td>
        </tr>
    )
}

export default AddCashForm;