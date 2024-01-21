import React from 'react';

const MortgageCalculatorAmortization = () => {
    const tableData = [
        { year: 1, interest: 0, principal: 0, balance: 0 },
        // Add more data rows here
    ];

    return (
        <table>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Interest</th>
                    <th>Principal</th>
                    <th>Balance</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((row) => (
                    <tr key={row.year}>
                        <td>{row.year}</td>
                        <td>{row.interest}</td>
                        <td>{row.principal}</td>
                        <td>{row.balance}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default MortgageCalculatorAmortization;
