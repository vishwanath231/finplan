import React, { useState } from 'react';
import './invest_fixedIncomeTable.css';
import ReactApexChart from "react-apexcharts";
import { Input } from 'reactstrap';
import AddFixedIncomeForm from './AddFixedIncomeForm';


const InvestFixedIncomeTable = () => {

    const [showAddIncome, setShowAddIncome] = useState(false)
    const [showUpdate, setShowUpdate] = useState(0)


    const addIncomeHandler = () => setShowAddIncome(true);
    const closeAddIncome = () => setShowAddIncome(false);


    const [data, setData] = useState([
        {
            id: "1",
            segment: "Gilt",
            allocation: 35,
            fund: "SBI Magnum Gilt Fund - Growth",
            lumpsum: 4852575,
            sip: 46645,
        },
        {
            id: "2",
            segment: "Medium Duration",
            allocation: 20,
            fund: "Aditya Birla Sun Life Medium Term Plan - Reg - Growth",
            lumpsum: 2772900,
            sip: 26645,
        },
        {
            id: "3",
            segment: "Credit Risk",
            allocation: 25,
            fund: "Axis Credit Risk Fund - Growth",
            lumpsum: 3466125,
            sip: 33318,
        },
        {
            id: "4",
            segment: "Short Duration",
            allocation: 20,
            fund: "Nippon Indian Short Term Fund - Reg - Growth",
            lumpsum: 2772900,
            sip: 26654,
        },
    ]);


    const incomeUpdate = (id) => {
        setShowUpdate(id);
    }



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
                                <th>Segment</th>
                                <th>Allocation</th>
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
                                            <td>
                                                {
                                                    val.id === showUpdate ?
                                                        <select name="" id="" className='form-select'>
                                                            <option value="">Segment</option>
                                                            <option value="Liquid">Liquid</option>
                                                            <option value="Ultra Short Duration">Ultra Short Duration</option>
                                                            <option value="Low Duration">Low Duration</option>
                                                            <option value="Money Market">Money Market</option>
                                                            <option value="Floater">Floater</option>
                                                            <option value="Short Duration">Short Duration</option>
                                                            <option value="Medium Duration">Medium Duration</option>
                                                            <option value="Medium to Long Duration">Medium to Long Duration</option>
                                                            <option value="Dividend Yield">Dynamic Bond</option>
                                                            <option value="Dynamic Bond">Corporate Bond</option>
                                                            <option value="Credit Risk">Credit Risk</option>
                                                            <option value="Gilt">Gilt</option>
                                                        </select>
                                                    : val.segment
                                                }
                                            </td>
                                            <td>
                                                {
                                                    val.id === showUpdate ?
                                                        <Input type="text" className="form-control" id="allocation" placeholder='Allocation' />
                                                    :val.allocation
                                                }
                                            </td>
                                            <td>
                                                { 
                                                    val.id === showUpdate ?
                                                        <select name="" id="" className='form-select'>
                                                            <option value="">Fund</option>
                                                            <option value="ICICI Prudential Gilt Fund - Growth">ICICI Prudential Gilt Fund - Growth</option>
                                                            <option value="IDFC G Sec Fund - Invt Plan - Growth (Re-launched)">IDFC G Sec Fund - Invt Plan - Growth (Re-launched)</option>
                                                            <option value="SBI Magnum Gilt Fund - Growth">SBI Magnum Gilt Fund - Growth</option>
                                                        </select>
                                                    :val.fund
                                                }
                                            </td>
                                            <td>{val.lumpsum}</td>
                                            <td>{val.sip}</td>
                                            <td>
                                                {
                                                    val.id === showUpdate ?
                                                    <div>
                                                        <div className='btn'><i className="ri-check-line text-success h4"></i></div>
                                                        <div className='btn' onClick={() => setShowUpdate(0)}><i className="ri-close-line text-danger h4"></i></div>
                                                    </div>
                                                    :
                                                    <div>
                                                        <button className='addedIncome_edit__btn' onClick={() => incomeUpdate(val.id)}><i className="ri-edit-line"></i></button>
                                                        <button className='addedIncome_delete__btn'><i className="ri-delete-bin-line"></i></button>
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

export default InvestFixedIncomeTable;



