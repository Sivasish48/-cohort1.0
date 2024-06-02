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
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

function AddCourses() {
  const navigate = useNavigate();
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
      const response = await fetch("http://localhost:4000/admin/courses", {
        method: "POST",
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
      console.log("Course created:", data.username);
    } catch (error) {
      console.error("Error creating course:", error);
    }
  };

  return (
    <Card className="w-[350px] mt-40">
      <CardHeader className="text-center">
        <CardTitle>Add Courses</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2 item-start space-y-2">
          <Label className="text-start font-normal">Add title</Label>
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
          <Label className="text-start font-normal">Add Description</Label>
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
          <Label className="text-start font-normal">Add Image Link</Label>
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
        <Button onClick={handleCreateCourse}>Create course</Button>
      </CardFooter>
    </Card>
  );
}

export default AddCourses;
