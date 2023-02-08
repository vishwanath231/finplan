import React from "react";
import { Navigate } from "react-router-dom";

//Dashboard
import Dashboard from "../pages/Dashboard";


// profile
import Profile from "../pages/profile";
import FinanciaObjective from "../pages/profile/pages/FinanciaObjective";
import RiskProfile from "../pages/profile/pages/RiskProfile";
import TopGoals from "../pages/profile/pages/TopGoals";
import YourInterest from "../pages/profile/pages/YourInterest";
import Recalibrate from "../pages/profile/pages/Recalibrate";

// fin dashboard
import Expenses from "../pages/fin_dashboard/expenses";
import Income from "../pages/fin_dashboard/income";
import Assets from "../pages/fin_dashboard/assets";
import Liabilities from "../pages/fin_dashboard/liabilities";
import NetWorth from "../pages/fin_dashboard/net_worth";
import Savings from "../pages/fin_dashboard/savings";

// investment dashboard
import InvestmentDashboard from '../pages/investment_dashboard';
import InvestmentGoals from '../pages/investment_dashboard/pages/goals';
import InvestmentAllocation from '../pages/investment_dashboard/pages/investment_allocation';
import InvestmentPlan from '../pages/investment_dashboard/pages/investment_plan';

// import RetirementGoalPlanning from "../pages/financial_goals/retirement_goal";
// import InvestmentPlanning from "../pages/financial_goals/investment_planning";


// Comming Soon...
import ComingSoon from "../pages/coming_soon";
import Home from "../pages/home";



//login
import Login from "../pages/Authentication/Login";
import ForgetPasswordPage from "../pages/Authentication/ForgetPassword";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";



const authProtectedRoutes = [
  
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/index", component: <Dashboard /> },



  { path: "/profile", component: <Profile /> },
  { path: "/profile/financial", component: <FinanciaObjective /> },
  { path: "/profile/riskProfile", component: <RiskProfile /> },
  { path: "/profile/topGoals", component: <TopGoals /> },
  { path: "/profile/yourInterest", component: <YourInterest /> },
  { path: "/profile/risk/recalibrate", component: <Recalibrate /> },


  { path: "/expense", component: <Expenses /> },
  { path: "/income", component: <Income /> },
  { path: "/assets", component: <Assets /> },
  { path: "/liabilities", component: <Liabilities /> },
  { path: "/netWorth", component: <NetWorth /> },
  { path: "/savings", component: <Savings /> },


  { path: "/investDashboard", component: <InvestmentDashboard /> },
  { path: "/investGoals", component: <InvestmentGoals /> },
  { path: "/investAllocation", component: <InvestmentAllocation /> },
  { path: "/investPlan", component: <InvestmentPlan /> },


  // { path: "/retirementGoals", component: <RetirementGoalPlanning /> },
  // { path: "/investmentPlanning", component: <InvestmentPlanning /> },


  { path: "/comingSoon", component: <ComingSoon /> },

  {
    path: "/", component: <Navigate to="/dashboard" />,
  },
  { path: "*", component: <Navigate to="/dashboard" /> },
];

const publicRoutes = [
  // Authentication Page
  { path: "/", exact: true, component: <Home /> },
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },
  { path: "/forgot-password", component: <ForgetPasswordPage /> },
  { path: "/register", component: <Register /> },
];

export { authProtectedRoutes, publicRoutes };