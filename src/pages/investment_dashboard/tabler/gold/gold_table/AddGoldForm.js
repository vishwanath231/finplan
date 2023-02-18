import React from 'react'
import { Input } from 'reactstrap';

const AddGoldForm = ({ closeAddIncome }) => {
    return (
        <tr>
            <td>#</td>
            <td>
                <select name="" id="" className='form-select'>
                    <option value="">Segment</option>
                    <option value="Physical Gold">Physical Gold</option>
                    <option value="Mutual Funds">Mutual Funds</option>
                    <option value="Sovereign Gold Bonds">Sovereign Gold Bonds</option>
                </select>
            </td>
            <td>
                <Input type="text" className="form-control" id="allocation" placeholder='Allocation' />
            </td>
            <td>
                <select name="" id="" className='form-select'>
                    <option value="">Fund</option>
                    <option value="HDFC Gold">HDFC Gold</option>
                    <option value="Nippon India Gold Savings">Nippon India Gold Savings</option>
                    <option value="SBI Gold">SBI Gold</option>
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

export default AddGoldForm;