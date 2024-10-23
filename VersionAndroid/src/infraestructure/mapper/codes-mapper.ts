import { codes } from "../../core/entities/codes.entities";
import { Punto } from "../interfaces/codes-response";

export class CodesMapper {

    static fromCodesToEntity(result: Punto): codes {
        return {
            cantidad: result.cantidad,
            codigo: result.codigo

        }
    }
}
