import React from 'react'
import './App.css'
import { SignedIn, SignedOut, SignInButton, useAuth, UserButton } from "@clerk/clerk-react"
import { Routes, Route, Navigate } from "react-router-dom"
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import Products from './pages/Products'
import CustomersPage from './pages/CustomersPage'
import OrdersPage from './pages/OrdersPage'
import DashboardLayout from './layouts/DashboardLayout'

function App() {

  const { isSignedIn, isLoaded } = useAuth();


  if (!isLoaded) {
    return <div className='flex items-center justify-center h-screen'>
      <div className='flex flex-col items-center gap-2'>
        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
        <h1 className='text-2xl font-bold'>Loading...</h1>
      </div>
    </div>
  }



  return (
    <div>

      <Routes>
        <Route path="/login" element={isSignedIn ? <Navigate to={"/dashboard"} /> : <LoginPage />} />



        <Route path='/' element={isSignedIn ? <DashboardLayout /> : <Navigate to={"/login"} />}>

          <Route index element={<Navigate to={"/dashboard"} />} />

          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/products' element={<Products />} />
          <Route path='/customers' element={<CustomersPage />} />
          <Route path='/orders' element={<OrdersPage />} />



        </Route>
      </Routes>

    </div>
  )
}

export default App