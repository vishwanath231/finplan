// ==============================|| DASHBOARD - TOTAL GROWTH BAR CHART ||============================== //

const investmentChartData = {
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
            categories: ['2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032', '2033']
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
            // '#415a77',
            '#ffb703',
            // "#161a1d",
            "#219ebc"

        ],
        grid: {
            show: true
        }
    },
    series: [
        {
            name: 'Equity',
            data: [3500, 12500, 25000, 35000, 65000, 40000, 35000, 20000, 35000, 45000, 15000, 75000]
        },
        {
            name: 'Fixed Income',
            data: [35000, 15000, 15000, 35000, 65000, 40000, 80000, 25000, 15000, 85000, 25000, 75000]
        }
    ]
};
export default investmentChartData;