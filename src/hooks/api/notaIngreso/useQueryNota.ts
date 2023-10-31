import { useQuery } from "@tanstack/react-query";
import { listNotas } from "../../../query/notaIngreso";



export const useQueryNota = () => {
  const querysNotas = useQuery(["notas-ingreso"],
    ()=> listNotas(),{
      staleTime: 1000 * 60 * 60
    }
  )
  return {
    querysNotas
  }
}
