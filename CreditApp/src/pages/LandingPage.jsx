import React from 'react'
import NavBar from "../components/NavBar.jsx";
import CreditOptions from "../components/CreditOptions.jsx";
import FreeAdvice from "../components/FreeAdvice.jsx";
import IssueResolve from "../components/IssueResolve.jsx";
import LoanOptions from "../components/LoanOptions.jsx";
import PremiumAdvice from "../components/PremiumAdvice.jsx";
import Register from "../components/Register.jsx";

const LandingPage = () => {
    return(
        <div>
            <NavBar />
            <CreditOptions />
            <FreeAdvice />
            <Home />
            <IssueResolve />
            <LoanOptions />
            <Login />
            <PremiumAdvice />
            <Register />
        </div>

    )
}

export default LandingPage