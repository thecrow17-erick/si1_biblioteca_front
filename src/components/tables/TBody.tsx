import { ITUsers } from "../../interface/user";

type props = {
  data: Array<ITUsers> | undefined
}


export const TBody = ({data}: props) => {
  const handleDelete = (id:number)=>{
    console.log(id);
    
  }
  return (
    <tbody className="block md:table-row-group">
            {
              data?.map((b,i)=>(
                (i % 2=== 0)?
                (<tr key={i} className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                  {
                    Object.entries(b).map(([key,value],idx)=>(
                      <td key={idx} className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                        <span className="inline-block w-1/3 md:hidden font-bold">{key+":  "}</span>
                        {value}
                        </td>
                    ))
                  }
                  <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">Edit</button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"
                      onClick={()=>handleDelete(b.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>):
                (<tr key={i} className="bg-white border border-grey-500 md:border-none block md:table-row">
                  {
                    Object.entries(b).map(([key,value],idx)=>(
                      <td key={idx} className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                        <span className="inline-block w-1/3 md:hidden font-bold">{key+":  "}</span>
                        {value}
                        </td>
                    ))
                  }
                  <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">
                      Edit
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"
                    onClick={()=>handleDelete(b.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>)              
              ))
            }
        </tbody>
  )
}
