import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Label } from "@/components/ui/label";
  import { Button } from "@/components/ui/button";
  import { Input } from "@/components/ui/input";




import React from "react"
import { useState ,useEffect} from "react"

//const { useParams } = require("react-router-dom")
import { useParams } from "react-router-dom"



function Course(){

    const [courses, setCourses] = useState([])
    const {courseId} = useParams()

    useEffect(() => {
        fetch("http://localhost:4000/admin/courses", {
            method: "GET",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        }).then((resp) => {
            return resp.json()
        }).then((data) => {
            console.log(data);
            if (Array.isArray(data.courses)) {
                setCourses(data.courses)
                //alert("Course updated successfully")
            } else {
                console.error("Data is not an array", data);
                setCourses([]);
                // Optional: Set an empty array if data is not an array
            }
        }).catch((error) => {
            console.error("Error fetching courses", error);
        })

    }, [])


    console.log("CourseId:", courseId);
    console.log("Courses array:", courses);


//     let course;

//     for(let i=0; i<courses.length;i++ ){
//         if (courses[i].id === Number(courseId)) {
//             course = courses[i];
//             break;
//     }
// }

let course;
    const numericCourseId = Number(courseId);

    for (let i = 0; i < courses.length; i++) {
        console.log(`Checking course at index ${i} with id ${courses[i].id}`);
        if (courses[i].id === numericCourseId) {
            course = courses[i];
            console.log("Course found:", course);
            break; // Stop the loop once we find the course
        }
    }

    if(!course){
        return <div>
            Loading...
            </div>
    }

    return(
       <div>
        <CourseCard course={course}/>
        <UpdateCard course={course}  courses={courses} setCourses={setCourses}/>
       </div>
    )
}




function UpdateCard(props){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const[image,setImage]=useState("")
  
    const handleCreateCourse = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found in local storage");
        return;
      }
  
      try {
        const response = await fetch("http://localhost:4000/admin/courses/" +props.course.id, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            title: title,
            description: description,
            imageLink: image,
            published: true,
          }),
        });
  
        if (!response.ok) {
          throw new Error("Failed to create course");
        }
  
        const data = await response.json();
        // let updatedCoursesList = []
        //   for(let i=0;i<props.courses.lenth;i++){
            
        //     if(props.courses[i].id == props.course.id){
        //        updatedCoursesList.push({
        //         id: props.course.id,
        //         title:title,
        //         description:description,
        //         imageLink:image
        //        })
        //     }else{
        //         updatedCoursesList.push(props.courses[i])
        //     }
           
        //   }
        //   props.setCourses(updatedCoursesList)

        const updatedCoursesList = [...props.courses];
        for (let i = 0; i < updatedCoursesList.length; i++) {
            if (updatedCoursesList[i].id === props.course.id) {
                updatedCoursesList[i] = {
                    ...updatedCoursesList[i],
                    title: title,
                    description: description,
                    imageLink: image
                };
                break;
            }
        }

        props.setCourses(updatedCoursesList);


        console.log("Course created:", data.username);

         
      } catch (error) {
        console.error("Error creating course:", error);
      }
    };
  
    return (
      <Card className="w-[350px] mt-40">
        <CardHeader className="text-center">
          <CardTitle>Edit Courses</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2 item-start space-y-2">
            <Label className="text-start font-normal">Edit title</Label>
            <Input
             // id="title"
              type="text"
              placeholder=""
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="grid gap-2 item-start space-y-2 mt-7">
            <Label className="text-start font-normal">Edit Description</Label>
            <Input
             // id="description"
              type="text"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <div  className="grid gap-2 item-start space-y-2 mt-7">
            <Label className="text-start font-normal">Edit Image Link</Label>
            <Input
              //id="imagelink"
              type="text"
              //value={imageLink}
              //placeholder="image link"
              onChange={(e) => {
                setImage(e.target.value);
              }}
              />
  
          </div>
        </CardContent>
        <CardFooter className="justify-between">
          <Button onClick={handleCreateCourse}>Edit course</Button>
        </CardFooter>
      </Card>
    );
}



function CourseCard(props){
    
    return <div class="max-w-sm rounded overflow-hidden shadow-lg">
  
    <div class="px-6 py-4">
    <h2>{props.course.title}</h2>
       <p>{props.course.description}</p>
       <img   src={props.course.imageLink} />
       </div>
  </div>
}
export default Course