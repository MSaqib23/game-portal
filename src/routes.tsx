import { createBrowserRouter } from "react-router-dom";
import Layout from "./services/pages/Layout";
import HomePage from "./services/pages/HomePage";
import GameDetailPage from "./services/pages/GameDetailPage";
import ErrorPage from "./services/pages/ErrorPage";

const router=createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
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