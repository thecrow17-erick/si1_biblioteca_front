import { useState, ChangeEvent } from 'react';
import { Loading } from '../../../components/Loading';
import { BookCard } from '../../../components/cards';
import {useQueryCliente} from '../../../hooks/api/books'
import { AllLibro } from '../../../interface';
import { Pagination } from '../../../components/button';


export const PageBooks = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState("")
  const {queryBooks} = useQueryCliente();


  const filterBooks = ():Array<AllLibro> | undefined =>{
    if(search.length === 0){
      return queryBooks.data?.allLibros.slice(currentPage,currentPage + 10);
    }
    //si hay algo en el search
    const filtered = queryBooks.data?.allLibros.filter(book => book.titulo.includes(search));
    return filtered!.slice(currentPage,currentPage + 10);
  }

  const onChangeSearch = ({target} :ChangeEvent<HTMLInputElement>)=>{
    setCurrentPage(0);
    setSearch(target.value);
  }

  return (queryBooks.isFetching)
  ?(<Loading/>)
  :(
    <>
    <div className="p-5">
      <input placeholder="buscar libros" className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" 
      type="search" value={search} onChange={onChangeSearch} />
    </div>
      <div className="md:p-5 grid grid-cols-2 md:grid-cols-3 gap-4">
        {
          filterBooks()?.map((book)=>(
            <BookCard cantidad={book.almacen.cantidad} imagen={book.imagen} precio={book.precio} titulo={book.titulo} key={book.id}/>
          ))
        }
      </div>
      <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
        <Pagination currentPage={currentPage} total={queryBooks.data!.total} setCurrentPage={setCurrentPage} />
      </div>
    </>
  )
}
