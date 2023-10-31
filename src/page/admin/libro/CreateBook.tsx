import { SubmitHandler } from "react-hook-form"
import { ICreateBook } from "../../../interface"
import { CrearLibro } from "../../../components/formulario/user";
import { useCreateBook } from "../../../hooks/api/books";
import { Loading } from "../../../components/Loading";
import { useNavigate } from "react-router-dom";

export const CreateBook = () => {
  const navigate = useNavigate();
  const {mutationCreateBook} = useCreateBook();
  const onSubmit: SubmitHandler<ICreateBook> = ({autor,edicion,fechaLanzamiento,img,precio,titulo})=>{
    const formDatos = new FormData();
    formDatos.append("autor",autor)
    formDatos.append("edicion",edicion)
    formDatos.append("fechaLanzamiento",`${fechaLanzamiento}T00:00:00.000Z`)
    formDatos.append("img",img[0])
    formDatos.append("precio",precio.toString())
    formDatos.append("titulo",titulo)
    mutationCreateBook.mutate(formDatos,{
      onSettled: (data,error,variables,context)=>{
        console.log(data);
        if(data) navigate("/admin/books")
        console.log(error);
        console.log(variables);
        console.log(context);
      }
    })
  }
  
  return mutationCreateBook.isLoading?(
    <Loading/>
  ):(
    <div className="md:w-2/3 w-full md:p-2 p-5">
      <h1 className="font-bold text-2xl text-center">Crear Libro</h1>
      <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <CrearLibro onSubmit={onSubmit}/>
      </div>
    </div>
  )
}
