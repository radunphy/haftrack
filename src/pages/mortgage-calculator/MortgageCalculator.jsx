import { MortgageCalculatorForm, MortgageCalculatorPieChart, MortgageCalculatorAmortization } from '../../components'; 
import usePaymentBreakdown from '../../hooks/usePaymentBreakdown';
import './MortgageCalculator.css';
import React, { useState } from 'react';

const MortgageCalculator = () => {
    const [showAmortization, setShowAmortization] = useState(false);
    const [paymentBreakdown, handleChange] = usePaymentBreakdown();

    const handleToggle = () => {
        setShowAmortization(!showAmortization);
    };

    return (
        <div className='mc-container'>
            <header className='mc-header'>
                <div className='mc-header-title'>
                    <h1>Mortgage Calculator</h1>
                </div>
                <div className='mc-header-article'>
                    <span>
                        <p>
                            This calculator should be used to get a projected monthly payment. You can adjust interest rates, down payments, and home prices.
                            In order to determine how much you will pay in interest, please click the "Amortization Schedule".
                        </p>
                    </span>
                </div>
            </header>
            <div className='mc-container'>
                <div className='mc-calculator-container'>
                    <div className='mc-calculator'>
                        <div className='mc-inputs'>
                            <MortgageCalculatorForm 
                                paymentBreakdown={paymentBreakdown}
                                handleChange={handleChange} />
                        </div>
                        <div className='mc-chart'>
                            {showAmortization ? (
                                <div className='mc-chart-amortization'>
                                    <MortgageCalculatorAmortization />
                                </div>
                            ) : (
                                <div className='mc-chart-pie-chart'>
                                    <MortgageCalculatorPieChart paymentBreakdown={paymentBreakdown} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={handleToggle}>Toggle</button>
        </div>
    );
};

export default MortgageCalculator;
