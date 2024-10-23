export interface CodesResponse {
    ok: boolean;
    puntos: Punto[];
}

export interface Punto {
    cantidad: string;
    codigo: string;
    id: string;
}
