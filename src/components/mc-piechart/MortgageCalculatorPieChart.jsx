import { Doughnut } from "react-chartjs-2";
import { React } from "react";
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";

ChartJs.register(ArcElement, Tooltip, Legend);

const MortgageCalculatorPieChart = ({ paymentBreakdown }) => {
    const data = {
        labels: Object.keys(paymentBreakdown),
        datasets: [
            {
                data: Object.values(paymentBreakdown),
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56, #29AF8A"],
                hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56, #29AF8A"],
            },
        ],
    };
    
    const options = {
        cutout: 225,
        radius: 100
    };

    return <Doughnut data={data}/>;
};

export default MortgageCalculatorPieChart;