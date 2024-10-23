import React, { useEffect } from 'react'
import { Link as LinkRouter, useParams } from 'react-router-dom'
import { UseAuthSlice } from '../../auth/hooks/useAuthStore';
import { Link } from '@mui/material';
import Swal from 'sweetalert2';

export const PutPoints = () => {
    const { startPutPoints } = UseAuthSlice();
    const params = useParams();
    const { user } = UseAuthSlice();
    const body = {
        uid: user.uid,
        cantidad: params.points,
        tipo: 'suma'
    }
    console.log("hjoa")
    useEffect(() => {




        Swal.fire({
            title: "Pidale el codigo de confirmación al encargado",
            input: "text",
            inputAttributes: {
                autocapitalize: "off"
            },

            confirmButtonText: "Confirmar",
            showLoaderOnConfirm: true,
            preConfirm: async () => {

            },

        }).then((result) => {
            if (result.isConfirmed) {

                confirmar({ body, value: result.value })

            }
        });
    }, [])

    const confirmar = async ({ body, value }) => {
        const data = await startPutPoints(body, value)
        if (data.ok) {
            console.log("ok")
            Swal.fire({
                title: "¡Canjeado!",
                text: 'Felicidades, los puntos fueron agreados correctamente a tu cuenta!',
                icon: "success"
            });
        }
    }

    return (
        <p style={{ position: 'absolute', right: '0px', bottom: '0px' }}>¿Aún no tienes cuenta? <Link component={LinkRouter} to='/home' color='inherit'>Registrate </Link></p>
    )
}
