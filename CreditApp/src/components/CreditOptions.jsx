import React from 'react';

const CreditOptions = ({ onSelectOption }) => {
    return (
        <div>
            <h3>Having Credit Issues?</h3>
            <button onClick={() => onSelectOption('loan')}>Need Loan</button>
            <button onClick={() => onSelectOption('improve-score')}>Improve Your Credit Score</button>
            <button onClick={() => onSelectOption('resolve-issue')}>Resolve Any Issue</button>
        </div>
    );
};

export default CreditOptions;
