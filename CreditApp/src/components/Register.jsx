import React, { useState } from 'react';

const Register = () => {
    const [emailOption, setEmailOption] = useState('existing');

    return (
        <div>
            <h2>Register</h2>
            <form>
                <label>PAN:</label>
                <input type="text" name="pan" required />

                <label>Aadhar:</label>
                <input type="text" name="aadhar" required />

                <label>Mobile Number:</label>
                <input type="text" name="mobile" required />

                <label>Email:</label>
                <select onChange={(e) => setEmailOption(e.target.value)}>
                    <option value="existing">Existing Email</option>
                    <option value="new">Create New Email</option>
                </select>

                {emailOption === 'new' && (
                    <div>
                        <label>New Email:</label>
                        <input type="email" name="new-email" required />
                    </div>
                )}

                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
