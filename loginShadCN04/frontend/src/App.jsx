import "./index.css"
import React from "react";
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Login  from "./Pages/Login"
import  Signup from "./Pages/Signup"
function App() {
  

  return (
    <div>
      hello
      <div className="grid grid-cols-1 justify-content-center">
       <div className="flex items-center justify-center">
       <Router>
    
    <Routes>
      <Route path={"/login"} element={<Login/>}/>
      <Route path={"/signup"} element={<Signup/>}/>
    </Routes>
   </Router>
       </div>

    </div>
   
     </div>
    
  )
}

export default App
