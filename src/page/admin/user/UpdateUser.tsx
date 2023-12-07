import { Toaster } from "react-hot-toast"
// import { CrearUser } from "../../../components/formulario"
// import { SubmitHandler } from "react-hook-form"
// import { ICrearUsuario } from "../../../interface"
import { useParams } from "react-router-dom"
// import { ModificarUser } from "../../../components/formulario/user/ModificarUser";
// import { useNavigate } from "react-router-dom";
// import { useQueryUser } from "../../../hooks/api/user";

export const UpdateUser = () => {
  const {id} = useParams()
  console.log(id);
  // const navigate = useNavigate();
  // const {queryUser} = useQueryUser(parseInt(id!));
  // const onSubmit:SubmitHandler<ICrearUsuario> = ({email,nombre,password,rolId,telefono})=>{
  //   queryUser.({
  //     email,nombre,password,rolId: +rolId,telefono
  //   },{

  //   })
  
  // }

  return (
    <div className="md:w-2/3 w-full md:p-2 p-5">
      <Toaster position='top-center'/>
      <h1 className="font-bold text-2xl text-center">Actualizar Usuarios</h1>
      <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        {/* <ModificarUser /> */}
      </div>
    </div>
  )
}
