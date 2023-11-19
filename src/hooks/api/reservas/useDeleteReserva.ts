import { useMutation } from "@tanstack/react-query"
import { deleteReserva } from "../../../query/reservas";

export const useDeleteReserva = () => {
  const mutationReserva = useMutation({
    mutationFn: deleteReserva
  })
  return {
    mutationReserva
  };
};