import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { App } from './App';
import { NotFoundPage } from './Pages/NotFoundPage';
import { RegisterPage } from './Pages/RegisterPage';
import { LoginPage } from './Pages/LoginPage/LoginPage';
import { UserPage } from './Pages/UserPage/UserPage';
import { RegisterPage } from './Pages/RegisterPage/RegisterPage';


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
                    path: '/register',
                    element: <RegisterPage></RegisterPage>
                }
            ]
        }
    ])
    return (
        <RouterProvider router={routes} />
    )
}
