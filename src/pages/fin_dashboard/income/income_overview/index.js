import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { Grid } from "@mui/material";
import './income_overview.css';
import { Progress } from "reactstrap";
import { borderRadius } from "@mui/system";
import Chart from 'react-apexcharts';


const IncomeCharts = ({ series }) => {

    var incomeChartData = {
        height: 455,
        type: 'bar',
        options: {
            chart: {
                id: 'bar-chart',
                stacked: true,
                toolbar: {
                    show: true
                },
                zoom: {
                    enabled: true
                }
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: 'bottom',
                            offsetX: -10,
                            offsetY: 0
                        }
                    }
                }
            ],
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '50%'
                }
            },
            xaxis: {
                type: 'category',
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            legend: {
                show: true,
                fontFamily: `'Roboto', sans-serif`,
                position: 'bottom',
                offsetX: 20,
                labels: {
                    useSeriesColors: false
                },
                markers: {
                    width: 10,
                    height: 16,
                    radius: 5
                },
                itemMargin: {
                    horizontal: 15,
                    vertical: 8
                }
            },
            fill: {
                type: 'solid'
            },
            dataLabels: {
                enabled: false
            },
            colors: [
                "#e07a5f",
                "#3d405b",
                "#81b29a",
                "#3d5a80",
                "#1f7a8c",
                "#ffb703"
            ],
            grid: {
                show: true
            }
        },
        series: series
    };


    return (
        <Chart {...incomeChartData} />
    );
};


const OverallIncomeCharts = ({ series }) => {

    var options = {
        labels: ["Salary", "Self Employed", "Interest", "Bonus", "Commission", "Royalty"],
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
            "#e07a5f",
            "#3d405b",
            "#81b29a",
            "#3d5a80",
            "#1f7a8c",
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






const IncomeOverview = () => {

    const [incomeOverviewYear, setIncomeOverviewYear] = useState('2023')

    const YearHandler = (e) => {
        setIncomeOverviewYear(e.target.value);
    }

    
    const Year_2023 = [
        {
            name: "Salary",
            data: [10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000],
        },
        {
            name: "Self Employed",
            data: [ 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000],
        },
        {
            name: "Interest",
            data: [0, 0, 7500, 0, 0, 7500, 0, 0, 7500, 0, 0, 7500],
        },
        {
            name: "Bonus",
            data: [0, 0, 0, 0, 0, 25000, 0, 0, 0, 0, 0, 25000],
        },
        {
            name: "Commission",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8000],
        },
        {
            name: "Royalty",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50000],
        },
    ];


    // const Year_2022 = [
    //     {
    //         name: "Salary",
    //         type: "area",
    //         data: [24, 15, 56, 77, 29, 61, 78, 14, 58, 32, 53, 77],
    //     },
    //     {
    //         name: "Royalty",
    //         type: "bar",
    //         data: [
    //             67.25, 56.58, 78.74, 48.87, 87.54, 30.03, 130.24, 58.57, 102.57, 32.36,
    //             48.51, 100.57,
    //         ],
    //     },
    //     {
    //         name: "Rental",
    //         type: "line",
    //         data: [38, 42, 27, 57, 81, 21, 15, 49, 17, 69, 52, 85],
    //     },
    //     {
    //         name: "Bonus",
    //         type: "column",
    //         data: [100, 42, 47, 57, 71, 21, 15, 69, 17, 39, 52, 55],
    //     },
    //     {
    //         name: "Commission",
    //         type: "line",
    //         data: [100, 42, 47, 57, 71, 21, 15, 69, 17, 39, 52, 55],
    //     },
    // ];

    const overallYear_2023 = [42, 8, 11, 18, 3, 18];
    // const overallYear_2023 = [65, 45, 20, 60, 50];


    return (
        <Grid container spacing={2}>
            <Grid item lg={8} className='w-100'>
                <div className="card">
                    <div className="card-body">
                        <div className='income_chartanalysis'>
                            <div>
                                <div className='h4'>Income Overview</div>
                            </div>
                            <div>
                                <select onChange={YearHandler} className='form-select'>
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                </select>
                            </div>
                        </div>
                        <IncomeCharts series={Year_2023} />
                        {/* {
                            incomeOverviewYear === '2023' ?
                                <IncomeCharts series={Year_2023} /> : <IncomeCharts series={Year_2022} />
                        } */}
                    </div>
                </div>
            </Grid>
            <Grid item lg={4} className='w-100'>
                <div className="card">
                    <div className="card-body">
                        <div className='income_chartanalysis'>
                            <div>
                                <div className='h5'>Annual Income</div>
                                {/* <div className=''>₹155500</div> */}
                                {/* <div className=''>{incomeOverviewYear === '2023' ? '₹3.22 Lac' : '₹2.22 Lac'}</div> */}
                            </div>
                            {/* <div> */}
                                {/* <div className='h5'>Income this month</div> */}
                                {/* <div className=''>{incomeOverviewYear === '2023' ? '₹66,000.00 Lac ' : '₹33,000.00 Lac '}</div> */}
                                {/* <div className=''>{incomeOverviewYear === '2023' ? '₹66,000.00 Lac ' : '₹33,000.00 Lac '}</div> */}
                            {/* </div> */}
                        </div>

                        <OverallIncomeCharts series={overallYear_2023} />
                        {/* {
                            incomeOverviewYear === '2023' ?
                                <OverallIncomeCharts series={overallYear_2023} /> : <OverallIncomeCharts series={overallYear_2022} />
                        } */}

                    </div>
                </div>
                <div className="card w-100">
                    <div className="card-body">
                        <div className="h5 mb-3">
                            Accrued Income
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <div>₹155500</div>
                            <div>₹282000</div>
                        </div>
                        <Progress value={50} />
                        <div className="d-flex justify-content-between align-items-center mt-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <div style={{
                                    width: '15px',
                                    height: '15px',
                                    background: '#3D78E3',
                                    borderRadius: '50px',
                                    marginRight: '5px'
                                }}></div>
                                <div>Till now income</div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div style={{
                                    width: '15px',
                                    height: '15px',
                                    background: '#EFF2F6',
                                    borderRadius: '50px',
                                    marginRight: '5px'
                                }}></div>
                                <div>Annual income</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Grid>
        </Grid>
    );
};

export default IncomeOverview;
