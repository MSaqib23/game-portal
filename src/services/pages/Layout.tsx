import { Outlet } from "react-router-dom"
import { Box, Spinner } from "@chakra-ui/react"
import { Suspense } from "react"

const Layout = () => {
  return (
      <>
          <Box padding={3}>
              <Suspense fallback={<Spinner/>}>
                  <Outlet />
            </Suspense>
          </Box>
      </>
  )
}

export default Layout