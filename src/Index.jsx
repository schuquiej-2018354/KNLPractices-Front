import React, { createContext, useContext, useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './App';
import { NotFoundPage } from './Pages/NotFoundPage';
import { LoginPage } from './Pages/LoginPage';
import { UserPage } from './Pages/UserPage';
import { RegisterPage } from './Pages/RegisterPage';
import { PublicacionPage } from './Pages/PublicacionPage';
import { ForumPage } from './Pages/ForumPage';
import { AdminPage } from './Pages/AdminPage';
import { CareerView } from './Pages/ViewsPage/CareerView';
import { UsersView } from './Pages/ViewsPage/UsersView';
import { ForumView } from './Pages/ViewsPage/ForumView';
import { PubliView } from './Pages/ViewsPage/PubliView';
import { UserProfile } from './Pages/UserProfile';
import { InfoPage } from './Pages/InfoPage';

export const AuthContext = createContext();

export const Index = () => {
    const [loggedIn, setLoggedIn] = useState(false);
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
                    element: <LoginPage></LoginPage>
                },
                {
                    path: '/register',
                    element: <RegisterPage></RegisterPage>
                },
                {
                    path: '/user/:id',
                    element: <UserPage></UserPage>
                },
                {
                    path: '/userProfile/:id',
                    element: <UserProfile></UserProfile>
                },
                {
                    path: '/publicacion/:id?',
                    element: dataUser.role == 'MODERATOR' ?  <AdminPage></AdminPage> :<PublicacionPage></PublicacionPage>
                },
                {
                    path: '/forum',
                    element: <ForumPage />
                },
                {
                    path: '/admin',
                    element: <AdminPage />
                },
                {
                    path: '/careers',
                    element: <CareerView />
                },
                {
                    path: '/users',
                    element: <UsersView />
                },
                {
                    path: '/questions',
                    element: <ForumView />
                },
                {
                    path: '/adminpubli',
                    element: <PubliView />
                },
                {
                    path: '/info',
                    element: <InfoPage/>
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
