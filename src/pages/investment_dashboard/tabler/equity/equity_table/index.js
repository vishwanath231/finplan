import React, { useState } from 'react';
import './invest_equityTable.css';
import ReactApexChart from "react-apexcharts";
import { Input } from 'reactstrap';
import AddEquityForm from './AddEquityForm';

const InvestEquityTable = () => {

    const [showAddIncome, setShowAddIncome] = useState(false)

    const addIncomeHandler = () => setShowAddIncome(true);
    const closeAddIncome = () => setShowAddIncome(false);


    const [data, setData] = useState([
        {
            id: "1",
            asset: "equity",
            allocation: 50,
            segment: "Large Cap",
            fund: "ICICI Prudential Bluechip Fund",
            lumpsum: 6370235,
            sip: 74039,
        },
        {
            id: "2",
            asset: "equity",
            allocation: 15,
            segment: "Mid Cap",
            fund: "HDF Mid-Cap Opportunities Fund",
            lumpsum: 1911071,
            sip: 22212,
        },
        {
            id: "3",
            asset: "equity",
            allocation: 20,
            segment: "Contra Cap",
            fund: "SBI Contra Fund",
            lumpsum: 2548094,
            sip: 29616,
        },
        {
            id: "4",
            asset: "equity",
            allocation: 15,
            segment: "Small Cap",
            fund: "Nippon Indian Small Cap",
            lumpsum: 1911071,
            sip: 222212,
        },
    ]);




    return (
        <div className='card'>
            <div className="card-body">
                <div className='added_income_header'>
                    <div className='h4'>
                        Equity
                    </div>
                    <div>
                        <button className='added_income_btn' onClick={addIncomeHandler}>
                            <span>
                                <i className="ri-add-circle-line addedIncome_add__btnIcon"></i>
                            </span>
                            Add Equity
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
                                    <AddEquityForm closeAddIncome={closeAddIncome} />
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

export default InvestEquityTable;



