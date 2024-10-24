import './navbar.css';
import { UseAuthSlice } from '../../auth/hooks/useAuthStore';
import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import { UseUiStore } from '../hooks/useUiStore';


export const Navbar = ({ onSidebarOpen }) => {


    const { user, points, startlogOut, canjes } = UseAuthSlice();
    const { sidebarOpen } = UseUiStore();
    const cantidad = useMemo(() => {
        return canjes.filter(c => c.reclamado === false)
    }, [canjes])



    const abrirSideBar = () => {
        onSidebarOpen();
        console.log("boton de navbar")
    }

    return (
        <div className="navbar">
            <div className="derec">
                <button className='btn btn-outline-info' style={{ position: 'absolute' }} id='user'>
                    <i className='fas fa-user  '></i>
                    &nbsp;
                    &nbsp;
                    <span>{user.displayName} : {points} puntos</span>
                </button>
                <button className='btn btn' style={{ alignItems: 'center', display: `${sidebarOpen ? 'none' : ''}` }} id='menu' onClick={abrirSideBar}>
                    <i className='fa-solid fa-bars'></i>
                    &nbsp;
                    &nbsp;

                </button>
            </div>
            <div className="derecha" >

                <Link to='/' className='espacio'>
                    <button className='btn btn-outline-info' >
                        <i className='fas fa-home '></i>
                        &nbsp;
                        <span>Inicio</span>
                    </button>
                </Link>
                &nbsp;

                <Link to='/canjes' className='espacio'>
                    <button className='btn btn-outline-info' >
                        <i className='fas fa-shopping-cart '></i>
                        &nbsp;
                        <span>Tus canjes ({cantidad.length})</span>
                    </button>
                </Link>
                &nbsp;
                <Link to='/' className='espacio'>
                    <button className='btn btn-outline-info'  >
                        <i className='fas fa-heart'></i>
                        &nbsp;
                        <span>Sobre nosotros</span>
                    </button>
                    &nbsp;
                </Link>

                <button className='btn btn-outline-info espacio' onClick={startlogOut}>
                    <i className='fas fa-sign-out-alt'></i>
                    &nbsp;
                    <span>Salir</span>
                </button>
            </div>
        </div>
    )
}
