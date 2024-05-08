import React from "react";
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Appbar from "./components/Appbar";
import Signup from "./components/Signup";
import Signin from "./components/Signin";

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Appbar />
     hello
     <Router>
      <Routes>
        <Route path={"/signin"} element={<Signin/>}/>
        <Route path={"/signup"} element={<Signup/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
