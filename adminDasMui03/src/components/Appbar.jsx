import {Typography } from "@mui/material";
import Button from '@mui/material/Button';

import { useNavigate } from "react-router-dom";




function Appbar(){
  const navigate=useNavigate()

   
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
           <Button onClick={()=>{
            navigate("/signin")
           }}>Sign In</Button>
           <Button onClick={()=>{
            navigate("/signup")
           }}>Sign Up</Button>
           </div>
           
           </div>
        </div>
    )
}


export default Appbar