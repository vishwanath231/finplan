import React, { useEffect, useState } from 'react';
import './added_assets.css';
import { Card, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, Input, Label, UncontrolledDropdown } from 'reactstrap';
import ReactApexChart from "react-apexcharts";
import AddAssetsForm from './AddAssetsForm';
 

const AddedAssets = () => {

    const [showAddAssets, setShowAddAssets] = useState(false)
    const [showUpdate, setShowUpdate] = useState(0)

    const addAssetsHandler = () => setShowAddAssets(true);
    const closeAssets = () => setShowAddAssets(false);

   const [data, setData] = useState([
    {
        id: 1,
        investment_type: 'Equity',
        interval: 'Lumpsum',
        amount: 1310000,
        annum_amount: 1310000,
    },
    {
        id: 2,
        investment_type: 'Fixed Income',
        interval: 'Lumpsum',
        amount: 28000000,
        annum_amount: 28000000,
    },
    {
        id: 3,
        investment_type: 'Gold',
        interval: 'Lumpsum',
        amount: 0,
        annum_amount: 0,
    },
    {
        id: 4,
        investment_type: 'Cash',
        interval: 'SIP',
        amount: 0,
        annum_amount: 0,
    },
    {
        id: 5,
        investment_type: 'PF/EPFO',
        interval: 'Lumpsum',
        amount: 1500000,
        annum_amount: 1500000,
    },

    
   ])


    const assetsUpdate = (id) => {
        setShowUpdate(id);
    }


    return (
            <div className='card'>
                <div className="card-body">
                    <div className='added_income_header'>
                        <div className='h4'>
                            Assets
                        </div>
                        <div>
                            <button className='added_income_btn' onClick={addAssetsHandler}>
                                <span>
                                    <i className="ri-add-circle-line addedIncome_add__btnIcon"></i>
                                </span>
                                Add Assets
                            </button>
                        </div>
                    </div>

                    <div className='added_income'>
                        <table className='added_income_table' >
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Investment Type</th>
                                    <th>Interval</th>
                                    <th>Amount</th>
                                    <th>Per Annum Amount</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                            <React.Fragment>
                                {
                                    showAddAssets &&
                                    <AddAssetsForm closeAssets={closeAssets} />
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
                                                            <select name="" id="" className='form-select' defaultValue={val.investment_type}>
                                                                <option value="">Investment Type</option>
                                                                <option value="Equity">Equity</option>
                                                                <option value="Fixed Income">Fixed Income</option>
                                                                <option value="Gold">Gold</option>
                                                                <option value="Cash">Cash</option>
                                                                <option value="Other">Other</option>
                                                            </select>
                                                            : val.investment_type
                                                    }
                                                </td>
                                                <td>
                                                    {
                                                        val.id === showUpdate ?
                                                            <select name="" id="" className='form-select' defaultValue={val.interval}>
                                                                <option value="">Interval</option>
                                                                <option value="SIP">SIP</option>
                                                                <option value="Lumpsum">Lumpsum</option>
                                                            </select>
                                                        : val.interval
                                                    }
                                                </td>

                                                {/* <td>{val.amount}</td> */}
                                                <td>
                                                    {
                                                        val.id === showUpdate ?
                                                            <Input type="text" className="form-control" id="income" value={val.amount} placeholder='Amount' />
                                                        : val.amount
                                                    }
                                                </td>

                                                <td>{val.annum_amount}</td>
                                                <td>
                                                    {
                                                        val.id === showUpdate ?
                                                            <div>
                                                                <button type={val.id === showUpdate ? 'submit' : 'button'} className='btn'><i className="ri-check-line text-success h4"></i></button>
                                                                <div className='btn' onClick={() => setShowUpdate(0)}><i className="ri-close-line text-danger h4"></i></div>
                                                            </div>
                                                        :
                                                            <div>
                                                                <div className='btn' onClick={() => assetsUpdate(val.id)}><i className="ri-edit-line h5 text-primary"></i></div>
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

export default AddedAssets;



