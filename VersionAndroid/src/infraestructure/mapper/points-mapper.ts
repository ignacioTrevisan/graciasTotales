import { Points } from '../../core/entities/user.entities';
import { PointsResponse } from '../interfaces/points-response';
export class PointsMapper {
    static FromPointsToEntity(result: PointsResponse): Points {
        return {
            cantidad: result.cantidad,
            ok: result.ok,
            msg: result.msg,
        }
    }
}