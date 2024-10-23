import React, { useEffect } from 'react'
import { UseAuthSlice } from '../../auth/hooks/useAuthStore';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../ui/navbar';
import { UseProducts } from '../hooks/useProducts';
import { ClientRoutes } from './clientRoutes';
import { AdminRoutes } from './adminRoutes';
import { SaveUserFirebase } from '../hooks/useUserFirestore';
import { Sidebar } from '../ui/sidebar';
import { UseUiStore } from '../hooks/useUiStore';
import { SidebarAdmin } from '../ui/sidebarAdmin';

export const GraciasRoutes = () => {


    const { user, setPointsUser, startGetPoints, startGetCanjes, startlogOut } = UseAuthSlice();


    const { getProducts, products } = UseProducts();
    const { onSidebarOpen, onSidebarClose } = UseUiStore();

    //Funcion para cargar puntos
    const getdata = async () => {
        let data = await startGetPoints(user.uid);
        setPointsUser(data.cantidad);
    }

    useEffect(() => {

        //Se traen los productos disponibles para canjear
        getProducts();
        //Cargo puntos de usuario
        getdata();
        //Cargo el usuario a la base de datos de firebase
        iniciarUsuario();
    }, [])

    //Funcion para cargar el usuario a la base de datos de firebase
    const iniciarUsuario = async () => {
        const resp = await SaveUserFirebase(user.uid, user.displayName)
        if (!resp.ok) startlogOut();
    }
    useEffect(() => {
        if (products.length > 0) {
            //Se buscan los canjes del usuario
            startGetCanjes(user.uid);
        }
    }, [products])





    return (
        <>

            {user.modo === 'admin'
                ?
                <>
                    <SidebarAdmin />

                    <Routes>

                        <Route
                            path='/*'
                            element={<AdminRoutes />}
                        />
                    </Routes>

                </>
                :
                <>

                    <Sidebar />

                    <Navbar onSidebarOpen={onSidebarOpen} />
                    <Routes>

                        <Route path='/*' element={<ClientRoutes onSidebarClose={onSidebarClose} />} />

                    </Routes>
                </>
            }

        </>
    )
}
