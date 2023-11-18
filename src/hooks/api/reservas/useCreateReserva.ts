import { useMutation } from "@tanstack/react-query"
import { postReservas } from "../../../query/reservas";
import { IBodyReservaAxios } from "../../../interface/reserva";

export const useCreateReserva = () => {
  const mutationReserva = useMutation({
    mutationFn: ({ Body, token }: { Body: IBodyReservaAxios, token: string }) => postReservas(Body, token)
  })
  return {
    mutationReserva
  };
};