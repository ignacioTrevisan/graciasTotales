export interface CanjesResponse {
    ok: boolean;
    busqueda: Busqueda[];
}

export interface Busqueda {
    uid: string;
    idProducto: string;
    titulo: string;
    reclamado: boolean;
    id: string;
}
