import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Auth() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const login = window.localStorage.getItem("FRlogin");
        if (login === "true") {
            navigate("/");
        }
    })

    const onUsernameChange = e => {
        setUsername(e.target.value);
    }

    const onPasswordChange = e => {
        setPassword(e.target.value);
    }
    
    const logIn = async (e) => {
        e.preventDefault()
        if (username === "teacher@gmail.com" && password === "teachingisfun") {
            window.localStorage.setItem("FRlogin", true);
            window.localStorage.setItem("FRrole", "teacher");
            navigate("/")
        } else if (username === "student@gmail.com" && password === "studyingisfun") {
            window.localStorage.setItem("FRlogin", true);
            window.localStorage.setItem("FRrole", "student");
            navigate("/")
        } else {
            setError("Incorrect username or password")
        }
    }

    return (
        <div className="bg-slate-200 w-screen min-h-screen">
            <h1 className="text-4xl font-bold text-center pt-[35%]">Login with FaceReg Attendance</h1>
            {error !== "" ? (<p className="text-lg text-red-500 text-center mt-4">{error}</p>): (<div></div>)}
            <form className="mt-8 w-10/12 mx-auto" onSubmit={logIn}>
                <p className="text-xl">Username: </p>
                <input className="rounded-md px-3 py-2 w-full h-fit mt-2 text-lg border border-slate-400" type="text" placeholder="Netlink ID or username" onChange={onUsernameChange}/>
                <p className="text-xl mt-2">Password: </p>
                <input className="rounded-md px-3 py-2 w-full h-fit mt-2 text-lg border border-slate-400" type="password" placeholder="Netlink ID or username" onChange={onPasswordChange}/>
                <input className="text-xl px-4 py-2 rounded-md bg-sky-700 click:bg-sky-900 text-white w-fit h-fit mt-6 ml-auto" type="submit" value="Login"/>
            </form>
        </div>
    )
}

export default Auth