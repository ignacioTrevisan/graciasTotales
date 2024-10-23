import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { FireBaseDB } from "../../firebase/config";

export const SaveUserFirebase = async (uid, displayName) => {
    const documento = {
        uid, displayName
    }
    try {
        const docRef = doc(FireBaseDB, "usuarios", uid);
        await setDoc(docRef, documento);

        return { ok: true }
    } catch (error) {
        console.error("Error creando documento:", error);
        return { ok: false }
    }
}

export const loadUserFirebase = async () => {
    const collectionRef = collection(FireBaseDB, `/usuarios`);
    const docs = await getDocs(collectionRef);
    const notes = [];
    docs.forEach(doc => {
        notes.push({ id: doc.id, displayName: doc.data().displayName });
    });
    return notes;
}