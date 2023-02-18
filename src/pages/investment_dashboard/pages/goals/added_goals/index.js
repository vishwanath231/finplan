import React, { useEffect, useState } from 'react';
import './added_goals.css';
import { Card, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, Input, Label, UncontrolledDropdown } from 'reactstrap';
import ReactApexChart from "react-apexcharts";
import AddGoalsForm from './AddGoalsForm';
 

const AddedGoals = () => {

    const [showAddGoals, setShowAddGoals] = useState(false)
    const [showUpdate, setShowUpdate] = useState(0)

    const addGoalsHandler = () => setShowAddGoals(true);
    const closeGoals = () => setShowAddGoals(false);

    const [data, setData] = useState([
        {
            id: 1,
            investment_type: "Retirement",
            current_cost: 2364000,
            time_requirement: 5,
            assets: 21610000,
            monthly_saving: 273076,
            monthly_step: 184900,
        },
        {
            id: 2,
            investment_type: "Child's Education",
            current_cost: 5000000,
            time_requirement: 4,
            assets: 4000000,
            monthly_saving: 5127,
            monthly_step: 3500,
        },
        {
            id: 3,
            investment_type: "Marriage",
            current_cost: 5000000,
            time_requirement: 8,
            assets: 2700000,
            monthly_saving: 12467,
            monthly_step: 8700,
        },
        {
            id: 4,
            investment_type: "Marriage",
            current_cost: 5000000,
            time_requirement: 12,
            assets: 2500000,
            monthly_saving: 5488,
            monthly_step: 3800,
        },
    ]);


    const assetsUpdate = (id) => {
        setShowUpdate(id);
    }


    return (
            <div className='card'>
                <div className="card-body">
                    <div className='added_income_header'>
                        <div className='h4'>
                            Goals
                        </div>
                        <div>
                        <button className='added_income_btn' onClick={addGoalsHandler}>
                                <span>
                                    <i className="ri-add-circle-line addedIncome_add__btnIcon"></i>
                                </span>
                                Add Goals
                            </button>
                        </div>
                    </div>

                    <div className='added_income'>
                        <table className='added_income_table' >
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Investment Type</th>
                                    <th>Current Cost</th>
                                    <th>Time to Requirement</th>
                                    <th>Assets (Today)</th>
                                    <th>Monthly Savings Needed</th>
                                    <th>Monthly with Step</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                            <React.Fragment>
                                {
                                    showAddGoals &&
                                    <AddGoalsForm closeGoals={closeGoals} />
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
                                                            : val.investment_type
                                                    }
                                                </td>
                                                <td>
                                                    {
                                                        val.id === showUpdate ?
                                                            <Input type="text" className="form-control" id="income" placeholder='Current Cost' />
                                                        : val.current_cost
                                                    }
                                                </td>
                                                <td>
                                                    {
                                                        val.id === showUpdate ?
                                                            <Input type="text" className="form-control" id="income" placeholder='Duration (in Years)' />
                                                        : val.time_requirement
                                                    }
                                                </td>
                                                <td>
                                                    {
                                                        val.id === showUpdate ?
                                                            <Input type="text" className="form-control" id="income" value={val.amount} placeholder='Amount' />
                                                        : val.monthly_saving
                                                    }
                                                </td>

                                                <td>{val.monthly_saving}</td>
                                                <td>{val.monthly_step}</td>
                                                <td>
                                                    {
                                                        val.id === showUpdate ?
                                                            <div className='d-flex'>
                                                                <button  className='btn'><i className="ri-check-line text-success h4"></i></button>
                                                                <div className='btn' onClick={() => setShowUpdate(0)}><i className="ri-close-line text-danger h4"></i></div>
                                                            </div>
                                                        :
                                                            <div className='d-flex'>
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

export default AddedGoals;



