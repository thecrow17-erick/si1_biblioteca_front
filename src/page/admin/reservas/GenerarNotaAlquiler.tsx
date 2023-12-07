import { SubmitHandler } from "react-hook-form";
import { CreateAlquiler } from "../../../components/formulario/notaAlquiler/CreateAlquiler"
import { ICreateNotaAlquiler } from "../../../interface/notaAlquiler";
import { useCreateNotaAlquiler } from "../../../hooks/api/notaAlquiler/useCreateNotaAlquiler";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../../components/Loading";

export const GenerarNotaAlquiler = () => {
    const navigate = useNavigate();
    const {mutationCreateNotaAlquiler} = useCreateNotaAlquiler();
    const onSubmit: SubmitHandler<ICreateNotaAlquiler> = ({fechaAlquiler,precio,fechaDevolucion})=>{
        const formDatos = new FormData();
        formDatos.append("fechaAlquiler",`${fechaAlquiler}T00:00:00.000Z`)
        formDatos.append("precio",precio.toString())
        formDatos.append("fechaDevolucion",`${fechaDevolucion}T00:00:00.000Z`)
        mutationCreateNotaAlquiler.mutate(formDatos,{
          onSettled: (data,error,variables,context)=>{
            console.log(data);
            if(data) navigate("/admin/reservas")
            console.log(error);
            console.log(variables);
            console.log(context);
          }
    })
    }
  return mutationCreateNotaAlquiler.isLoading?(
    <Loading/>
  ):(
    <>
      <div className="md:w-4/5 w-full md:p-2 p-5">
        <h1 className="font-bold text-2xl text-center">Crear Nota de Alquiler</h1>
        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12 md:w-full">
          <CreateAlquiler onSubmit={onSubmit}/>
        </div>
      </div>
    </>
  )
}
