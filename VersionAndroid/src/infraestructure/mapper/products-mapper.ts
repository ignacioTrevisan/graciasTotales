import { products } from "../../core/entities/product.entities";
import { productosResponse } from "../interfaces/products-response";

export class ProductosMapper {

    static fromProductsDbToEntity(result: productosResponse, id: string): products {
        return {
            id: id,
            Imagenes: result.Imagenes,
            descripcion: result.descripcion,
            disponible: result.disponible,
            titulo: result.titulo,
            valor: result.valor,
        }
    }
}
