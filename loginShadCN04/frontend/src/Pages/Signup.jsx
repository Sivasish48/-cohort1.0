import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
  import {Input} from "@/components/ui/input"
  import { useNavigate } from "react-router-dom";
  import {React,useState} from "react";

  function Signup(){
    const navigate = useNavigate()
    const[email,Setemail]=useState("")
    const[password,Setpassword]=useState("")

     return(

        <Card className="w-[350px] mt-40">
  <CardHeader className="text-center">
    <CardTitle>Signup</CardTitle>
    <CardDescription></CardDescription>
  </CardHeader>
  <CardContent>
    <div className="grid gap-2 item-start space-y-2">
     <Label  className="text-start font-normal">Email</Label>
     <Input id="email" types="email" placeholder="xyz@gmail.com" onChange={(e)=>{
        Setemail(e.target.value)
     }}/>
    </div>
    <div className="grid gap-2 item-start space-y-2 mt-7">
     <Label className="text-start font-normal">password</Label>
     <Input id="password" types="password"  onChange={(e)=>{
        Setpassword(e.target.value)
     }}/>
    </div>
  </CardContent>
  <CardFooter className="justify-between">
    <Button  onClick={()=>{
        fetch("http://localhost:4000/admin/signup",{
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
    }} >Create an account</Button>


    <Button  onClick={()=>{
            navigate("/login")
           }}>Login</Button>
  </CardFooter>
</Card>

     )
  }

  export default Signup