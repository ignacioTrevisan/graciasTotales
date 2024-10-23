import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { CodesResponse } from "../../../infraestructure/interfaces/codes-response";
import { CodesMapper } from "../../../infraestructure/mapper/codes-mapper";
import { codes } from "../../entities/codes.entities";

export const GetAllCodes = async (fetcher: HttpAdapter): Promise<codes[]> => {
    try {
        const codes = await fetcher.get<CodesResponse>(`points/ver`, { params: {} });
        return codes.puntos.map(punto => CodesMapper.fromCodesToEntity(punto));
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching all points');
    }
}