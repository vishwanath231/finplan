import React from 'react'
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';


const Equity = () => {

    const tableCustomStyles = {
        headCells: {
            style: {
                fontSize: '20px',
                fontWeight: 'bold',
                paddingLeft: '0 8px',
                justifyContent: 'center',
                backgroundColor: '#3d405b',
                color: '#fff'
            },
        },

    }


    const columns = [
        {
            name: <span className='font-weight-bold fs-13'>ID</span>,
            selector: row => row.id,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>Asstes</span>,
            selector: row => row.asset,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>Allocation</span>,
            selector: row => row.allocation + '%',
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>Segment</span>,
            selector: row => row.segment,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>Fund</span>,
            selector: row => row.fund,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>Lumpsum</span>,
            sortable: true,
            selector: row => row.lumpsum,
        },
        {
            name: <span className='font-weight-bold fs-13'>SIP</span>,
            sortable: true,
            selector: row => row.sip,
        },
    ];

    const data = [
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

    ];
    return (
        <div className="card">
            <div className="card-body">
                <div className='text-black h3 mb-3'>Equity</div>
                <DataTable
                    fixedHeader
                    fixedHeaderScrollHeight="300px"
                    columns={columns}
                    data={data}
                    // pagination
                    customStyles={tableCustomStyles}
                />
            </div>
        </div>
    );
}

export default Equity;


