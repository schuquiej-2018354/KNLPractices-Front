import React, { createContext, useContext, useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { App } from './App';
import { NotFoundPage } from './Pages/NotFoundPage';
import { LoginPage } from './Pages/LoginPage';
import { UserPage } from './Pages/UserPage';
import { RegisterPage } from './Pages/RegisterPage';
import { PublicacionPage } from './Pages/PublicacionPage';

export const AuthContext = createContext()

export const Index = () => {

    const [loggedIn, setLoggedIn] = useState(false)
    const [dataUser, setDataUser] = useState({
        id: '',
        name: '',
        surname: '',
        phone: '',
        email: '',
        username: ''
    })

    const handleLogout = () => {
        setLoggedIn(false);
        setDataUser({
            id: '',
            name: '',
            surname: '',
            phone: '',
            email: '',
            username: ''
        });
    };

    useEffect(() => {
        let token = localStorage.getItem('token')
        if (token) setLoggedIn(true)
    }, [])

    const routes = createBrowserRouter([
        {
            path: '',
            element: <App></App>,
            errorElement: <NotFoundPage></NotFoundPage>,
            children: [
                {
                    path: '/',
                    element: <HomePage></HomePage>,
                },
                {
                    path: '/register',
                    element: <RegisterPage></RegisterPage>
                },
                {
                    path: '/login',
                    element: <LoginPage></LoginPage>
                },
                {
                    path: '/user',
                    element: <UserPage></UserPage>
                },
                {
                    path: '/publicacion',
                    element: <PublicacionPage />
                },

            ]
        }
    ])
    return (
        <AuthContext.Provider value={{ loggedIn, setLoggedIn, dataUser, setDataUser, handleLogout }}>
            <RouterProvider router={routes} />
        </AuthContext.Provider>
    )
}
