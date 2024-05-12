import React, { useState } from "react";
import Button from '@mui/material/Button';
import { TextField, colors } from "@mui/material";
import {Card} from "@mui/material";
import {Typography} from "@mui/material";


function Signup(){
    const[email,Setemail]=useState("")
    const[password,Setpassword]=useState("")
   return (
    
   <div  style={{
       margin:"200px",
      
   }}>
    <center>
    <Card variant="outlined" style={{
        width:"500px",
        padding:"10px",
        
    }}>
        <Typography>
            Welcome to Sign up
        </Typography>
        <br />
        <TextField  label="Email" variant="outlined"  style={{
            height:"12px",
            width:"250px",
            }} onChange={(e)=>{
                Setemail(e.target.value)
            }}/> 
    <br /><br /><br /><br />
        <TextField  label="Password" variant="outlined" style={{
            height:"12px",
            width:"250px",
           
        }}  onChange={(e)=>{
            Setpassword(e.target.value)
        }}/>
    <br /><br /><br /><br />
    <Button variant="contained" 
    onClick={()=>{
        fetch("http://localhost:5000/admin/signup",{
            method:"POST",
            body:JSON.stringify({
                username:email,
                password:password
            }),
        }).then((resp)=>{
            resp.json()
        .then((data)=>{
           localStorage.setItem("token",data.token)
            })
        })
    }}>SignUp</Button>
    </Card>
    </center>
 </div>
      
   )
}

export default Signup 