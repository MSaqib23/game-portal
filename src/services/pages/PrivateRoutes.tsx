import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import NavBar from "../../components/NavBar";
import { Box, Spinner } from "@chakra-ui/react";
import { Suspense } from "react";

const PrivateRoutes = () => {
    const { user } = useAuth();
    if (!user)
        return <Navigate to="/login" />;
    return (
        <>
            <NavBar />
            
            <Box padding={3}>
                <Suspense fallback={<Spinner/>}>
                    <Outlet />
                </Suspense>
          </Box>
            </>
    );
}

export default PrivateRoutes