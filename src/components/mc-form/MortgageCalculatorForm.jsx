import React, { useState } from 'react';
import './MortgageCalculatorForm.css';

const MortgageCalculatorForm = ({ paymentBreakdown, handleChange }) => {
    return (
        <form>
            <label>
                Home Value:
                <input
                    type="text"
                    name="homeValue"
                    value={paymentBreakdown.homeValue}
                    onChange={handleChange}
                />
            </label>
            <label>
                Down Payment:
                <input
                    type="text"
                    name="downPayment"
                    value={paymentBreakdown.downPayment}
                    onChange={handleChange}
                />
            </label>
            <label>
                Type of Mortgage:
                <input
                    type="text"
                    name="mortgageType"
                    value={paymentBreakdown.mortgageType}
                    onChange={handleChange}
                />
            </label>
            <label>
                Interest Rate:
                <input
                    type="text"
                    name="interestRate"
                    value={paymentBreakdown.interestRate}
                    onChange={handleChange}
                />
            </label>
        </form>
    );
};

export default MortgageCalculatorForm;
