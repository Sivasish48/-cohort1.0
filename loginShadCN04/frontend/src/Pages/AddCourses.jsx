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

  function AddCourses(){
    const navigate = useNavigate()
    const[title,SetTitle]=useState("")
    const[description,SetDescription]=useState("")

     return(

        <Card className="w-[350px] mt-40">
  <CardHeader className="text-center">
    <CardTitle>Add Courses</CardTitle>
    <CardDescription></CardDescription>
  </CardHeader>
  <CardContent>
    <div className="grid gap-2 item-start space-y-2">
     <Label  className="text-start font-normal">Add titile</Label>
     <Input id="email" types="email" placeholder="" onChange={(e)=>{
        SetTitle(e.target.value)
     }}/>
    </div>
    <div className="grid gap-2 item-start space-y-2 mt-7">
     <Label className="text-start font-normal">Add Description</Label>
     <Input id="password" types="password"  onChange={(e)=>{
        SetDescription(e.target.value)
     }}/>
    </div>
  </CardContent>
  <CardFooter className="justify-between">
    <Button  onClick={()=>{
        fetch("http://localhost:4000/admin/courses",{
            method:"POST",
            body:JSON.stringify({
              title:title,
              description:description,
              imageLink:"",
              published:true
            }),
            headers:{
                "Content-type":"application/json",
                "Authorization":"Bearer "+ localStorage.getItem("token")
            }
        }).then((resp)=>{
            resp.json()
        .then((data)=>{
           localStorage.setItem("token",data.token)
            })
        })
    }} >Create course</Button>

  </CardFooter>
</Card>

     )
  }

  export default AddCourses