import React from "react"
import { AuthProvider } from "../Context/AuthContext"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "../Pages/Home"
import Signup from "../Form/Signup"
import Login from "../Form/Login"
import PrivateRoute from './PrivateRoute'
import ForgotPassword from "../Form/ForgotPassword"
import UserInfo from "../Form/UserInfo"
import UpdateProfile from "../Form/UpdateProfile"


function Navigation() {
  return (
    <div>
      <div>
        <AuthProvider>
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route element={<Home />} path="/" />
              <Route element={<UserInfo />} path="/profile" />
              <Route element={<UpdateProfile />} path="/update-profile" />
            </Route>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </AuthProvider>

      </div>
      <footer className="py-5 bg-dark">
            <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2023</p></div>
        </footer>
    </div>
  )
}

export default Navigation