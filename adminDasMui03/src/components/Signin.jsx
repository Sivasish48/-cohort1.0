import React from "react";
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import {Card} from "@mui/material";
import {Typography} from "@mui/material";


function Signin(){
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
        }}/> 
    <br /><br /><br /><br />
    <TextField id="outlined-basic" label="Password" variant="outlined"  style={{
            height:"12px",
            width:"250px"
        }}/>
    <br /><br /><br /><br />
    <Button variant="contained">Signin</Button>
    </Card>
    </center>
    
        
   
   </div>
      
   )
}

export default Signin