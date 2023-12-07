import { useNavigate } from "react-router-dom";
import { Loading } from "../../../components/Loading";
import {  THead, Td, Tr } from "../../../components/tables";
import { bitacora } from "../../../interface/bitacora";

export const PageBitacora = () => {
  const navigate = useNavigate();
    const dataHead: Array<string> = [
        "Id",
        "Usuario",
        "Fecha",
        "Acción"
    ];
    const dataBitacora: Array<bitacora> = [
        {id: 1 ,usuario:'mauri nunhez', fecha: '2023-12-03 T20:53:26', accion:'Iniciar Sesion'},
        {id: 2 ,usuario:'milton jimenez', fecha: '2023-12-01 T20:53:40', accion:'Iniciar Sesion'},
        {id: 3 ,usuario:'milton jimenez', fecha: '2023-12-01 T11:53:50', accion:'Reserva Libro'},
        {id: 4 ,usuario:'milton jimenez', fecha: '2023-12-05 T12:53:26', accion:'Reserva Libro'},
        {id: 5 ,usuario:'mauri nunhez', fecha: '2023-12-05 T14:53:26', accion:'Iniciar Sesion'},
        {id: 6 ,usuario:'mauri nunhez', fecha: '2023-12-05 T19:53:26', accion:'Reserva Libro'}
    ]


    return (
        <div className="xl:px-5 xl:pt-10 ">
        <div className="flex justify-between md:p-0 p-3">
            <div className='xl:flex xl:justify-center'>
            <h1 className="font-semibold text-lg md:mr-5">Registro de bitacora</h1>
            <button onClick={()=> null} className="bg-blue-700 hover:bg-green-900 p-2 rounded-lg font-semibold text-white">
            Actualizar
            </button>
            </div>
            {/* <button onClick={()=> navigate('/admin/nota-ingreso/create')} className="bg-green-700 hover:bg-green-900 p-2 rounded-lg font-semibold text-white">
            Crear nota
            </button> */}
        </div>
        <div className="py-5">
            <table className="min-w-full border-collapse block md:table">
            <THead data={dataHead}/>
            <tbody>
                {
                dataBitacora.map((b,i) =>(
                    <Tr idx={i} key={i}>
                        {
                        Object.entries(b).map(([key,value],idx)=>(
                            <Td name={key} value={value!} key={idx}/>
                        ))
                        }
                        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">
                            Delete
                        </button>
                        </td>
                    </Tr>
                ))
                }
            </tbody>
            </table>
        </div>
        <div className="flex justify-center">
        </div>
        </div>
    )
}
