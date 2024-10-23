import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { CodesResponse } from "../../../infraestructure/interfaces/codes-response";
import { CodesMapper } from "../../../infraestructure/mapper/codes-mapper";
import { codes, CodesCreateResponse } from "../../entities/codes.entities";

export const CreateNewCode = async (fetcher: HttpAdapter, cantidad: number, codigo: string) => {
    try {
        const data = await fetcher.post<CodesCreateResponse>(`points/crear`, { cantidad: cantidad, codigo: codigo });
        console.log(data);
        return {
            ok: true
        }
    } catch (error) {
        console.log('Error creating points: ' + error);
        return {
            ok: false
        }
        throw new Error('');
    }
}