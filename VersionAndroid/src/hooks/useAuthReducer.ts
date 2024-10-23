import { LogInWithEmailPassword, LogOut } from "../firebase/provider"
import { authStore, user } from '../presentation/store/auth-store';
import { Navigation } from '../presentation/navigation/navigation';
import { useNavigation } from "@react-navigation/native";

export const UseAuthReducer = () => {
    const { navigate } = useNavigation();
    const setLogged = authStore(state => state.setLogged);
    const unlogue = authStore(state => state.unlogue);
    const user = authStore(state => state.user);



    interface LoginProps {
        email: string,
        password: string
    }
    const startLogginWithEmailAndPassword = async ({ email, password }: LoginProps) => {
        const resp = await LogInWithEmailPassword(email, password);
        if (resp.ok) {
            const { ok, ...rest } = resp;
            setLogged({
                email: rest.email ?? '',
                photoURL: rest.photoURL ?? '', // photoURL en lugar de email
                displayName: rest.displayName ?? '',
                uid: rest.uid ?? ''
            });
            // Navigation.navigate('Home')
        }
    }
    const startLogOut = async () => {
        console.log('hola')
        const resp = await LogOut();

        console.log(resp);
        unlogue();

        navigate('Login' as never)
        console.log('listo')
        console.log('Estado del usuario después de unlogue:', authStore.getState().user); // Aquí chequeamos el estado directamente

        console.log('sdaasdasdsadas', user);

    }
    return {
        startLogginWithEmailAndPassword,
        startLogOut
    }
}