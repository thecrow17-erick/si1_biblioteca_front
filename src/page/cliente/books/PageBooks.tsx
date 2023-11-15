import { Loading } from '../../../components/Loading';
import { BookCard } from '../../../components/cards';
import {useQueryCliente} from '../../../hooks/api/books'


export const PageBooks = () => {
  const {queryBooks} = useQueryCliente();
  return (queryBooks.isFetching)
  ?(<Loading/>)
  :(
    <>
      <div className="md:p-5 grid grid-cols-2 md:grid-cols-3 gap-4">
        {
          queryBooks.data?.allLibros.map((book)=>(
            <BookCard cantidad={book.almacen.cantidad} imagen={book.imagen} precio={book.precio} titulo={book.titulo} key={book.id}/>
          ))
        }
      </div>
    </>
  )
}
