import React from 'react';
import Chart from 'react-apexcharts';
import { Card, CardBody } from 'reactstrap';


const CashFlowDashboard = () => {

    const expenseChartData = {
        height: 480,
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
                    radius: 50
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
                "#780000",
                "#c1121f",
                "#fdf0d5",
                "#003049",
                "#669bbc",
                // "#cad2c5",
                // "#84a98c",
                // "#52796f",
                // "#354f52",
                // "#2f3e46"
                // "#3d5a80",
                // "#98c1d9",
                // "#e0fbfc",
                // "#ee6c4d",
                // "#293241"
            ],
            grid: {
                show: true
            }
        },
        series: [
            {
                name: 'Available Cash',
                data: [15, 125, 35, 35, 35, 80, 35, 20, 35, 45, 15, 75]
            },
            {
                name: 'Income',
                data: [25, 100, 15, 35, 65, 40, 80, 25, 15, 85, 25, 75]
            },
            {
                name: 'Expense',
                data: [35, 75, 35, 35, 20, 105, 100, 10, 65, 45, 30, 20]
            },
            {
                name: 'Investments',
                data: [45, 54, 35, 35, 20, 145, 120, 10, 65, 25, 30, 100]
            },
            {
                name: 'liabilities',
                data: [55, 145, 35, 35, 20, 65, 170, 10, 65, 85, 30, 130]
            }
        ]
    };

    return (

        <div>
            <Card>
                <CardBody>
                    <div className='income_chartanalysis'>
                        <div>
                            <div className='h4'>Cashflow</div>
                        </div>
                        <div>
                            <select className='form-select'>
                                <option value="2023">2023</option>
                                <option value="2022">2022</option>
                            </select>
                        </div>
                    </div>
                    <Chart {...expenseChartData} />
                </CardBody>
            </Card>
        </div>
    )
}

export default CashFlowDashboard;