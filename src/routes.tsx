import { createBrowserRouter } from "react-router-dom";
import Layout from "./services/pages/Layout";
import HomePage from "./services/pages/HomePage";
import GameDetailPage from "./services/pages/GameDetailPage";
import ErrorPage from "./services/pages/ErrorPage";
import LoginPage from "./services/pages/LoginPage";
import PrivateRoutes from "./services/pages/PrivateRoutes";

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