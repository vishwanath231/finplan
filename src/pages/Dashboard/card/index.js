import React from 'react'
import ExpensesChartCard from './expenses'
import IncomeChartCard from './income'
import SavingsChartCard from './savings'
import './commonCard.css';
import { Link } from 'react-router-dom';
import InvestmentChartCard from './investment';
import LoanChartCard from './loan';
import NetWorthChartCard from './net_worth';
import EmergencyFundChartCard from './emergency_fund';
import TermInsuranceChartCard from './term_insurance';
import ProfileChartCard from './profile';
import { Grid } from '@mui/material';

const ChartCards = () => {
    return (
        <div className='row'>
            <div className='col-lg-4'>
                <IncomeChartCard />
            </div>
            <div className='col-lg-4'>
                <ExpensesChartCard />
            </div>
            <div className='col-lg-4'>
                <SavingsChartCard />
            </div>
            <div className='col-lg-4'>
                <InvestmentChartCard />
            </div>
            <div className='col-lg-4'>
                <LoanChartCard />
            </div>
            <div className='col-lg-4'>
                <NetWorthChartCard />
            </div>
            <div className='col-lg-4'>
                <EmergencyFundChartCard />
            </div>
            <div className='col-lg-4'>
                <TermInsuranceChartCard />
            </div>
            <div className='col-lg-4'>
                <ProfileChartCard />
            </div>
        </div>
    )
}

export default ChartCards;