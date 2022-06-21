import React, {useEffect} from 'react'
import {useNavigate} from "react-router-dom";

function ClassSelect() {
    const navigate = useNavigate();

    useEffect(() => {
        const login = window.localStorage.getItem("FRlogin");
        if (login === "false") {
            navigate("/login");
        }
        const role = window.localStorage.getItem("FRrole");
        if (role === "student") {
            navigate("/home");
        }
    })

    const classSelected = name => {
        window.localStorage.setItem("class", name);
        navigate("/home")
    }

    return (
        <div className="bg-slate-200 w-screen min-h-screen">
            <h1 className="text-xl text-bold w-fit mx-auto pt-[35%]">Select a class</h1>
            <div className="mt-12 w-9/12 mx-auto h-fit">
                <div className="w-full text-xl uppercase bg-white border-slate-400 shadow-lg hover:shadow-inner text-center flex flex-col justify-center h-12" onClick={() => {classSelected("SENG 310")}}>SENG 310</div>
                <div className="mt-5 w-full text-xl uppercase bg-white border-slate-400 shadow-lg hover:shadow-inner text-center flex flex-col justify-center h-12" onClick={() => {classSelected("CSC 482A")}}>CSC 482A</div>
                <div className="mt-5 w-full text-xl uppercase bg-white border-slate-400 shadow-lg hover:shadow-inner text-center flex flex-col justify-center h-12" onClick={() => {classSelected("CSC 485C")}}>CSC 485C</div>
                <div className="mt-5 w-full text-xl uppercase bg-white border-slate-400 shadow-lg hover:shadow-inner text-center flex flex-col justify-center h-12" onClick={() => {classSelected("CSC 445")}}>CSC 445</div>
            </div>
        </div>
    )
}

export default ClassSelect