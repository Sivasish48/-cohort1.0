import "./index.css"
import React from "react";
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Login  from "./Pages/Login"
import  Signup from "./Pages/Signup"
import AddCourses from "./Pages/AddCourses";
import Appbar from "./Pages/Appbar";
function App() {
  

  return (
    <div>
      <Appbar/>
      <div className="grid grid-cols-1 justify-content-center">
       <div className="flex items-center justify-center">
       <Router>
    
    <Routes>
      <Route path={"/login"} element={<Login/>}/>
      <Route path={"/signup"} element={<Signup/>}/>
      <Route path={"/addcourses"} element={<AddCourses/>}/>
    </Routes>
   </Router>
       </div>

    </div>
   
     </div>
    
  )
}

export default App
