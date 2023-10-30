import {
  useNavigate
} from 'react-router-dom'

import { Loading } from '../../../components/Loading';
import { THead } from '../../../components/tables/THead';
import { Actions, Td, Tr } from '../../../components/tables';

import { useQueryBooks } from '../../../hooks/api/books/useQueryBooks';

export const PageLibros = () => {
  const navigate = useNavigate();
  const {queryBooks} = useQueryBooks();
  const dataHead: Array<string> = [
    "Id",
    "Titulo",
    "Edicion",
    "Autor",
    "Fecha de lanzamiento",
    "Precio",
    "Cantidad"
  ];
  const dataBody = queryBooks.data?.allLibros?.map((book)=>({
    id: book.id,
    titulo: book.titulo,
    edicion: book.edicion,
    autor: book.autor,
    fecha: book.fechaLanzamiento,
    precio: book.precio,
    cantidad: book.almacen.cantidad
  })) || []
  return queryBooks.isFetching?(
    <Loading/>
  ):(
    <div className="xl:px-5 xl:pt-10 ">
      <div className="flex justify-between md:p-0 p-3">
        <div className='xl:flex xl:justify-center'>
          <h1 className="font-semibold text-lg md:mr-5">Listas de Libros</h1>
          <button onClick={()=> queryBooks.refetch()} className="bg-blue-700 hover:bg-green-900 p-2 rounded-lg font-semibold text-white">
          Actualizar
        </button>
        </div>
        <button onClick={()=> navigate('/admin/book/create')} className="bg-green-700 hover:bg-green-900 p-2 rounded-lg font-semibold text-white">
          Crear Libro
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
                    <Actions onDelete={()=>console.log(b.id)} onUpdate={()=>console.log(b.id)} id={b.id!}/>
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
