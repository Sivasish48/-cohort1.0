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
            } else {
                console.error("Data is not an array", data);
                setCourses([]); // Optional: Set an empty array if data is not an array
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
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
  
        <div class="px-6 py-4">
        <h2>{course.title}</h2>
           <p>{course.description}</p>
           <img   src={course.imageLink} />
           </div>
      </div>
    )
}

export default Course