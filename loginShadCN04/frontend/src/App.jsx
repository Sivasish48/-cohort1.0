import "./index.css"
import React from "react";
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Login  from "./Pages/Login"
import  Signup from "./Pages/Signup"
import AddCourses from "./Pages/AddCourses";
import Appbar from "./Pages/Appbar";
import Courses from "./Pages/Courses";
import Course from "./Pages/Course";

function App() {
  

  return (
    <Router>
      <div className="relative h-screen flex flex-col justify-center items-center">
        {/* Signin/Signup Components */}
        <div className="mb-20"> {/* Add margin bottom for spacing */}
          <Routes>
          <Route path={"/courses"} element={<Courses />} />
          <Route path={"/courses/:courseId"} element={<Course />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/signup"} element={<Signup />} />
            <Route path={"/addcourses"} element={<AddCourses />} />
          </Routes>
        </div>

        {/* Appbar positioned at the top right */}
        <div className="absolute top-0 right-0">
          <Appbar />
        </div>
      </div>
    </Router>
  )
}

export default App
