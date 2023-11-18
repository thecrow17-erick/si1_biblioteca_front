import { FC } from 'react';
interface props{
  currentPage : number,
  setCurrentPage: (current: number)=>void,
  total: number
}


export const Pagination:FC<props> = ({currentPage,total,setCurrentPage}) => {
  const nextPage = ()=>{
    if(currentPage <= total){
      setCurrentPage(currentPage + 10);
      console.log(currentPage);
      if(currentPage > total){
        console.log(currentPage);
        setCurrentPage(total)
      }
    }
  }
  const prevPage = ()=>{
    if(currentPage >= 0){
      setCurrentPage(currentPage - 10);
      console.log(currentPage);
      if(currentPage < 0){
        console.log(currentPage);
        setCurrentPage(0);
      }
    }
  }
  return (
    <div className="inline-flex mt-2 xs:mt-0">
      <button onClick={()=>prevPage()}
          className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
          Prev
      </button>
      <button onClick={()=>nextPage()}
          className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
          Next
      </button>
    </div>
  )
}
