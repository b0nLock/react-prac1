import React from 'react'
import { privateRoutes, publicRoutes } from '../router/links'
import { Link, Route, Routes, Navigate } from 'react-router'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const AppRouter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
  return (
    isAuth ?
    <Routes>
        ({privateRoutes.map(route => 
        <Route path={route.path} element={<route.component />} />
        )}
        <Route path="*" element={<Navigate replace to="/" />} />
        )
    </Routes>
    : 
    <Routes>
        ({publicRoutes.map(route => 
        <Route path={route.path} element={<route.component />} />
        )}
        <Route path="*" element={<Navigate replace to="/login" />} />
        )
    </Routes>
  )
}

export default AppRouter