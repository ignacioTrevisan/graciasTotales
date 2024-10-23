import React from 'react'
import './layout.css'



export const AuthLayout = ({ children, title = '' }) => {
    return (
        <>
            <div className="box">

                <h1 style={{ fontFamily: 'Rock Salt, cursive', color: '#f3f8c8b2' }} id='titulo'>Gracias Totales</h1>
                <div className="containerBox">
                    <h1 style={{ marginTop: '20px', color: '#333333' }} id='subtitulo'>{title}</h1>
                    {children}
                </div>
            </div>
        </>
    );
}
