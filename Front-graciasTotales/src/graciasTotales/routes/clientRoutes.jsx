import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CanjePage, PutPoints, Home } from '../pages/'

export const ClientRoutes = ({ onSidebarClose }) => {
    return (
        <div onClick={onSidebarClose}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/canjes' element={<CanjePage />} />
                <Route path='/putPoints/:points' element={<PutPoints />} />
                <Route path='/*' element={<Navigate to='/' />} />
            </Routes>
        </div>
    )
}
