import React, { useEffect, useState } from 'react'
import LowerNav from './LowerNav';
import UpperNav from './UpperNav';
import {BsFillPenFill} from "react-icons/bs";
import {useNavigate} from "react-router-dom";

function RecentClassDetail() {
    const [className, setClassName] = useState(window.localStorage.getItem("class"));
    const [date, setDate] = useState(window.localStorage.getItem("PRclassdate"))
    const [attendingNum, setAttendingNum] = useState(window.localStorage.getItem("PRattendingnum")); 
    const [attendees, setAtendess] = useState(["Minh To","Aden Bernadi","Big Boy","Carley Winston","Chuck Chick","Emma Stone","Justin Bieber","Post Malone","Lionel Messi","Chirstiano Ronaldo","Edison Cavani","Arianna Grande","Demi Lovato","Pink","Chris Evan","Chris Hemsworth","Natasha Reinhart","Chris Rock","Will SMith","Janden Smith","Emma Watson","Jennifer Lopec","Jennifer Aniston","Bruce Lee","Jackie Chan","Amanda Castilo","Zevin Wang","Charlie Stone","Andrew Li","Boteng Jerome"]);
    const [excuseds, setExcuseds] = useState(["Hao-tse Wu","Aida Guang","Aden Shuttle"]);
    const [absents, setAbsents] = useState(["Thor", "Iron Man", "Captain America", "Black Widow", "Hulk", "Thanos", "Captain Marvel", "Nick Fury", "Gamora", "I am Groot", "Dr Strange", "Spider Man", "Hawkeye", "Scarlet Witch", "Vision", "Quick SIlver"]);
    const [viewOption, setViewOption] = useState("allstudents");
    const navigate = useNavigate();

    useEffect(() => {
        const login = window.localStorage.getItem("FRlogin");
        if (!login) {
            navigate("/login");
        }
    })

    useEffect(() => {
        console.log("Excuseds: " + excuseds.length);
        // console.log("Typ")
    }, [excuseds])

    const onViewOptionChange = e => {
        setViewOption(e.target.value);
    }

    return (
        <div className="w-screen min-h-screen bg-slate-200 pb-20">
            <UpperNav className={`${className} lecture`}/>
            <div className="pt-20 w-full">
                <div className="w-11/12 mx-auto">
                    <h1 className="text-2xl font-semibold">{date}</h1>
                    <h1 className="text-2xl font-semibold">{attendingNum}/175 attendees ({parseInt(attendingNum/175*100)}%)</h1>
                    <p className="w-fit text-xl mt-4">View option:</p>
                    <select className="w-fit mt-2 text-xl px-4 py-2 bg-white border-slate-300 rounded-md shadow-md" defaultValue="allstudents" onChange={onViewOptionChange}>
                        <option value="allstudents">All Students</option>
                        <option value="excused">Excused</option>
                        <option value="absent">Absent</option>
                        <option value="attended">Attended</option>
                    </select>

                    {viewOption === "allstudents" || viewOption === "excused" ? 
                    (<div className="w-full mt-8">
                        <h1 className="underline text-2xl font-bold">Excused (Number: {excuseds.length})</h1>
                        {excuseds.length !== 0 ? (<div className="w-full mt-2">
                            {excuseds.map((student, index) => 
                                (<div className="flex flex-row px-4 py-2 w-full h-fit rounded-md mt-2 bg-white shadow-md bg-yellow-200" key={index}>
                                    <p className="text-lg font-semilight w-11/12">{student}</p>
                                </div>)
                            )}
                        </div>) : (
                            <div className="w-full mt-2 text-center">
                                No student was excused
                            </div>
                        )}
                    </div>) : (<div></div>)
                    }

                    {viewOption === "allstudents" || viewOption === "absent" ? 
                    (<div className="w-full mt-8">
                        <h1 className="underline text-2xl font-bold">Absent (Number: {175 - attendingNum - excuseds.length})</h1>
                        {absents.length !== 0 ? (<div className="w-full mt-2">
                            {absents.map((student, index) => 
                                (<div className="flex flex-row px-4 py-2 w-full h-fit rounded-md mt-2 bg-white shadow-md bg-red-200" key={index}>
                                    <p className="text-lg font-semilight w-11/12">{student}</p>
                                </div>)
                            )}
                        </div>) : (
                            <div className="w-full mt-2 text-center">
                                No student was absent
                            </div>
                        )}
                    </div>) : (<div></div>)
                    }

                    {viewOption === "allstudents" || viewOption === "attended" ?
                    (<div className="w-full mt-8">
                        <h1 className="underline text-2xl font-bold">Attendees (Number: {attendingNum})</h1>
                        {attendees.length !== 0 ? (<div className="w-full mt-4 mx-auto">
                            {attendees.map((student, index) => 
                                (<div className="flex flex-row px-4 py-2 w-full h-fit rounded-md mt-2 bg-white shadow-md bg-green-200" key={index}>
                                    <p className="text-lg font-semilight w-11/12">{student}</p>
                                </div>)
                            )}
                        </div>) : (
                            <div className="w-full mt-2 text-center">
                                No student attended
                            </div>
                        )}
                    </div>) : (<div></div>)
                    }
                </div>
            </div>
            <LowerNav selected="schedule"/>
        </div>
    )
}

export default RecentClassDetail