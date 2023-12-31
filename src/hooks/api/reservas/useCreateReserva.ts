import { useMutation } from "@tanstack/react-query"
import { postReservas } from "../../../query/reservas";

export const useCreateReserva = () => {
  const mutationReserva = useMutation({
    mutationFn: postReservas
  })
  return {
    mutationReserva
  };
};