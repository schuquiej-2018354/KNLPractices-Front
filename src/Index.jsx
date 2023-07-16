import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { App } from './App';
import { NotFoundPage } from './Pages/NotFoundPage';
import { LoginPage } from './Pages/LoginPage';
import { UserPage } from './Pages/UserPage';
import { RegisterPage } from './Pages/RegisterPage';
import { PublicacionPage } from './Pages/PublicacionPage';


export const Index = () => {

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
                }
            ]
        }
    ])
    return (
        <RouterProvider router={routes} />
    )
}
