import React, { createContext, useContext, useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { App } from './App';
import { NotFoundPage } from './Pages/NotFoundPage';
import { LoginPage } from './Pages/LoginPage';
import { UserPage } from './Pages/UserPage';
import { RegisterPage } from './Pages/RegisterPage';
import { PublicacionPage } from './Pages/PublicacionPage';

export const AuthContext = createContext();

export const Index = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [contextData, setContextData] = useState(null)
    const [dataUser, setDataUser] = useState({
        image: '',
        id: '',
        name: '',
        surname: '',
        phone: '',
        email: '',
        username: '',
        career: '',
        role: ''
    });


    useEffect(() => {
        let token = localStorage.getItem('token');
        if (token) {
            setLoggedIn(true);
            // Recupera los datos del usuario de localStorage
            const userData = JSON.parse(localStorage.getItem('userData'));
            setDataUser(userData);
        }
    }, [loggedIn]);

    const handleLogout = () => {
        setLoggedIn(false);
        setDataUser({
            image: '',
            id: '',
            name: '',
            surname: '',
            phone: '',
            email: '',
            username: '',
            career: '',
            role: ''
        });
    };

    const routes = createBrowserRouter([
        {
            path: '',
            element: <App></App>,
            errorElement: <NotFoundPage></NotFoundPage>,
            children: [
                {
                    path: '/',
                    element: <HomePage></HomePage>
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
                }
            ]
        }
    ]);
    return (
        <AuthContext.Provider value={{ loggedIn, setLoggedIn, dataUser, setDataUser, handleLogout }}>
            <RouterProvider router={routes} />
        </AuthContext.Provider>
    );
};
