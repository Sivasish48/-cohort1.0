

import React from 'react';
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isUserLoading } from "../store/selectors/isUserLoading";
import { userEmailState } from "../store/selectors/userEmail";

function Appbar() {
    const navigate = useNavigate();

    const userEmail = useRecoilValue(userEmailState);
    console.log(userEmail);
    const userLoading = useRecoilValue(isUserLoading);

   

    if (userLoading) {
        return <div>Loading...</div>;
    }

    if (userEmail) {
        return (
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                padding: 4,
                zIndex: 1
            }}>
                <div style={{ marginLeft: 10, cursor: "pointer" }} onClick={() => navigate("/")}>
                    <Typography variant={"h6"}>Coursera</Typography>
                </div>
                <div style={{ display: "flex" }}>
                    <div style={{ marginRight: 10, display: "flex" }}>
                        <div style={{ marginRight: 10 }}>
                            <Button onClick={() => navigate("/addcourse")}>Add course</Button>
                        </div>
                        <div style={{ marginRight: 10 }}>
                            <Button onClick={() => navigate("/courses")}>Courses</Button>
                        </div>
                        <Button
                            variant={"contained"}
                            onClick={() => {
                                localStorage.setItem("token", null);
                                window.location = "/";
                            }}
                        >Logout</Button>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                padding: 4,
                zIndex: 1
            }}>
                <div style={{ marginLeft: 10, cursor: "pointer" }} onClick={() => navigate("/")}>
                    <Typography variant={"h6"}>Coursera</Typography>
                </div>
                <div style={{ display: "flex" }}>
                    <div style={{ marginRight: 10 }}>
                        <Button variant={"contained"} onClick={() => navigate("/signup")}>Signup</Button>
                    </div>
                    <div>
                        <Button variant={"contained"} onClick={() => navigate("/signin")}>Signin</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Appbar;
