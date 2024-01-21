import React, { useState } from 'react';
import './MortgageCalculatorForm.css';

const MortgageCalculatorForm = ({ paymentBreakdown, handleChange }) => {
    return (
        <form className='mc-form'>
            <div className='mc-form-header'>
                <h2>Mortgage Information</h2>
            </div>
            <div className='mc-form-group'>
                <label className='mc-form-label'>
                    <h3>Home Value</h3>
                </label>
                <div className='mc-form-input'>
                    <input
                            type="text"
                            name="homeValue"
                            value={paymentBreakdown.homeValue}
                            onChange={handleChange}
                        />
                </div>
            </div>
            <div className='mc-form-group'>
                <label className='mc-form-label'>
                    <h3>Down Payment</h3>
                </label>
                <div className='mc-form-input'>
                    <input
                            type="text"
                            name="downPayment"
                            value={paymentBreakdown.downPayment}
                            onChange={handleChange}
                        />
                </div>
            </div>
            <div className='mc-form-group'>
                <label className='mc-form-label'>
                    <h3>Type of Mortgage</h3>
                </label>
                <div className='mc-form-select'>
                    <select 
                        type="text"
                        name="mortgageType"
                        value={paymentBreakdown.mortgageType}
                        onChange={handleChange}
                    >
                        <option value='30YearFixed'>30-year Fixed</option>
                        <option value='15YearFixed'>15-year Fixed</option>
                        <option value='5/1AdjustableRate'>5/1 ARM</option>
                    </select>
                </div>
            </div>
            <div className='mc-form-group'>
                <label className='mc-form-label'>
                    <h3>Interest Rate</h3>
                </label>
                <div className='mc-form-input'>
                    <input
                            type="text"
                            name="interestRate"
                            value={paymentBreakdown.interestRate}
                            onChange={handleChange}
                        />
                </div>
            </div>
        </form>
    );
};

export default MortgageCalculatorForm;
