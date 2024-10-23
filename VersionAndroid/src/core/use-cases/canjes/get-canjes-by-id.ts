import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { Busqueda, CanjesResponse } from "../../../infraestructure/interfaces/canjes-response";

export const GetCanjesByID = async (fetcher: HttpAdapter, uid: string): Promise<Busqueda[]> => {
    try {
        const canjes = await fetcher.post<CanjesResponse>(`canjes/obtenerPorUsuario`, { uid: uid });
        console.log(canjes)
        return canjes.busqueda.map((c) => c);
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching all points');
    }
}