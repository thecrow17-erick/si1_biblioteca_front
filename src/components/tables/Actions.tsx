import { FC } from "react"


interface props {
  id:number,
  disabled?: boolean,
  onUpdate: (id:number)=>void,
  onDelete: (id:number)=>void,
}

export const Actions:FC<props> = ({disabled,onDelete,onUpdate,id}) => {
  return (
    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
      <span className="inline-block w-1/3 md:hidden font-bold">Actions: </span>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded"
      onClick={()=> onUpdate(id)}
      disabled={disabled}
      >Edit</button>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"
        onClick={()=>onDelete(id)}
        disabled={disabled}
      >
        Delete
      </button>
    </td>
  )
}
