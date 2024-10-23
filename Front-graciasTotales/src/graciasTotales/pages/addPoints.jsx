import React, { useEffect, useState } from 'react';
import { UsePoints } from '../hooks/usePoints';
import Swal from 'sweetalert2';
import './addPoints.css';

export const AddPoints = () => {
    const { startLoadPoints, startLoadAllPoints } = UsePoints();
    const [qrMode, setQrMode] = useState(true);
    const [dataPuntos, setdataPuntos] = useState({ puntos: [] });
    const [isAnimating, setIsAnimating] = useState(false);

    const generarPuntos = (points) => {
        Swal.fire({
            title: "Ingrese un codigo confirmación para el cliente",
            input: "text",
            inputAttributes: {
                autocapitalize: "off"
            },
            customClass: {
                container: 'my-swal-container',
                title: 'my-swal-title',
                content: 'my-swal-content',
                confirmButton: 'my-swal-confirm-button'
            },
            confirmButtonText: "Confirmar",
            showLoaderOnConfirm: true,
            preConfirm: async () => { }
        }).then((result) => {
            if (result.isConfirmed) {
                confirmar({ puntos: points, value: result.value });
            }
        });
    };

    const confirmar = async ({ puntos, value }) => {
        const resp = await startLoadPoints({ puntos, codigo: value });
        if (resp.ok === true) {
            Swal.fire({
                title: "¡Genial!",
                text: `Los ${puntos} puntos ya están disponibles para canjear, el código es: '${value}'`,
                icon: "success"
            });
        }
    };

    useEffect(() => {
        const buscar = async () => {
            const { data } = await startLoadAllPoints();
            setdataPuntos(data);
        };
        buscar();
    }, [qrMode]);

    const handleToggle = () => {
        if (isAnimating) return; // Evitar múltiples clics durante la animación

        const element = document.querySelector('.containerBoxAdmin');
        setIsAnimating(true);

        // Primero, animar opacidad y altura para cerrar
        element.classList.add('collapsed');

        setTimeout(() => {
            // Cambiar qrMode después de la animación de cierre
            setQrMode(!qrMode);

            // Quitar la clase collapsed para reiniciar la altura
            element.classList.remove('collapsed');

            setTimeout(() => {
                // Animar opacidad y altura para abrir después de un pequeño retraso
                setIsAnimating(false);
            }, 100); // Esperar un poco antes de reiniciar la altura
        }, 700); // Tiempo suficiente para completar la animación de cierre
    };

    return (
        <div className="boxAdmin animate__animated animate__fadeIn">
            <div className="containerBoxAdmin">
                {qrMode ? (
                    < >
                        <h1 style={{ marginBottom: '40px', marginTop: '20px', fontFamily: 'Rock Salt, cursive' }}>Generar QR</h1>
                        <button className='btn btn-outline-info generateQRDos' onClick={() => generarPuntos(100)}>
                            <i className='fas fa-qrcode'></i>
                            &nbsp;
                            <span>100 puntos</span>
                        </button>
                        <button className='btn btn-outline-info generateQRDos' onClick={() => generarPuntos(80)}>
                            <i className='fas fa-qrcode'></i>
                            &nbsp;
                            <span>80 puntos</span>
                        </button>
                        <button className='btn btn-outline-info generateQRDos' onClick={() => generarPuntos(60)}>
                            <i className='fas fa-qrcode'></i>
                            &nbsp;
                            <span>60 puntos</span>
                        </button>
                        <button className='btn btn-outline-info generateQRDos' onClick={() => generarPuntos(40)}>
                            <i className='fas fa-qrcode'></i>
                            &nbsp;
                            <span>40 puntos</span>
                        </button>
                        <p style={{ textDecoration: 'underline', cursor: 'pointer', position: 'relative', bottom: '0px', marginTop: '20px' }} onClick={handleToggle}>Ver puntos disponibles</p>
                    </>
                ) : (
                    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'auto' }}>
                        <h1 style={{ marginBottom: '40px', position: 'absolute', top: '0px', marginTop: '20px', fontFamily: 'Rock Salt, cursive' }}>Codigos disponibles</h1>
                        {dataPuntos.puntos.map((d, index) => (
                            <div style={{ marginTop: '10px' }} key={index}>
                                <li>Cantidad: {d.cantidad}, Código: {d.codigo}</li>
                            </div>
                        ))}
                        <p style={{ textDecoration: 'underline', cursor: 'pointer', position: 'absolute', bottom: '0px' }} onClick={handleToggle}>Generar Qr</p>
                    </div>
                )}
            </div>
        </div>
    );
};