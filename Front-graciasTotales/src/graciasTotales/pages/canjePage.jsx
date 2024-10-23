import React from 'react'
import './canjePage.css'
import { UseAuthSlice } from '../../auth/hooks/useAuthStore'
import { Canje } from '../components/canje';

export const CanjePage = () => {
    const { canjes } = UseAuthSlice();

    return (
        <>
            <div className="titulo animate__animated animate__fadeIn">

                <h1 style={{ marginTop: '60px' }}>Tus canjes</h1>
                {canjes.map((c, index) => {

                    return (<Canje c={c} index={index} key={index} />)

                })}
            </div>
        </>
    )
}
