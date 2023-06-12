import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { App } from './App';
import { NotFoundPage } from './Pages/NotFoundPage';
import { RegisterPage } from './Pages/RegisterPage';


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
                }
            ]
        }
    ])
    return (
        <RouterProvider router={routes} />
    )
}
