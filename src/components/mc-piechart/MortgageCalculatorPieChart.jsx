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
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            },
        ],
    };

    return <Doughnut data={data} />;
};

export default MortgageCalculatorPieChart;