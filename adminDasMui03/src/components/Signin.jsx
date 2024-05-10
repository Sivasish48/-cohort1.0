import React, { useState } from "react";
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import {Card} from "@mui/material";
import {Typography} from "@mui/material";


function Signin(){
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
   
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
            Welcome back
        </Typography>
        <br />
        <TextField id="outlined-basic" label="Email" variant="outlined" style={{
            height:"12px",
            width:"250px"
        }}  onChange={(e)=>{
            setEmail(e.target.value)
        }}/> 
    <br /><br /><br /><br />
    <TextField id="outlined-basic" label="Password" variant="outlined"  style={{
            height:"12px",
            width:"250px"
        }}   onChange={(e)=>{
            setPassword(e.target.value)
        }}/>
    <br /><br /><br /><br />
    <Button variant="contained"  
    onClick={()=>{
        fetch("http://localhost:3001/admin/login",{
            method:"POST",
            body:JSON.stringify({
                username:email,
                password:password
            }),
            headers:{
                "Content-type":"application/json",
                "Authorization":"bearer"+ data.token
                
            } 

        }).then((resp)=>{
            resp.json()
        }).then((data)=>{
           localStorage.getItem("token",data.token)
        })
    }}>Signin</Button>
    </Card>
    </center>
    
        
   
   </div>
      
   )
}

export default Signin