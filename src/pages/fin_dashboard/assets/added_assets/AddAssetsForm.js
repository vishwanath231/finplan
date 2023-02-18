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
                    <option value="PF/EPFO">PF/EPFO</option>
                    <option value="Other">Other</option>
                </select>
            </td>
            <td>
                <select name="" id="" className='form-select'>
                    <option value="">Sub Category</option>
                    <option value="Large Cap">Large Cap</option>
                    <option value="Mid Cap">Mid Cap</option>
                    <option value="Samll Cap">Samll Cap</option>
                    <option value="Equity Mutual Funds">Equity Mutual Funds</option>
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