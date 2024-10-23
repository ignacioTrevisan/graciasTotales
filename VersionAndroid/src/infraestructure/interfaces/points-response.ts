export interface PointsResponse {
    cantidad: number;
    ok: boolean;
    body: Body;
    uid: string;
    msg: string;
}

export interface Body {
    uid: string;
}
