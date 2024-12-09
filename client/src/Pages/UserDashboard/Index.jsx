import React from 'react'
import UserSidebar from "../../Components/UserSidebar/Index.jsx"
import { Box } from '@mui/material'
function Index() {
    return (
        <div component="main">
            <UserSidebar />
            <Box
                sx={{
                    marginTop: "100px",
                    marginLeft: "300px"
                }}
            >
                User  Dashboard Page
            </Box>
        </div>
    )
}

export default Index
