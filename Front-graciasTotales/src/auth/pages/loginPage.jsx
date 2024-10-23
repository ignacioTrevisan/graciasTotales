import React, { useState } from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import { Button, IconButton, Link, TextField } from '@mui/material';
import { Facebook, GitHub, Google, Password } from '@mui/icons-material';
import { AuthLayout } from '../layout/authLayout';
import { UseAuthSlice } from '../hooks/useAuthStore';
import { UseForm } from '../../hook/useForm';

const formdata = {
    Email: '',
    Contraseña: '',
}
const formValidations = {
    Email: [(value) => (value.includes('@gmail') || value.includes('@hotmail') || value.includes('@outlook')) && value.includes('.'), 'Ingrese un correo electronico valido'],
    Contraseña: [(value) => value.length > 0, 'Ingrese una contrasña'],
}

export const LoginPage = () => {

    const { startSignInWithGoogle, startLoginWithEmailAndPassword } = UseAuthSlice();

    const [enviado, setEnviado] = useState(false);
    const { Email, Contraseña, EmailValid, ContraseñaValid, isFormValid, OnInputchange, formState } = UseForm(formdata, formValidations);

    const submit = (event) => {
        setEnviado(true);
        event.preventDefault();
        if (!isFormValid) return;
        startLoginWithEmailAndPassword(Email, Contraseña);
    }
    return (

        <AuthLayout title='Iniciar' >

            <div className="containerInput">
                <form onSubmit={submit}>

                    <TextField sx={{
                        marginTop: '20px', width: '60%', alignSelf: 'center', boxShadow: ' 0 4px 8px rgba(0, 0, 0, 0.5)', '& .MuiInputBase-input': {
                            color: '#333333',
                        }
                    }}
                        label="Email"
                        value={Email}
                        name='Email'
                        onChange={OnInputchange}
                        error={EmailValid !== null && enviado ? true : false}
                        helperText={enviado && EmailValid ? EmailValid : ""}
                    />
                    <TextField
                        sx={{ marginTop: '20px', width: '60%', alignSelf: 'center', boxShadow: ' 0 4px 8px rgba(0, 0, 0, 0.5)' }}
                        label="Contraseña"
                        type='password'
                        value={Contraseña}
                        name='Contraseña'
                        onChange={OnInputchange}
                        error={ContraseñaValid !== null && enviado ? true : false}
                        helperText={enviado && ContraseñaValid ? ContraseñaValid : ""}
                    />
                    <div className="button-form" >
                        <Button sx={{ marginTop: '20px', color: '#333333', border: '1px solid #333333', width: '90px' }} type='submit'>
                            Iniciar
                        </Button>
                    </div>
                    <div className="icon-form" >
                        <IconButton onClick={startSignInWithGoogle} sx={{ color: '#333333' }} ><Google /></IconButton>
                        <IconButton sx={{ color: '#333333' }}><GitHub /></IconButton>
                        <IconButton sx={{ color: '#333333' }}><Facebook /></IconButton>
                    </div>
                </form>


                <p style={{ position: 'absolute', right: '0px', bottom: '0px' }}>¿Aún no tienes cuenta? <Link component={LinkRouter} to='/auth/register' color='inherit'>Registrate </Link></p>
            </div>
        </AuthLayout>

    )
}
