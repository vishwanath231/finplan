import React from 'react'
import { Input } from 'reactstrap';

const AddGoldForm = ({ closeAddIncome }) => {
    return (
        <tr>
            <td>#</td>
            <td>
                <select name="" id="" className='form-select'>
                    <option value="">Assets</option>
                    <option value="Equity">Equity</option>
                    <option value="Fixed Income">Fixed Income</option>
                    <option value="Cash">Cash</option>
                    <option value="Gold">Gold</option>
                </select>
            </td>
            <td>
                <Input type="text" className="form-control" id="allocation" placeholder='Allocation' />
            </td>
            <td>
                <Input type="text" className="form-control" id="allocation" placeholder='Segment' />
            </td>
            <td>
                <select name="" id="" className='form-select'>
                    <option value="">Fund</option>
                    <option value="ICICI Prudential Gilt Fund - Growth">ICICI Prudential Gilt Fund - Growth</option>
                    <option value="IDFC G Sec Fund - Invt Plan - Growth (Re-launched)">IDFC G Sec Fund - Invt Plan - Growth (Re-launched)</option>
                    <option value="SBI Magnum Gilt Fund - Growth">SBI Magnum Gilt Fund - Growth</option>
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