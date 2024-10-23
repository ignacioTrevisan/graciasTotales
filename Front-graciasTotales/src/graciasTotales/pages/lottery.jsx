import React, { useEffect, useState } from 'react';
import './lottery.css';
import { Button } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Confetti } from '../components/confetti';



export const Llottery = () => {

    const [confettiEfecto, setConfettiEfecto] = useState(false)
    const nombresAlAzar = [
        "Alejandro", "Beatriz", "Carlos", "Diana", "Esteban",
        "Fernanda", "Gabriel", "Hilda", "Ignacio", "Julia",
        "Karla", "Luis", "Mariana", "Nicolas", "Olivia",
        "Pablo", "Quintina", "Ricardo", "Sandra", "Tomás",
        "Úrsula", "Valeria", "Walter", "Ximena", "Yolanda", "Zacarías"
    ];
    const nombresMultiplicados = Array(10).fill(nombresAlAzar).flat();

    function numeroAlAzar(max) {
        return Math.floor(Math.random() * (max + 1));
    }

    const [efecto, setEfecto] = useState(0);
    const [rayitas, setRayitas] = useState(false);


    const sortear = () => {
        setRayitas(true);
        const ganador = numeroAlAzar(nombresAlAzar.length - 1);
        const vueltas = cantidadDeVueltas();
        const restante = ((nombresAlAzar.length - 1) * 60) - (ganador * 60);
        const ultPaso = (vueltas - 1) * 60;
        setEfecto(((ganador * 60) * vueltas) + (restante) * (vueltas - 1) + ultPaso);

        console.log(
            'ganador', (ganador * 60) * vueltas,
            'vueltas:', vueltas,
            'restante:', restante * vueltas,
            'ultPaso:', ultPaso
        );
        console.log('ganador:', nombresAlAzar[ganador], ganador, 'efecto:', efecto);
        setTimeout(() => {

            spinAndSelectWinner(nombresAlAzar[ganador])
            setConfettiEfecto(true);
        }, 5900);

    }







    const cantidadDeVueltas = () => {
        let num = 0;
        while (num < 4) {
            num = Math.floor(Math.random() * 10);
        }
        console.log(num);
        return num;

    }


    const spinAndSelectWinner = (nombre) => {
        toast.success(`¡Felicidades ${nombre}! Has ganado el sorteo.`, {
            position: "top-center",
            style: {
                border: '1px solid #4CAF50',
                padding: '16px',
                color: '#4CAF50',
                borderRadius: '8px',
            },
            iconTheme: {
                primary: '#4CAF50',
                secondary: '#FFFAEE',
            },
        });
    };


    return (
        <>
            {
                confettiEfecto ?
                    <Confetti />
                    : <></>
            }
            <div className="bodyLottery">
                <h1 style={{ fontFamily: 'Rock Salt, cursive', color: '#333333', fontSize: '24px' }} id='titulo'>Sorteo mensual</h1>                <ToastContainer />

                <div className="containerLottery">
                    <div className="ganador animate__animated animate__bounceIn" style={{
                        position: 'absolute', zIndex: '200', height: '100%',
                        display: `${rayitas ? 'flex' : 'none'}`, alignItems: 'center', justifyContent: 'space-around', width: '100%'

                    }}><p>-------</p> <p>-------</p></div>
                    < div className="nombresContainer" style={{
                        top: `-${efecto - 160}px`,
                        transition: 'top 5.9s cubic-bezier(0.42, 0, 0.58, 1.02)'
                    }}>
                        {nombresMultiplicados.map((n, index) => (
                            <div key={index} className="nombres" style={{ height: '60px', fontSize: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                {n}
                            </div>
                        ))}
                    </div>
                </div>
                <Button onClick={sortear}>Sortear</Button>

            </div >
        </>
    );
}
