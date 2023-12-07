import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom"
import { CrearRol } from "../../../components/formulario/rol/CrearRol";
import { useCreateRol } from "../../../hooks/api/rol/useCreateRol";
import { SubmitHandler } from "react-hook-form";
import { ICrearRol } from "../../../interface";
import { Loading } from "../../../components/Loading";

export const CreateRol = () => {
    const navigate = useNavigate();
    const {mutationCreateRol} = useCreateRol();
    const onSubmit:SubmitHandler<ICrearRol> = ({descripcion})=>{
        mutationCreateRol.mutate({descripcion},{
            onSettled:(data, error, variables, context) => {
                console.log(data);
                if(data){
                    toast.success("Rol creado correctamente");
                    setTimeout(() => {
                        navigate("/admin/roles")
                    }, 3000);
                }
                console.log(error);
                console.log(variables);
                console.log(context);
            },
        }
        
        )
    }
    return  mutationCreateRol.isLoading?(
        <Loading/>
    ):(
        <div className="md:w-2/3 w-full md:p-2 p-5">
            <Toaster position='top-center'/>
            <h1 className="font-bold text-2xl text-center">Crear Rol</h1>
            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                <CrearRol onSubmit={onSubmit}/>
            </div>
        </div>
    )
}
