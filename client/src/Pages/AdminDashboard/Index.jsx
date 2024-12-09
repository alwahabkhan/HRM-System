import React from 'react'
import AdminDashboard from "../../Components/AdminSidebar/Index.jsx"
import { Box } from '@mui/material'
function Index() {
    return (
        <div component="main">
            <AdminDashboard />
            <Box sx={{
                marginLeft: "300px",
                marginTop: "100px"
            }}>

                Admin Dashboard
            </Box>
        </div>
    )
}

export default Index
