import React, { useState } from 'react';
import './invest_goldTable.css';
import ReactApexChart from "react-apexcharts";
import { Input } from 'reactstrap';
import AddGoldForm from './AddGoldForm';


const InvestGoldTable = () => {

    const [showAddIncome, setShowAddIncome] = useState(false)

    const addIncomeHandler = () => setShowAddIncome(true);
    const closeAddIncome = () => setShowAddIncome(false);


    const [data, setData] = useState([
        {
            id: "1",
            asset: "Gold",
            allocation: 33,
            segment: "Physical",
            fund: "HDFC Gold",
            lumpsum: 513449,
            sip: 4935,
        },
        {
            id: "2",
            asset: "Gold",
            allocation: 33,
            segment: "Mutual Funds",
            fund: "Nippon Indian Gold Savings",
            lumpsum: 513449,
            sip: 4935,
        },
        {
            id: "3",
            asset: "Gold",
            allocation: 33,
            segment: "Sovergin Gold Bonds",
            fund: "SBI Gold",
            lumpsum: 513603,
            sip: 4937,
        },
    ]);




    return (
        <div className='card'>
            <div className="card-body">
                <div className='added_income_header'>
                    <div className='h4'>
                        Gold
                    </div>
                    <div>
                        <button className='added_income_btn' onClick={addIncomeHandler}>
                            <span>
                                <i className="ri-add-circle-line addedIncome_add__btnIcon"></i>
                            </span>
                            Add Gold
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
                                <th>Segment</th>
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
                                    <AddGoldForm closeAddIncome={closeAddIncome} />
                                }
                            </React.Fragment>
                            {
                                data.map((val) => (
                                    <React.Fragment key={val.id}>
                                        <tr className='text-muted'>
                                            <td>{val.id}</td>
                                            <td>{val.asset}</td>
                                            <td>{val.allocation}</td>
                                            <td>{val.segment}</td>
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

export default InvestGoldTable;



