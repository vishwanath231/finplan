import React, { useEffect, useState } from 'react';
import './added_expense.css';
import { Card, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, Input, Label, UncontrolledDropdown } from 'reactstrap';
import ReactApexChart from "react-apexcharts";
import AddExpenseForm from './AddExpenseForm';
 

const AddedExpense = () => {

    const [showAddExpense, setShowAddExpense] = useState(false)
    const [showUpdate, setShowUpdate] = useState(0)

    const addExpenseHandler = () => setShowAddExpense(true);
    const closeAddExpense = () => setShowAddExpense(false);

   const [data, setData] = useState([
    {
        id: 1,
        expenses: 'Education',
        priority: 'Need',
        expense_after_retir: 'N',
        c: '0.00%',
        interval: 'Yearly',
        amount: 500000,
        per_annual: 500000,
        per_annual_ret: 0
    },
    {
        id: 2,
        expenses: 'Medical',
        priority: 'Need',
        expense_after_retir: 'Y',
        c: '20.00%',
        interval: 'Monthly',
        amount: 10000,
        per_annual: 120000,
        per_annual_ret: 144000
    },
    {
        id: 3,
        expenses: 'Entertainment',
        priority: 'Desire',
        expense_after_retir: 'Y',
        c: '0.00%',
        interval: 'Half Yearly',
        amount: 200000,
        per_annual: 400000,
        per_annual_ret: 400000
    },
    {
        id: 4,
        expenses: 'Life Style',
        priority: 'Desire',
        expense_after_retir: 'Y',
        c: '0.00%',
        interval: 'Monthly',
        amount: 100000,
        per_annual: 120000,
        per_annual_ret: 120000
    },
    {
        id: 5,
        expenses: 'Household',
        priority: 'Need',
        expense_after_retir: 'Y',
        c: '-10.00%',
        interval: 'Monthly',
        amount: 100000,
        per_annual: 1200000,
        per_annual_ret: 1080000
    },

   ])

    const expenseUpdate = (id) => {
        setShowUpdate(id);
    }




    return (
            <div className='card'>
                <div className="card-body">
                    <div className='added_income_header'>
                        <div className='h4'>
                            Expenses
                        </div>
                        <div>
                        <button className='added_income_btn' onClick={addExpenseHandler}>
                                <span>
                                    <i className="ri-add-circle-line addedIncome_add__btnIcon"></i>
                                </span>
                                Add Expense
                            </button>
                        </div>
                    </div>

                    <div className='added_income'>
                        <table className='added_income_table' >
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Expense Source</th>
                                    <th>Priority</th>
                                    <th>Expense After Retir</th>
                                    <th>%c</th>
                                    <th>Interval</th>
                                    <th>Amount</th>
                                    <th>Per Annual</th>
                                    <th>Per Annual (Ret)</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>

                            <React.Fragment>
                                {
                                    showAddExpense &&
                                    <AddExpenseForm closeAddExpense={closeAddExpense} />
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
                                                                <select name="" id="" className='form-select' defaultValue={val.expenses}>
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
                                                            : val.expenses
                                                    }
                                                </td>
                                                <td>
                                                    {
                                                        val.id === showUpdate ?
                                                            <select name="" id="" className='form-select' defaultValue={val.priority}>
                                                                <option value="">Priority</option>
                                                                <option value="Need">Need</option>
                                                                <option value="Dream">Dream</option>
                                                                <option value="Desire">Desire &nbsp; &nbsp;</option>
                                                            </select>
                                                        : val.priority
                                                    }
                                                </td>
                                                <td>
                                                    {
                                                        val.id === showUpdate ?
                                                            <select name="" id="" className='form-select' defaultValue={val.expense_after_retir}>
                                                                <option value="">Expense After Retir</option>
                                                                <option value="Y">Yes</option>
                                                                <option value="N">No</option>
                                                            </select>
                                                        : val.expense_after_retir
                                                    }
                                                </td>
                                                <td>
                                                    {
                                                        val.id === showUpdate ?
                                                            <Input type="text" className="form-control" id="income" value={val.c} placeholder='%C' />
                                                        : val.c
                                                    }
                                                </td>
                                                <td>
                                                    {
                                                        val.id === showUpdate ?
                                                            <select name="" id="" className='form-select' defaultValue={val.interval}>
                                                                <option value="">Interval</option>
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
                                                            <Input type="text" className="form-control" id="income" value={val.amount} placeholder='Amount' />
                                                        : val.amount
                                                    }
                                                </td>
                                                <td>{val.per_annual}</td>
                                                <td>{val.per_annual_ret}</td>
                                                <td>
                                                    {
                                                        val.id === showUpdate ?
                                                            <div>
                                                                <button type={val.id === showUpdate ? 'submit' : 'button'} className='btn'><i className="ri-check-line text-success h4"></i></button>
                                                                <div className='btn' onClick={() => setShowUpdate(0)}><i className="ri-close-line text-danger h4"></i></div>
                                                            </div>
                                                            :
                                                            <div>
                                                                <div className='btn' onClick={() => expenseUpdate(val.id)}><i className="ri-edit-line h5 text-primary"></i></div>
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

export default AddedExpense;



