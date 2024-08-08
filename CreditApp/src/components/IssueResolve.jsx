import React from 'react';

const IssueResolve = () => {
    return (
        <div>
            <h4>In Which Bureau Are You Facing Issues?</h4>
            <label>
                <input type="checkbox" /> CIBIL
            </label>
            <label>
                <input type="checkbox" /> Experian
            </label>
            <label>
                <input type="checkbox" /> Equifax
            </label>
            <label>
                <input type="checkbox" /> CRIF
            </label>

            <div>
                <h4>Do You Have an Existing Report?</h4>
                <button>Upload</button>
                <button>Register and Get Updated Soft Copy</button>
            </div>
        </div>
    );
};

export default IssueResolve;
