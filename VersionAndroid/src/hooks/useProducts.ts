import { addDoc, collection } from "@firebase/firestore";
import { FireBaseDB } from "../firebase/config";

interface producto {
    Imagenes: string[],
    titulo: string,
    descripcion: string,
    valorEnPuntos: string,
}


export const UseProducts = () => {

    const startUploadProducts = async ({ Imagenes, titulo, descripcion, valorEnPuntos }: producto): Promise<boolean> => {
        // const photoURL = await UploadingPhotos(Imagenes);

        const body = {
            Imagenes,
            titulo,
            valor: valorEnPuntos,
            descripcion,
            disponible: true,
        };
        try {
            const productosRef = collection(FireBaseDB, 'productos');
            const nuevoDocRef = await addDoc(productosRef, body); console.log("Documento creado con ID: ", nuevoDocRef.id);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }

    }

    return {
        startUploadProducts

    }
}