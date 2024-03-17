import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const HomePage = lazy(() => import("./services/pages/HomePage"));
const GameDetailPage = lazy(() => import("./services/pages/GameDetailPage"));
const ErrorPage = lazy(() => import("./services/pages/ErrorPage"));
const PrivateRoutes = lazy(() => import("./services/pages/PrivateRoutes"));
const Layout = lazy(() => import("./services/pages/Layout"));
const LoginPage = lazy(() => import("./services/pages/LoginPage"));

const router=createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement:<ErrorPage/>,
        children: [
                        {
                path: '/login',
                element:<LoginPage/>
            }
        ]
    },
    {
        element: <PrivateRoutes />,
        errorElement:<ErrorPage/>,
        children: [
            {
                index: true,
                element:<HomePage/>
            },
            {
                path: 'games/:slug',
                element:<GameDetailPage/>
            }
        ]
    }
])

export default router;