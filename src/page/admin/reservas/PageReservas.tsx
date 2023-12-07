import { useNavigate } from "react-router-dom";
import { THead, Td, Tr } from "../../../components/tables";
import { useDeleteReserva, useQueryReservasClientes } from "../../../hooks/api/reservas"
import { Loading } from "../../../components/Loading";

export const PageReservas = () => {
    const token = localStorage.getItem("auth-token")!;
    const navigate = useNavigate();
    const {queryReservas} = useQueryReservasClientes();
    const {mutationReserva} = useDeleteReserva();

    const dataHead = [
      "Id",
      "Entregado",
      "Usuario",
      "Fecha de reserva",
      "libro",
      "precio"
    ]
    const dataBody = queryReservas.data?.allReservas.map((reserva)=>({
      id: reserva.id,
      entregado: reserva.estado,
      usurio: reserva.cliente.nombre,
      fecha: reserva.fecha_reserva,
      libro: reserva.libro.titulo,
      precio: reserva.libro.precio
    })) || [];

    const onClickDeleteReserva = (id:number)=>{
  
      mutationReserva.mutate({id,token},{
        onSettled(data, error, variables, context) {
          if(data){
            alert("Se ha eliminado la reserva");
            queryReservas.refetch();
          }
          console.log(data);
          console.log(error);
          console.log(variables);
          console.log(context);    
        },
      })
    }
    
    const onClickEntregadoReserva = (id:number)=>{
      mutationReserva.mutate({id,token},{
        onSettled(data, error, variables, context) {
          if(data){
            alert("Se ha entregado la reserva");
            queryReservas.refetch();
          }
          console.log(data);
          console.log(error);
          console.log(variables);
          console.log(context);    
        },
      })
    }

    return  queryReservas.isFetching || mutationReserva.isLoading? (
        <Loading/>
    ):(
    <div className="xl:px-5 xl:pt-10 ">
      <div className="flex justify-between md:p-0 p-3">
        <div className='xl:flex xl:justify-center'>
          <h1 className="font-semibold text-lg md:mr-5">Listas de Libros Reservados</h1>
            <button onClick={()=> queryReservas.refetch()} className="bg-blue-700 hover:bg-green-900 p-2 rounded-lg font-semibold text-white">
                Actualizar
            </button>
        </div>
        {/* <button onClick={()=> navigate('/cliente/reserva/create')} className="bg-green-700 hover:bg-green-900 p-2 rounded-lg font-semibold text-white">
          Crear reserva
        </button> */}
      </div>
      <div className="py-5">
        <table className="min-w-full border-collapse block md:table">
          <THead data={dataHead}/>
          <tbody>
            {             
              dataBody.map((b,i) =>(
                <Tr idx={i} key={i}>
                    {
                      Object.entries(b).map(([key,value],idx)=>
                      (
                        <Td name={key} value={value!} key={idx}/>
                      ))
                    }
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                        <span className="inline-block w-1/3 md:hidden font-bold">Actions: </span>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 border border-green-500 rounded"
                        onClick={()=> navigate('/admin/reservas/nota-alquiler-create')}
                        >
                        Generar Nota de Alquiler
                        </button>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"
                        onClick={()=> onClickDeleteReserva(b.id)}
                        >
                        Delete
                        </button>
                    </td>
                </Tr>
              )
            )
            }
          </tbody>
        </table>
      </div>
      <div className="flex justify-center">
      </div>
    </div>
    )
}
