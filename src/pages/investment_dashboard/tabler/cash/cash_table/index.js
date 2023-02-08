import React, { useState } from 'react';
import './invest_cashTable.css';
import ReactApexChart from "react-apexcharts";
import { Input } from 'reactstrap';
import AddCashForm from './AddCashForm';

const InvestCashTable = () => {

    const [showAddIncome, setShowAddIncome] = useState(false)

    const addIncomeHandler = () => setShowAddIncome(true);
    const closeAddIncome = () => setShowAddIncome(false);


    const [data, setData] = useState([
        {
            id: "1",
            asset: "Cash",
            allocation: 100,
            segment: "",
            fund: "Current Account",
            lumpsum: 2664529,
            sip: 21421,
        },
        {
            id: "2",
            asset: "Cash",
            allocation: 0,
            segment: "",
            fund: "Savings Account",
            lumpsum: 0,
            sip: 0,
        },
    ]);




    return (
        <div className='card'>
            <div className="card-body">
                <div className='added_income_header'>
                    <div className='h4'>
                        Cash
                    </div>
                    <div>
                        <button className='added_income_btn' onClick={addIncomeHandler}>
                            <span>
                                <i className="ri-add-circle-line addedIncome_add__btnIcon"></i>
                            </span>
                            Add Cash
                        </button>
                    </div>
                </div>

                <div className='added_income'>
                    <table className='added_income_table' >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Assets</th>
                                <th>Allocation</th>
                                {/* <th>Segment</th> */}
                                <th>Fund</th>
                                <th>Lumpsum</th>
                                <th>SIP</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <React.Fragment>
                                {
                                    showAddIncome &&
                                    <AddCashForm closeAddIncome={closeAddIncome} />
                                }
                            </React.Fragment>
                            {
                                data.map((val) => (
                                    <React.Fragment key={val.id}>
                                        <tr className='text-muted'>
                                            <td>{val.id}</td>
                                            <td>{val.asset}</td>
                                            <td>{val.allocation}</td>
                                            {/* <td>{val.segment}</td> */}
                                            <td>{val.fund}</td>
                                            <td>{val.lumpsum}</td>
                                            <td>{val.sip}</td>
                                            <td>
                                                <button className='addedIncome_edit__btn'><i className="ri-edit-line"></i></button>
                                                <button className='addedIncome_delete__btn'><i className="ri-delete-bin-line"></i></button>
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

export default InvestCashTable;



