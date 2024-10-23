export interface codes {
    cantidad: string,
    codigo: string
}


export interface CodesCreateResponse {
    ok: boolean;
    puntos: Puntos;
}

export interface Puntos {
    cantidad: string;
    codigo: string;
    id: string;
}

