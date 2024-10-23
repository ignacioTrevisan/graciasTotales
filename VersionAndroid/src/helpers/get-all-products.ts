import { getDocs, collection } from 'firebase/firestore';
import { FireBaseDB } from '../firebase/config';
import { productosResponse } from '../infraestructure/interfaces/products-response';
import { ProductosMapper } from '../infraestructure/mapper/products-mapper';
import { products } from '../core/entities/product.entities';

export const OnGetAllProducts = async (): Promise<products[]> => {
    const collectionRef = collection(FireBaseDB, 'productos');
    const docs = await getDocs(collectionRef);
    const products: products[] = [];

    docs.forEach(doc => {
        const product = ProductosMapper.fromProductsDbToEntity(doc.data() as productosResponse, doc.id);
        products.push(product);
    })
    return products;
}