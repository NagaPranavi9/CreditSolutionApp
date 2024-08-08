import React, { useState } from 'react';
import CreditOptions from './CreditOptions.jsx';
import LoanOptions from './LoanOptions.jsx';
import IssueResolve from './IssueResolve.jsx';

const Home = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelectOption = (option) => {
        setSelectedOption(option);
    };

    return (
        <div>
            {selectedOption === null && <CreditOptions onSelectOption={handleSelectOption} />}
            {selectedOption === 'loan' && <LoanOptions />}
            {selectedOption === 'resolve-issue' && <IssueResolve />}
            {selectedOption === 'improve-score' && <h4>Improve Your Credit Score Coming Soon...</h4>}
        </div>
    );
};

export default Home;
