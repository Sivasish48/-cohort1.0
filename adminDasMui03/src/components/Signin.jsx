import React, { useState } from "react";
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import {Card} from "@mui/material";
import {Typography} from "@mui/material";


function Signin(){
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    const handleClick= async ()=>{
        console.log(email,password)
       let result = await fetch("http://localhost:5000/admin/signin",{
        method:"POST",
        body:JSON.stringify({username:email,password:password}),
        headers:{
            'Content-Type':"application/json",
        }
    } )

}
   
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
            console.log(e.target.value)
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
        handleClick()
        console.log(result);
    }}>Signin</Button>
    </Card>
    </center>
    
        
   
   </div>
      
   )
}

export default Signin