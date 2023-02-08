import React, { useState } from 'react';
import './invest_fixedIncomeTable.css';
import ReactApexChart from "react-apexcharts";
import { Input } from 'reactstrap';
import AddFixedIncomeForm from './AddFixedIncomeForm';


const InvestFixedIncomeTable = () => {

    const [showAddIncome, setShowAddIncome] = useState(false)

    const addIncomeHandler = () => setShowAddIncome(true);
    const closeAddIncome = () => setShowAddIncome(false);


    const [data, setData] = useState([
        {
            id: "1",
            asset: "Fixed Income",
            allocation: 35,
            segment: "Gilt",
            fund: "SBI Magnum Gilt Fund - Growth",
            lumpsum: 4852575,
            sip: 46645,
        },
        {
            id: "2",
            asset: "Fixed Income",
            allocation: 20,
            segment: "Medium Duration",
            fund: "Aditya Birla Sun Life Medium Term Plan - Reg - Growth",
            lumpsum: 2772900,
            sip: 26645,
        },
        {
            id: "3",
            asset: "Fixed Income",
            allocation: 25,
            segment: "Credit Risk",
            fund: "Axis Credit Risk Fund - Growth",
            lumpsum: 3466125,
            sip: 33318,
        },
        {
            id: "4",
            asset: "Fixed Income",
            allocation: 20,
            segment: "Short Duration",
            fund: "Nippon Indian Short Term Fund - Reg - Growth",
            lumpsum: 2772900,
            sip: 26654,
        },
    ]);




    return (
        <div className='card'>
            <div className="card-body">
                <div className='added_income_header'>
                    <div className='h4'>
                        Fixed Income
                    </div>
                    <div>
                        <button className='added_income_btn' onClick={addIncomeHandler}>
                            <span>
                                <i className="ri-add-circle-line addedIncome_add__btnIcon"></i>
                            </span>
                            Add Fixed Income
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
                                    <AddFixedIncomeForm closeAddIncome={closeAddIncome} />
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

export default InvestFixedIncomeTable;



