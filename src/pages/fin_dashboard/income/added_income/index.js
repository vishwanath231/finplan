import React, { useEffect, useState } from 'react';
import './added_income.css';
import { Card, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, Input, Label, UncontrolledDropdown } from 'reactstrap';
import ReactApexChart from "react-apexcharts";
import AddIncomeForm from './AddIncomeForm'


const AddedIncome = () => {

    const [showAddIncome, setShowAddIncome] = useState(false)
    const [showUpdate, setShowUpdate] = useState(0)

    const addIncomeHandler = () => setShowAddIncome(true);
    const closeAddIncome = () => setShowAddIncome(false);


   const [data, setData] = useState([
    {
        id: 1,
        income_source: 'Salary',
        interval: 'Monthly',
        amount: 420000,
        per_annual: 5040000
    },
    {
        id: 2,
        income_source: 'Self Employed',
        interval: 'Queaterly',
        amount: 300000,
        per_annual: 300000
    },
    {
        id: 3,
        income_source: 'Professional',
        interval: 'Half Yearly',
        amount: 2800000,
        per_annual: 2800000
    },
    {
        id: 4,
        income_source: 'Bonus',
        interval: 'Yearly',
        amount: 1000000,
        per_annual: 1000000
    }
   ])

    const [updateData, setUpdateData] = useState({
        income_source: '',
        interval: '',
        income: '',
        yearly_raise: ''
    })

    const incomeUpdate = (id) => {
        setShowUpdate(id);    
    }

  
    const updateHandleChange = (e) => {
        const { name, value } = e.target;

        setUpdateData({
            ...updateData,
            [name]: value
        })
    }


    const submitHandler = (e) => {
        e.preventDefault();

        console.log(updateData);
    }



    return (
            <div className='card'>
                <div className="card-body">
                    <div className='added_income_header'>
                        <div className='h4'>
                            Income
                        </div>
                        <div>
                            <button className='added_income_btn' onClick={addIncomeHandler}>
                                <span>
                                    <i className="ri-add-circle-line addedIncome_add__btnIcon"></i>
                                </span>
                                Add Income
                            </button>
                        </div>
                    </div>

                    <div className='added_income'>
                        <form action="" onSubmit={submitHandler}>
                            <table className='added_income_table' >
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Income Source</th>
                                        <th>Interval</th>
                                        <th>Amount</th>
                                        <th>Per Annual</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <React.Fragment>
                                        {
                                            showAddIncome &&
                                                <AddIncomeForm closeAddIncome={closeAddIncome} />
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
                                                                <select name="income_source" id="" defaultValue={val.income_source} onChange={updateHandleChange} className='form-select'>
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
                                                                : val.income_source
                                                        }
                                                    </td>
                                                    <td>
                                                        {
                                                            val.id === showUpdate ?

                                                                <select name="interval" id="" defaultValue={val.interval} onChange={updateHandleChange} className='form-select'>
                                                                    <option value="Monthly">Monthly</option>
                                                                    <option value="Quarterly">Quarterly</option>
                                                                    <option value="Half Yearly">Half Yearly</option>
                                                                    <option value="Yearly">Yearly</option>
                                                                    <option value="One Time">One Time</option>
                                                                </select>

                                                                : val.interval
                                                        }
                                                    </td>
                                                    <td>
                                                        {
                                                            val.id === showUpdate ?
                                                                <Input 
                                                                    type="text" 
                                                                    className="form-control" 
                                                                    name='income' 
                                                                    id="income" 
                                                                    onChange={updateHandleChange}
                                                                    value={val.amount}  
                                                                    placeholder='Income' 
                                                                />
                                                                : val.amount
                                                        }
                                                    </td>
                                                    <td>{val.per_annual}</td>
                                                    <td>
                                                        {
                                                            val.id === showUpdate ?
                                                                <div>
                                                                    <button type={val.id === showUpdate ? 'submit' : 'button'} className='btn'><i className="ri-check-line text-success h4"></i></button>
                                                                    <div className='btn' onClick={() => setShowUpdate(0)}><i className="ri-close-line text-danger h4"></i></div>
                                                                </div>
                                                                :
                                                                <div>
                                                                    <div className='btn' onClick={() => incomeUpdate(val.id)}><i className="ri-edit-line h5 text-primary"></i></div>
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
                        </form>
                    </div>
                </div>
            </div>

    )
}

export default AddedIncome;



