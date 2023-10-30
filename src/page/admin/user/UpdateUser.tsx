import { Toaster } from "react-hot-toast"
// import { CrearUser } from "../../../components/formulario"
// import { SubmitHandler } from "react-hook-form"
// import { ICrearUsuario } from "../../../interface"
import { useParams } from "react-router-dom"

export const UpdateUser = () => {
  const {id} = useParams()
  console.log(id);
  // const onSubmit:SubmitHandler<ICrearUsuario> = (data)=>{
  //   console.log(data);
  // }

  return (
    <div className="md:w-2/3 w-full md:p-2 p-5">
      <Toaster position='top-center'/>
      <h1 className="font-bold text-2xl text-center">Actualizar Usuarios</h1>
      <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
      </div>
    </div>
  )
}
