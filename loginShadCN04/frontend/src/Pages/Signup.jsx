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
import { Input } from "@/components/ui/input"
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    fetch("http://localhost:4000/admin/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: email,
        password: password,
      }),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // Log the response data
      if (data.token) {
        localStorage.setItem("token", data.token);
        console.log("Token stored:", data.token);
      } else {
        console.error("Signup failed:", data.message);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  };

  return (
    <Card className="w-[350px] mt-40">
      <CardHeader className="text-center">
        <CardTitle>Signup</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2 item-start space-y-2">
          <Label className="text-start font-normal">Email</Label>
          <Input
            id="username"
            type="email"
            placeholder="xyz@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="grid gap-2 item-start space-y-2 mt-7">
          <Label className="text-start font-normal">Password</Label>
          <Input
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <Button onClick={handleSignup}>Create an account</Button>
        <Button onClick={() => navigate("/login")}>Login</Button>
      </CardFooter>
    </Card>
  );
}

export default Signup;
