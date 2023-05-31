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
import OurGoal from "../Pages/OurGoal"
import Objective from "../Pages/Objective"
import GetInTouch from "../Pages/GetInTouch"
import AboutUs from "../Pages/AboutUs"
import Services from "../Pages/Services"
import BookOnline from "../Pages/BookOnline"
import CreateEvent from "../Pages/CreateEvent"
import Events from "../Pages/Events"
import Event from "../Pages/Event"
import NavigationLinks from "./NavigationLinks"
import Courses from "../Pages/Courses"
import Membership from "../Pages/Membership"

function Navigation() {
  return (
        <AuthProvider>
          <NavigationLinks />
          <Routes>
            <Route element={<PrivateRoute />}>
              
            </Route>
            <Route element={<Home />} path="/" />
              <Route element={<UserInfo />} path="/profile" />
              <Route element={<UpdateProfile />} path="/update-profile" />
              <Route element={<GetInTouch />} path="/contact" />
              <Route element={<OurGoal />} path="/our-goal" />
              <Route element={<Objective />} path="/objective" />
              <Route element={<AboutUs />} path="/about-us" />
              <Route element={<Services />} path="/services" />
              <Route element={<BookOnline />} path="/book-online" />
              <Route element={<CreateEvent />} path="/create-events" />
              <Route element={<Membership />} path="/membership" />
              <Route element={<Courses />} path="/courses" />
              <Route element={<Events />} path="/events" />
              <Route element={<Event />} path="/events/:event" />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </AuthProvider>
  )
}

export default Navigation