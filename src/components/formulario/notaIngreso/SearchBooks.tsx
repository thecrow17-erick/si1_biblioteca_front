import { AiOutlineSearch } from "react-icons/ai"
import { AllLibro, ISearchBook } from "../../../interface"
import { ChangeEvent, FC, useState } from "react"


interface props{
  books: Array<AllLibro>,
  onBookClick: (data:ISearchBook)=>void
}

export const SearchBooks:FC<props> = ({books,onBookClick}) => {
  const [activateSearch, setActivateSearch] = useState<Array<ISearchBook>>([]);
  const [titulo,setTitulo] = useState<string>("");
  const handleSearch = ({target}: ChangeEvent<HTMLInputElement>)=>{
    setTitulo(target.value)
    if(target.value === ""){
      setActivateSearch([]);
      return false
    }
    setActivateSearch(books.filter(b => {
      if(b.titulo.includes(target.value)){
        return {
          id: b.id,
          titulo: b.titulo,
        }
      }
    } ).slice(0,8))
  }
  return (
    <>
      <div className='w-2/3 relative'>
        <div className="relative">
          <input 
          className="w-4/5 px-3 py-2.5 rounded-full border border-blue-gray-200"
          placeholder='type here'
          type="search" onChange={handleSearch} value={titulo}/>
          <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-slate-900 rounded-xl p-3">
            <AiOutlineSearch/>
          </button>
        </div>

        {
          activateSearch.length > 0 &&
          (
            <div
            className="absolute top-20 p-4 bg-slate-800 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2"
            >
              {
                activateSearch.map((value,i)=>(
                  <div key={i} className="cursor-pointer hover:bg-slate-600 hover:rounded-xl p-1" onClick={()=>onBookClick({id: value.id, titulo: value.titulo})}>
                    <span onClick={()=> {
                        setTitulo(value.titulo)
                        setActivateSearch([]);
                      }
                    }>{value.titulo}</span>
                  </div>
                ))
              }
            </div>
          )
        }
      </div>
    </>
  )
}
