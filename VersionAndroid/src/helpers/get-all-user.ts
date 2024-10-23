import { collection, getDocs } from "@firebase/firestore";
import { FireBaseDB } from "../firebase/config";
import { FirebaseUser } from "../core/entities/FirebaseUser.entities";

export const getAllUsers = async (): Promise<FirebaseUser[]> => {


    const collectionRef = collection(FireBaseDB, 'usuarios');
    const docs = await getDocs(collectionRef);
    const users: FirebaseUser[] = [];

    docs.forEach(doc => {
        users.push({ ...doc.data() as FirebaseUser });
    })
    return users;
}