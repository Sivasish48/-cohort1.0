import { useEffect, useState } from "react"

function Courses(){

    const [courses,setCourses]=useState([])

    useEffect(()=>{
        fetch("http://localhost:4000/admin/courses", {
            method: "GET",
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }).then((resp)=>{
             return resp.json()
          }).then((data)=>{
            console.log(data);
            setCourses(data)
          })
       
    },[])

    return(
        <div>
            
                {JSON.stringify(courses)}
           
            
        </div>
    )
}

export default Courses