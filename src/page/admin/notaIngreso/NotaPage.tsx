import { useNavigate } from "react-router-dom";
import { useQueryNota } from "../../../hooks/api/notaIngreso";
import { Loading } from "../../../components/Loading";
import {  THead, Td, Tr } from "../../../components/tables";

export const NotaPage = () => {
  const navigate = useNavigate();
  const {querysNotas} = useQueryNota();
  const dataHead: Array<string> = [
    "Id",
    "Proveedor",
    "Fecha de ingreso",

  ];
  const dataBody = querysNotas.data?.allNotasIngreso?.map((n)=>({
    id: n.id,
    proveedor: n.proveedor,
    fechaIngreso: n.fechaIngreso 
  })) || []
  return querysNotas.isFetching?(
    <Loading/>
  ):(
    <div className="xl:px-5 xl:pt-10 ">
      <div className="flex justify-between md:p-0 p-3">
        <div className='xl:flex xl:justify-center'>
          <h1 className="font-semibold text-lg md:mr-5">Listas de notas de ingreso</h1>
          <button onClick={()=> querysNotas.refetch()} className="bg-blue-700 hover:bg-green-900 p-2 rounded-lg font-semibold text-white">
          Actualizar
        </button>
        </div>
        <button onClick={()=> navigate('/admin/nota-ingreso/create')} className="bg-green-700 hover:bg-green-900 p-2 rounded-lg font-semibold text-white">
          Crear nota
        </button>
      </div>
      <div className="py-5">
        <table className="min-w-full border-collapse block md:table">
          <THead data={dataHead}/>
          <tbody>
            {
              dataBody.map((b,i) =>(
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
