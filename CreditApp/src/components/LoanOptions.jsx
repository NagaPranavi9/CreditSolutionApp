import React from 'react';
import { Link } from 'react-router-dom';

const LoanOptions = () => {
    return (
        <div>
            <h4>Need Loan?</h4>
            <Link to="/free-advice">
                <button>Free Advice</button>
            </Link>
            <Link to="/premium-advice">
                <button>Premium Advice</button>
            </Link>
        </div>
    );
};

export default LoanOptions;
