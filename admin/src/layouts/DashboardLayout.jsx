import React from 'react'
import { Outlet } from 'react-router'

function DashboardLayout() {
    return (
        <div>
            <h1>SideBar</h1>
            <h1>Navar</h1>
            <Outlet />
        </div>
    )
}

export default DashboardLayout