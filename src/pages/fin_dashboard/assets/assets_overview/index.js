import { Grid } from '@mui/material';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import Chart from 'react-apexcharts';
import { Card, CardBody } from 'reactstrap';
import investmentChartData from '../chart-data/investment_chart_data';
import { Doughnut } from 'react-chartjs-2';


const DonutChart = ({ series }) => {

    var options = {
        labels: ["Equity", "Fixed Income"],
        chart: {
            height: 333,
            type: "donut",
        },
        legend: {
            position: "bottom",
        },
        stroke: {
            show: false,
        },
        dataLabels: {
            dropShadow: {
                enabled: false,
            },
        },
        colors: [
            '#ffb703',
            "#219ebc"
        ],
    };

    return (
        <React.Fragment>
            <ReactApexChart
                options={options}
                series={series}
                type="donut"
                height="333"
                className="apex-charts"
            />
        </React.Fragment>
    );
};




const AssetsOverview = () => {

    const assets = [45, 55];

    return (
        <Grid container spacing={2}>
            <Grid item lg={8} className='w-100'>
                <Card>
                    <CardBody>
                        <div className='h4 mt-2 mb-4'>
                            Projected Maturity Amount
                        </div>
                        <Chart {...investmentChartData} />
                    </CardBody>
                </Card>
            </Grid>
            <Grid item lg={4} className='w-100'>
                <Card>
                    <CardBody className='w-100'>
                        <div className='income_chartanalysis mb-4'>
                            <div className='h5'>
                                Current Year
                            </div>
                            <div>
                                <select name="" id="" className='form-select'>
                                    <option value="">Investment Type</option>
                                    <option value="Equity">Equity</option>
                                    <option value="Fixed Income">Fixed Income</option>
                                    <option value="Gold">Gold</option>
                                    <option value="Cash">Cash</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                        
                        <DonutChart series={assets} />
                    </CardBody>
                </Card>
            </Grid>
        </Grid>
    )
}

export default AssetsOverview;