import React from 'react';
import { Input } from 'reactstrap';

const AddAssetsForm = ({ closeAssets }) => {
    return (
        <tr>
            <td>#</td>
            <td>
                <select name="" id="" className='form-select'>
                    <option value="">Investment Type</option>
                    <option value="Equity">Equity</option>
                    <option value="Fixed Income">Fixed Income</option>
                    <option value="Gold">Gold</option>
                    <option value="Cash">Cash</option>
                    <option value="Other">Other</option>
                </select>
            </td>
            <td>
                <select name="" id="" className='form-select'>
                    <option value="SIP">SIP</option>
                    <option value="Lumpsum">Lumpsum</option>
                </select>
            </td>
            <td>
                <Input type="text" className="form-control" id="income" placeholder='Amount' />
            </td>
            <td>0</td>
            <td>
                <button className='addedIncome_add__btn'><i className="ri-add-circle-line"></i></button>
                <button className='addedIncome_close__btn' onClick={closeAssets}><i className="ri-close-fill"></i></button>
            </td>
        </tr>
    )
}

export default AddAssetsForm;