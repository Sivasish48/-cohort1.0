import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import React from "react";





function Appbar(){
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
           <Button 
            onClick={()=>{
                window.location="/signin"
            }}>Sign In</Button>
           <Button 
            onClick={()=>{
                window.location="/signup"
            }}>Sign In</Button>
           </div>
           
           </div>
        </div>
    )
}


export default Appbar