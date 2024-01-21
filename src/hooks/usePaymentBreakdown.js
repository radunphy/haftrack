import { useState } from "react";

const usePaymentBreakdown = () => {
    const [paymentBreakdown, setPaymentBreakdown] = useState({
        homeValue: 200000,
        downPayment: 20000,
        mortgageTerm: 30,
        interestRate: 6.5,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPaymentBreakdown((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    return [paymentBreakdown, handleChange];
};

export default usePaymentBreakdown;