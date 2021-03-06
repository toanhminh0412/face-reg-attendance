import React, { useEffect, useState } from 'react'
import LowerNav from './LowerNav';
import UpperNav from './UpperNav';
import {BsFillPenFill} from "react-icons/bs";
import {useNavigate} from "react-router-dom";

function UpcomingClassDetail() {
    const [className, setClassName] = useState(window.localStorage.getItem("class"));
    const [date, setDate] = useState(window.localStorage.getItem("PRclassdate"))
    const [attendingNum, setAttendingNum] = useState(window.localStorage.getItem("PRattendingnum")); 
    const [attendees, setAtendees] = useState(["Minh To","Aden Bernadi","Big Boy","Carley Winston","Chuck Chick","Emma Stone","Justin Bieber","Post Malone","Lionel Messi","Chirstiano Ronaldo","Edison Cavani","Arianna Grande","Demi Lovato","Pink","Chris Evan","Chris Hemsworth","Natasha Reinhart","Chris Rock","Will SMith","Janden Smith","Emma Watson","Jennifer Lopec","Jennifer Aniston","Bruce Lee","Jackie Chan","Amanda Castilo","Zevin Wang","Charlie Stone","Andrew Li","Boteng Jerome"]);
    const [showAttendees, setShowAttendees] = useState(["Minh To","Aden Bernadi","Big Boy","Carley Winston","Chuck Chick","Emma Stone","Justin Bieber","Post Malone","Lionel Messi","Chirstiano Ronaldo","Edison Cavani","Arianna Grande","Demi Lovato","Pink","Chris Evan","Chris Hemsworth","Natasha Reinhart","Chris Rock","Will SMith","Janden Smith","Emma Watson","Jennifer Lopec","Jennifer Aniston","Bruce Lee","Jackie Chan","Amanda Castilo","Zevin Wang","Charlie Stone","Andrew Li","Boteng Jerome"])
    const [searchAttendee, setSearchAttendee] = useState("");
    const [excuseds, setExcuseds] = useState(["Hao-tse Wu","Aida Guang","Aden Shuttle"]);
    const [showExcuseds, setShowExcuseds] = useState(["Hao-tse Wu","Aida Guang","Aden Shuttle"]);
    const [searchExcused, setSearchExcused] = useState("");
    const [role, setRole] = useState(window.localStorage.getItem("FRrole"));
    const [status, setStatus] = useState(window.localStorage.getItem("FRstatus"));
    const navigate = useNavigate();

    useEffect(() => {
        const login = window.localStorage.getItem("FRlogin");
        if (!login || login === "" || login === "false") {
            navigate("/login");
        }
    })

    useEffect(() => {
        console.log("Excuseds: " + excuseds.length);
        // console.log("Typ")
    }, [excuseds])

    useEffect(() => {
        let includes = [];
        for (let i = 0; i < excuseds.length; i++) {
            if (excuseds[i].toLowerCase().includes(searchExcused.toLowerCase())) {
                includes.push(excuseds[i]);
            }
        }
        setShowExcuseds(includes);
    }, [searchExcused])

    useEffect(() => {
        let includes = [];
        for (let i = 0; i < attendees.length; i++) {
            if (attendees[i].toLowerCase().includes(searchAttendee.toLowerCase())) {
                includes.push(attendees[i]);
            }
        }
        setShowAttendees(includes);
    }, [searchAttendee])

    const markExcused = name => {
        let newAttendees = []
        let newExcuseds = []
        for (let i = 0; i < attendees.length; i++) {
            if (attendees[i] !== name) {
                newAttendees.push(attendees[i]);
            }
        }
        
        for (let i = 0; i < excuseds.length; i++) {
            newExcuseds.push(excuseds[i]);
        }
        newExcuseds.push(name)
        /*
        window.localStorage.setItem("PRattendees", JSON.stringify(newAttendees));
        window.localStorage.setItem("PRexcused", JSON.stringify(newExcuseds));
        */
        setAtendees(newAttendees);
        setShowAttendees(newAttendees);
        setExcuseds(newExcuseds);
        setShowExcuseds(newExcuseds);
    }

    const markUnexcused = name => {
        let newAttendees = []
        let newExcuseds = []
        for (let i = 0; i < excuseds.length; i++) {
            if (excuseds[i] !== name) {
                newExcuseds.push(excuseds[i]);
            }
        }
        
        for (let i = 0; i < attendees.length; i++) {
            newAttendees.push(attendees[i]);
        }
        newAttendees.push(name)
        /*
        window.localStorage.setItem("PRattendees", JSON.stringify(newAttendees));
        window.localStorage.setItem("PRexcused", JSON.stringify(newExcuseds));
        */
        setAtendees(newAttendees);
        setShowAttendees(newAttendees);
        setExcuseds(newExcuseds);
        setShowExcuseds(newExcuseds);
    }

    const searchExcusedName = e => {
        setSearchExcused(e.target.value);
    }

    const searchAttendeeName = e => {
        setSearchAttendee(e.target.value);
    }

    if (role === "teacher") {
        return (
            <div className="w-screen min-h-screen bg-slate-200 pb-20">
                <UpperNav className={`${className} lecture`}/>
                <div className="pt-20 w-full">
                    <div className="w-11/12 mx-auto">
                        <h1 className="text-2xl font-semibold">{date}</h1>
                        <h1 className="text-2xl font-semibold">{attendingNum} attendees</h1>
                        <img src="/img/qrcode.png" alt="qr img" className="w-40 h-40 mx-auto mt-6"></img>
                        <p className="mt-4 text-md text-center">Scan the QR code with the phone you want to check attendance with for this class</p>
                        <div className="w-full mt-8">
                            <h1 className="underline text-2xl font-bold">Excused (Number: {excuseds.length})</h1>
                            {excuseds.length === 0 ? (<div></div>) : (<p className="text-sm italic mt-2">Click on the X in a student's container to mark that student as unexcused (or an attendee)</p>)}
                            {excuseds.length === 0 ? (<div></div>) : (
                                <div className="mt-2 mb-4">
                                <p>Search:</p>
                                <input className="w-full h-fit bg-white px-4 py-2 bg-white shadow-md" type="text" placeholder="Search for student name" onChange={searchExcusedName}></input>
                                </div>
                            )}
                            {excuseds.length !== 0 ? (<div className="w-full mt-2">
                                {showExcuseds.map((student, index) => 
                                    (<div className="flex flex-row px-4 py-2 w-full h-fit rounded-md mt-2 bg-white shadow-md" key={index}>
                                        <p className="text-lg font-semilight w-11/12">{student}</p>
                                        <p className="text-slate-400 text-lg font-semilight hover:text-black w-1/12 ml-auto flex flex-col justify-center" onClick={() => {markUnexcused(student)}}>X</p>
                                    </div>)
                                )}
                            </div>) : (
                                <div className="w-full mt-2 text-center">
                                    No student is excused
                                </div>
                            )}
                        </div>
    
                        <div className="w-full mt-8">
                            <h1 className="underline text-2xl font-bold">Attendees (Number: {attendingNum})</h1>
                            {attendees.length === 0 ? (<div></div>) : (<p className="text-sm italic mt-2">Click on the pen in a student's container to mark that student as excused</p>)}
                            {attendees.length === 0 ? (<div></div>) : (
                                <div className="mt-2 mb-4">
                                <p>Search:</p>
                                <input className="w-full h-fit bg-white px-4 py-2 bg-white shadow-md" type="text" placeholder="Search for student name" onChange={searchAttendeeName}></input>
                                </div>
                            )}
                            {attendees.length !== 0 ? (<div className="w-full mt-4 mx-auto">
                                {showAttendees.map((student, index) => 
                                    (<div className="flex flex-row px-4 py-2 w-full h-fit rounded-md mt-2 bg-white shadow-md" key={index}>
                                        <p className="text-lg font-semilight w-11/12">{student}</p>
                                        <p className="text-slate-400 text-lg font-semilight hover:text-black w-1/12 ml-auto flex flex-col justify-center"><BsFillPenFill onClick={() => {markExcused(student)}}></BsFillPenFill></p>
                                    </div>)
                                )}
                            </div>) : (
                                <div className="w-full mt-2 text-center">
                                    No student is attending
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <LowerNav selected="schedule"/>
            </div>
        )
    } else {
        return (
            <div className="w-screen min-h-screen bg-slate-200 pb-20">
                <UpperNav className={`${className} lecture`}/>
                <div className="pt-20 w-full">
                    <div className="w-11/12 mx-auto mt-[35%] bg-white py-3 pl-6 rounded-md border border-slate-300 shadow-md shadow-slate-300 pb-8">
                        <h1 className="text-2xl font-semibold">{date}</h1>
                        <h1 className="text-2xl font-semibold mt-2">Status: {status === "attending" ? (<span className="text-green-500">{status}</span>) : (<span className="text-yellow-500">{status}</span>)}</h1>
                        <h1 className="text-2xl font-semibold mt-2">Professor: Archie To</h1>
                    </div>
                    <div className="w-11/12 text-2xl py-2 bg-sky-700 active:bg-sky-900 hover:shadow-inner active:shadow-sky-900 text-white text-center rounded-md mx-auto" onClick={() => {navigate("/request")}}>{status === "attending" ? <span>Send request</span> : "Mark as attending"}</div>
                </div>
                <LowerNav selected="schedule"/>
            </div>
        )
    }
    
}

export default UpcomingClassDetail