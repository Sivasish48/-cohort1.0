import { useEffect, useState } from "react"

function Courses() {

    const [courses, setCourses] = useState([])

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

    return (
        <div>
            cvsdv
            {courses.map(course => {
                return <Course key={course.id} course={course} />
            })}
        </div>
    )
}

function Course(props) {
    console.log('Course props:', props);
    return (
        <div>
            <h2>{props.course.title}</h2>
            <p>{props.course.description}</p>
        </div>
    )
}

export default Courses
