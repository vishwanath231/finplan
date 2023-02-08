import { Grid } from '@mui/material';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import Chart from 'react-apexcharts';
import { Card, CardBody } from 'reactstrap';
import networthChartData from '../chart-data/networth_chart_data';

const NetWorthChartColumn = ({ series }) => {

    var options = {
        chart: {
            height: 350,
            type: 'bar',
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '80%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 0,
            colors: ['transparent']
        },
        colors: [
            "#e07a5f",
            "#3d405b",
            "#81b29a",
            "#3d5a80",
            "#1f7a8c",
        ],
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        yaxis: {
            title: {
                text: '₹ (thousands)'
            }
        },
        grid: {
            borderColor: '#f1f1f1',
        },
        fill: {
            opacity: 1

        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "₹ " + val;
                }
            }
        }
    };


    return (
        <ReactApexChart className="apex-charts"
            series={series}
            options={options}
            type="bar"
            height={395}
        />
    );
};

const YearlyNetworthChartColumn = ({ series }) => {

    var options = {
        chart: {
            height: 350,
            type: 'bar',
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '80%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 0,
            colors: ['transparent']
        },
        colors: [
            "#e07a5f",
            "#3d405b",
            "#81b29a",
            "#3d5a80",
            "#1f7a8c",
        ],
        xaxis: {
            categories: ['2023'],
        },
        yaxis: {
            title: {
                text: '₹ (thousands)'
            }
        },
        grid: {
            borderColor: '#f1f1f1',
        },
        fill: {
            opacity: 1

        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "₹ " + val;
                }
            }
        }
    };


    return (
        <ReactApexChart className="apex-charts"
            series={series}
            options={options}
            type="bar"
            height={350}
        />
    );
};



const NetWorthOverview = () => {

    const [monthlyNetworth, setMonthlyNetWorth] = useState([
        {
            name: "Assets",
            data: [12000, 20000, 10000, 30000, 15000, 30000, 40000, 20000, 6000, 7000, 20000, 9000],
        },
        {
            name: "Liabilities",
            data: [8000, 18000, 2000, 24000, 5000, 15000, 26000, 10000, 2000, 5000, 10000, 5000],
        },
        {
            name: "Net Worth",
            data: [4000, 2000, 8000, 6000, 10000, 15000, 14000, 10000, 4000, 2000, 10000, 4000],
        },
    ])


    const [yearlyNetworthData, setYearlyNetworthData] = useState([
        {
            name: "Assets",
            data: monthlyNetworth.filter(val => val.name === 'Assets').map((val) => val.data.reduce((a, v) => a = a + v, 0))
        },
        {
            name: "Liabilities",
            data: monthlyNetworth.filter(val => val.name === 'Liabilities').map((val) => val.data.reduce((a, v) => a = a + v, 0))
        },
        {
            name: "Net Worth",
            data: monthlyNetworth.filter(val => val.name === 'Net Worth').map((val) => val.data.reduce((a, v) => a = a + v, 0))
        },
    ])


    return (
        <Grid container spacing={2}>
            <Grid item lg={8} className='w-100'>
                <Card>
                    <CardBody>
                        <div className='income_chartanalysis'>
                            <div>
                                <div className='h4'>Monthly Net Worth</div>
                            </div>
                            {/* <div>
                                <div className='h5'>
                                    Avaiable Cash: ₹30,995.96 
                                </div>
                                <div className='text-left'>
                                    As on: Sep 2023
                                </div>
                            </div> */}
                        </div>
                        <NetWorthChartColumn series={monthlyNetworth} />

                    </CardBody>
                </Card>
            </Grid>
            <Grid item lg={4} className='w-100'>
                <Card>
                    <CardBody>
                        <div className=''>
                            <div>
                                <div className='h4'>Yearly Net Worth</div>
                            </div>
                            <div>
                                <div className='mb-2'>
                                    Assets &nbsp;
                                    <span className='' style={{ color: '#e07a5f' }}>
                                        ₹ {monthlyNetworth.filter(val => val.name === 'Assets').map((val) => val.data.reduce((a, v) => a = a + v, 0))}
                                    </span>
                                </div>
                                <div className='mb-2'>
                                    Liabilities  &nbsp;
                                    <span className='' style={{ color: '#3d405b' }}>
                                        ₹ {monthlyNetworth.filter(val => val.name === 'Liabilities').map((val) => val.data.reduce((a, v) => a = a + v, 0))}
                                    </span>
                                </div>
                                <div className=''>
                                    Net Worth  &nbsp;
                                    <span className='' style={{ color: '#81b29a' }}>
                                        ₹ {monthlyNetworth.filter(val => val.name === 'Net Worth').map((val) => val.data.reduce((a, v) => a = a + v, 0))}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <YearlyNetworthChartColumn series={yearlyNetworthData} />
                    </CardBody>
                </Card>
            </Grid>
        </Grid>
    )
}

export default NetWorthOverview;