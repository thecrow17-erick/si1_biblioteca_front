//Crear Nota Alquiler
export interface ICreateNotaAlquiler {
    fechaAlquiler: string,
    fechaDevolucion: string,
    precio: number
}

export interface INotaAlquiler {
    id: number,
    fechaAlquiler: String,
    precio: number,
    fechaDevolucion: String,
    createdAt: string,
    updatedAt: string
}