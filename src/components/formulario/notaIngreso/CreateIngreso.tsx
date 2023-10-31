import {  ChangeEvent, useState } from 'react';
import { THead } from '../../tables/THead';
import { FatherList } from './FatherList';
import { BookList, SearchBooks } from '.';
import { useQueryBooks } from '../../../hooks/api/books/useQueryBooks';
import { Loading } from '../../Loading';
import { IBodyNota, ISearchBook } from '../../../interface';
import { useCreateNota } from '../../../hooks/api/notaIngreso';
import { useNavigate } from 'react-router-dom';
export const CreateIngreso = () => {
  const navigate = useNavigate();
  const {queryBooks} = useQueryBooks(0,Number.MAX_VALUE);
  const [proveedor, setProveedor] = useState<string>("");
  const [cantidad, setCantidad] = useState<string>("");
  const [libro, setLibros] = useState<Array<IBodyNota>>([]);
  const [libroSearch, setLibroSearch] = useState<ISearchBook>();
  const {mutationNota} = useCreateNota()
  const dataHead = [
    "Libro",
    "Id",
    "cantidad"
  ]
  const onClickAdd = ()=>{
    setLibros([...libro,{
      titulo: libroSearch!.titulo,
      libroId: libroSearch!.id,
      cantidad: +cantidad
    }])
    setLibroSearch(undefined);
  }
  const onBookClick = (data: ISearchBook)=>{
    setLibroSearch({
      id: data.id,
      titulo: data.titulo,
    })
  }
  
  const onSubmit = ()=>{
    console.log(proveedor);
    
    if(libro.length === 0 || proveedor === ""){
      return false;
    }
    const dataNota = libro.map((value)=>({
      libroId: value.libroId,
      cantidad: value.cantidad
    }))
    mutationNota.mutate({proveedor,detalle: dataNota},{
      onSettled(data, error, variables, context) {
          console.log(data);
          console.log(error);
          console.log(variables);
          console.log(context);
          navigate("/admin/nota-ingresos")
      },
    })
  }

  return queryBooks.isFetching || mutationNota.isLoading?(
    <Loading/>
  ):(
    <div>
      <table className="min-w-full border-collapse block md:table">
      <THead data={dataHead}/>
        <tbody>
          <FatherList idx={1} listBooks={false} >
            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              <span className="inline-block w-1/3 md:hidden font-bold">Libro: </span>
              <SearchBooks books={queryBooks.data?.allLibros || []} onBookClick={onBookClick}/>
            </td>
            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              <span className="inline-block w-1/3 md:hidden font-bold">Id : </span>
              {libroSearch?.id || ""}
            </td>
            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              <span className="inline-block w-1/3 md:hidden font-bold">Cantidad : </span>
              <input
                type="number"
                className="peer h-full w-1/2 rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder="cantidad"
                onChange={(e: ChangeEvent<HTMLInputElement>)=> setCantidad(e.target.value)}
                defaultValue={cantidad}
              />
            </td>
            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-5 border rounded"
              onClick={()=> onClickAdd()}
              >
              Agregar
              </button>
            </td>
          </FatherList>
        </tbody>
      </table>
      <table className="min-w-full border-collapse block md:table mt-8">
        <THead data={dataHead}/>
        <tbody>
          {
            libro.map((value,i)=>(
              <FatherList idx={i} key={i} listBooks={true}>
                {
                  Object.entries(value).map(([keys,v],idx)=>(
                    <BookList name={keys} value={v} key={idx}/>
                  ))
                }
              </FatherList>
            ))
          }
        </tbody>
      </table>
      
      <div>
        <label> Proveedor</label>
        <input className="border-black" type="text" value={proveedor} onChange={(e:ChangeEvent<HTMLInputElement>)=>setProveedor(e.target.value)}/>
      </div>
      <div className="mt-10 w-full px-20 flex justify-between">
        <button className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-10 border  rounded">
          Cancelar
        </button>
        <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-10 border  rounded"
        type='submit'
        onClick={ ()=> onSubmit()}
        >
          Crear
        </button>
      </div>

  
    </div>
  )
}
