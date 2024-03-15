import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import NavBar from "../../components/NavBar";
import { Box } from "@chakra-ui/react";

const PrivateRoutes = () => {
    const { user } = useAuth();
    if (!user)
        return <Navigate to="/login" />;
    return (
        <>
            <NavBar />
            <Box padding={0}>
              <Outlet />
          </Box>
            </>
    );
}

export default PrivateRoutes