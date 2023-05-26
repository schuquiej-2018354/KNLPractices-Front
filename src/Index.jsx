import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { App } from './App';
import { NotFoundPage } from './Pages/NotFoundPage';


export const Index = () => {

    const routes = createBrowserRouter([
        {
            path: '/',
            element: <App></App>,
            errorElement: <NotFoundPage></NotFoundPage>,
            children: [
                {
                    path: '/home',
                    element: <HomePage></HomePage>,
                }
            ]
        }
    ])
    return (
        <RouterProvider router={routes} />
    )
}
