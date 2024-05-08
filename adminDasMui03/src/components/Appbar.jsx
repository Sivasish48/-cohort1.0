import {Typography } from "@mui/material";
import Button from '@mui/material/Button';
import React, { useState } from "react";
import { Navigate } from "react-router-dom";




function Appbar(){
   const[gotosignup,setGotosignup]=useState(false)
   const[gotosignin,setGotosignin]=useState(false)

   if(gotosignin){
     return <Navigate to="/signin"/>
   }
   if(gotosignup){
    return <Navigate to="/signup"/>
   }

   
    return(
        <div style={{
            display:"flex",
             justifyContent:"space-between"
        }}>
            <div>
            <Typography>Coursera</Typography>
            </div>
           <div style={{
             display:"flex",
             gap:"10px",
             color:"white",
             backgroundColor:"black"
           }}>
           <div style={{
            marginRight:"10px"
           }}>
           <Button  onClick={()=>{setGotosignin(true)}}>Sign In</Button>
           <Button  onClick={()=>{setGotosignup(true)}}>Sign Up</Button>
           </div>
           
           </div>
        </div>
    )
}


export default Appbar