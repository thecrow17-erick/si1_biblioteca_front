// Generated by https://quicktype.io
//lista de libros
export interface IListBooks {
  total:     number;
  allLibros: AllLibro[];
}

export interface AllLibro {
  id:               number;
  titulo:           string;
  edicion:          string;
  autor:            string;
  fechaLanzamiento: string;
  precio:           string;
  almacen:          Almacen;
}

export interface Almacen {
  id:       number;
  cantidad: number;
}

//crear libro
export interface ICreateBook {
  titulo: string,
  autor: string,
  edicion: string,
  precio: number,
  fechaLanzamiento: string,
  img: File
}
export interface IBook{
    id: number,
		titulo: string,
		autor: string,
		precio: string,
		edicion: string,
		fechaLanzamiento: string,
		imagen: string,
		createdAt: string,
		updatedAt: string
}


//search books
export interface ISearchBook {
  id: number,
  titulo: string,
}
