import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { PointsResponse } from "../../../infraestructure/interfaces/points-response";
import { CodesMapper } from "../../../infraestructure/mapper/codes-mapper";
import { PointsMapper } from "../../../infraestructure/mapper/points-mapper";
import { Points } from "../../entities/user.entities";

export const GetPointsById = async (fetcher: HttpAdapter, uid: string): Promise<Points> => {
    try {
        const points = await fetcher.post<PointsResponse>(`puntosUsuarios/obtener`, { uid: uid });
        return PointsMapper.FromPointsToEntity(points);
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching points by uid');
    }
}