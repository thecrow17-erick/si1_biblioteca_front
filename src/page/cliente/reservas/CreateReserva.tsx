import { useState } from 'react';
import { Loading } from '../../../components/Loading';
import { SearchBooks } from '../../../components/formulario/notaIngreso';
import {useQueryCliente} from '../../../hooks/api/books'
import { ISearchBook } from '../../../interface';
import {SubmitHandler, useForm} from 'react-hook-form'
import { IBodyReserva } from '../../../interface/reserva';
import { AlertError } from '../../../components/alerts';
import { useCreateReserva } from '../../../hooks/api/reservas';

export const CreateReserva = () =>{
  const {register,handleSubmit, formState:{errors}} = useForm<IBodyReserva>()
  const {queryBooks} = useQueryCliente();
  const [libroSearch, setLibroSearch] = useState<ISearchBook>();
  const {mutationReserva} = useCreateReserva();
  const onBookClick = (data: ISearchBook)=>{
    setLibroSearch({
      id: data.id,
      titulo: data.titulo,
    })
  }
  const onSubmit: SubmitHandler<IBodyReserva> = ({fecha_reserva})=>{
    console.log(fecha_reserva);
    if(!libroSearch) console.log("ponga un libro");
    const token = localStorage.getItem("auth-token")!;
    const body = {
      libroId: libroSearch!.id!,
      fecha_reserva: `${fecha_reserva}T00:00:00.000Z`,
    }
    mutationReserva.mutate({body,token},{
      onSettled(data, error, variables, context) {
        console.log(data);
        console.log(error)
        console.log(variables)
        console.log(context)
      },
    })
  } 
  return (queryBooks.isFetching || mutationReserva.isLoading )
  ?(<Loading/>)
  :
    <div className="xl:px-5 xl:pt-10 ">
      <div className="xl:w-1/3 w-full mt-5">
        <SearchBooks books={queryBooks.data?.allLibros || []} onBookClick={onBookClick}/>
      </div>
      <div className="flex justify-center items-center md:p-0 p-3">
        <form className='w-2/4' onSubmit={handleSubmit(onSubmit)}>
          <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Id libro: {libroSearch?.id}</label>
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha de Reserva</label>
            <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("fecha_reserva",{
              required:{
                value: true,
                message: "Ingrese una fecha valida"
              }
            })}
            />
            {
              errors.fecha_reserva && 
              (<AlertError msg={errors.fecha_reserva.message} />)
            }
          </div>
          <button
            type="submit"
            className="inline-block w-full rounded-lg mt-5 bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
            Send Enquiry
          </button>
        </form>
      </div>
    </div>
} 

