
import { Navigate, Route, Routes } from "react-router-dom";

import { AuthRoutes } from "./auth/routes/authRoutes";
import { GraciasRoutes } from "./graciasTotales/routes/graciasRoutes";
import { UseAuthSlice } from "./auth/hooks/useAuthStore";
import { useEffect } from "react";



function App() {

  const { checkStatus, status } = UseAuthSlice();

  useEffect(() => {
    checkStatus();
  }, [])




  if (status === 'checking') {
    return (<h1>Cargando...</h1>)
  }




  return (
    <>
      <Routes>
        {status === 'Not-Authenticated' ? (
          <>
            <Route path='/auth/*' element={<AuthRoutes />} />
            <Route path='/*' element={<Navigate to={'/auth'} />} />
          </>
        ) : (
          <>
            <Route path='/*' element={<GraciasRoutes />} />
          </>
        )}
      </Routes>

    </>
  )
}

export default App
