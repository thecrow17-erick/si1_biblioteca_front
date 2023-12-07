import { LinesChart } from ".";
import { reporte } from "../../../interface/reportes";


export const PageReportes = () => {
    var reporteAlquiler:reporte ={
        data: [12,3,20,9,6,10,21],
        label: 'Alquiler'
    }
    var reporteReserva:reporte = {
        data: [2,4,6,12,11,3,4],
        label: 'Reserva'
    }
  return (
    <div>
            {/* Aquí incluiré las gráficas (un componente por cada ejemplo). */}
            <h1 className="bg-info text-center font-monospace fw-bold lh-base">Gráficas</h1>
            <div>
                <p className="m-2"><b>Reporte #1: </b>Gráfico de reportes de las reservas de libros</p>
                <div className="bg-light mx-auto px-2 border-2 border-primary" style={{width:"450px", height:"230px"}}>
                    <LinesChart reporte={reporteReserva} />
                </div>
            </div>
            <hr className="mt-3 mb-2"/>
            <div>
                <p className="m-2"><b>Reporte #2: </b>Gráfico de reportes de los alquiler de libros</p>
                <div className="bg-light mx-auto px-2 border-2 border-primary" style={{width:"450px", height:"225px"}}>
                    <LinesChart reporte={reporteAlquiler}/>
                </div>
            </div>

        </div>
  )
}
