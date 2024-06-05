// import { useEffect, useState } from "react"
// import axios from "axios";
// function Courses() {

//     const [courses, setCourses] = useState([])

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get("http://localhost:4000/admin/courses", {
//                     headers: {
//                         Authorization: "Bearer " + localStorage.getItem("token"),
//                     },
//                 });
//                 let data = response.data;
//                 if (Array.isArray(data.courses)) {
//                     setCourses(data.courses);
//                 } else {
//                     console.error("Data is not an array", data);
//                     setCourses([]);
//                 }
//                 console.log(data);
//             } catch (error) {
//                 console.error("Error fetching courses", error);
//             }
//         };
    
//         fetchData();
//     }, []);

//     return (
//         <div className="flex min-h-66 flex-wrap justify-center">
           
//             {courses.map(course => {
//                 return <Course  course={course} />
//             })}
//         </div>
//     )
// }

// function Course(props) {
//     console.log('Course props:', props);
//     return (
//         <div class="max-w-sm rounded overflow-hidden shadow-lg">
  
//   <div class="px-6 py-4">
//   <h2>{props.course.title}</h2>
//      <p>{props.course.description}</p>
//      <img src={props.course.imageLink} />
//      </div>
// </div>
//     )
// }

// export default Courses


import { useEffect, useState } from "react";
import axios from "axios";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/admin/courses", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        const data = response.data;
        if (Array.isArray(data.courses)) {
          setCourses(data.courses);
        } else {
          console.error("Data is not an array", data);
          setCourses([]);
        }
      } catch (error) {
        console.error("Error fetching courses", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex min-h-66 flex-wrap justify-center">
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  );
}

function Course(props) {
  console.log('Course props:', props);
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <h2>{props.course.title}</h2>
        <p>{props.course.description}</p>
        <img src={props.course.imageLink} alt={props.course.title} />
      </div>
    </div>
  );
}

export default Courses;
