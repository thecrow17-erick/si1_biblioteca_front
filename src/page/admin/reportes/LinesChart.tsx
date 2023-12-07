
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';
import { reporte } from '../../../interface/reportes';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

interface props{
    reporte: reporte
}

export const LinesChart = ({reporte}:props) => {
    var beneficios = [0, 56, 20, 36, 80, 40, 30, -20, 25, 30, 12, 60];
    var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

    var midata = {
    labels: dias,
    datasets: [ // Cada una de las líneas del gráfico
        {
            label: reporte.label,
            data: reporte.data,
            tension: 0.5,
            fill : true,
            borderColor: 'rgb(255, 60, 100)',
            backgroundColor: 'rgba(255, 60, 100, 0.5)',
            pointRadius: 5,
            pointBorderColor: 'rgba(255, 60, 100)',
            pointBackgroundColor: 'rgba(255, 60, 100)',
        },
        ],
    };

    var misoptions = {
        scales : {
            y : {
                min : 0
            },
            x: {
                ticks: { color: 'rgb(255, 99, 132)'}
            }
        }
    };

    return <Line data={midata} options={misoptions}/>
}


