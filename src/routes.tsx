import { createBrowserRouter } from "react-router-dom";
import Layout from "./services/pages/Layout";
import HomePage from "./services/pages/HomePage";
import GameDetailPage from "./services/pages/GameDetailPage";

const router=createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element:<HomePage/>
            },
            {
                path: 'games/:id',
                element:<GameDetailPage/>
            }
        ]
    }
])

export default router;