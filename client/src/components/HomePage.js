import React, {useState, useEffect} from 'react';
import UpperNav from './UpperNav';
import LowerNav from './LowerNav';
import {useNavigate} from "react-router-dom";

function HomePage() {
    const [className, setClassName] = useState("");
    // const [classes, setClasses] = useState([]);
    const [role, setRole] = useState(window.localStorage.getItem("FRrole"));
    const navigate = useNavigate();
    
    useEffect(() => {
        setClassName(window.localStorage.getItem("class"));
        const login = window.localStorage.getItem("FRlogin");
        if (login === "false") {
            navigate("/login");
        }
    }, [])

    const viewUpcomingDetails = (date, attendingNum) => {
        window.localStorage.setItem("PRclassdate", date);
        window.localStorage.setItem("PRattendingnum", attendingNum);
        navigate("/schedule/upcoming-class")
    }

    const viewRecentDetails = (date, attendingNum) => {
        window.localStorage.setItem("PRclassdate", date);
        window.localStorage.setItem("PRattendingnum", attendingNum);
        navigate("/schedule/recent-class");
    }

    const viewUpcomingDetailsStudent = (date, status, className) => {
        window.localStorage.setItem("PRclassdate", date);
        window.localStorage.setItem("FRstatus", status);
        window.localStorage.setItem("class", className);
        navigate("/schedule/upcoming-class")
    }

    if (role === "teacher") {
        return (
            <div className="w-screen min-h-screen bg-slate-200 pb-20">
                <UpperNav className={className}/>
                    <div className="pt-20 w-full">
                        <div className="w-11/12 mx-auto">
                            <h1 className="text-2xl font-bold">Upcomings</h1>
                            <div className="w-full mt-2">
                                <div className="w-full px-4 py-2 rounded-md bg-white shadow-md hover:shadow-inner hover:shadow-slate-500 mt-4 relative" onClick={() => {viewUpcomingDetails("Mon Jun 20, 2022", 175)}}>
                                    <h1 className="text-xl font-semibold">{className} lecture</h1>
                                    <p className="text-md font-light mt-1">Mon Jun 20, 2022</p>
                                    <p className="text-md font-light">Attending: 175 attendees</p>
                                    <p className="absolute top-0 right-4 text-sm italic font-light mt-2">Click for details</p>
                                </div>
                                <div className="w-full px-4 py-2 rounded-md bg-white shadow-md hover:shadow-inner hover:shadow-slate-500 mt-4 relative" onClick={() => {viewUpcomingDetails("Thu Jun 23, 2022", 175)}}>
                                    <h1 className="text-xl font-semibold">{className} lecture</h1>
                                    <p className="text-md font-light mt-1">Thu Jun 23, 2022</p>
                                    <p className="text-md font-light">Attending: 175 attendees</p>
                                    <p className="absolute top-0 right-4 text-sm italic font-light mt-2">Click for details</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-11/12 mx-auto mt-4">
                            <h1 className="text-2xl font-bold">Recents</h1>
                            <div className="w-full mt-2">
                                <div className="w-full px-4 py-2 rounded-md bg-white shadow-md hover:shadow-inner hover:shadow-slate-500 mt-4 relative" onClick={() => {viewRecentDetails("Thu Jun 17, 2022", 140)}}>
                                    <h1 className="text-xl font-semibold">{className} lecture</h1>
                                    <p className="text-md font-light mt-1">Thu Jun 17, 2022</p>
                                    <p className="text-md font-light">Attended: 140/175 (80%)</p>
                                    <p className="absolute top-0 right-4 text-sm italic font-light mt-2">Click for details</p>
                                </div>
                                <div className="w-full px-4 py-2 rounded-md bg-white shadow-md hover:shadow-inner hover:shadow-slate-500 mt-4 relative" onClick={() => {viewRecentDetails("Mon Jun 14, 2022", 135)}}>
                                    <h1 className="text-xl font-semibold">{className} lecture</h1>
                                    <p className="text-md font-light mt-1">Mon Jun 14, 2022</p>
                                    <p className="text-md font-light">Attended: 135/175 (77%)</p>
                                    <p className="absolute top-0 right-4 text-sm italic font-light mt-2">Click for details</p>
                                </div>
                            </div>
                        </div>
                    </div>
                <LowerNav selected="home"/>
            </div>
        )
    } else {
        return (
            <div className="w-screen min-h-screen bg-slate-200 pb-20">
                <UpperNav className="Homepage"/>
                    <div className="pt-20 w-full">
                        <div className="w-11/12 mx-auto">
                            <h1 className="text-2xl font-bold">Upcomings</h1>
                            <div className="w-full mt-2">
                                <div className="w-full px-4 py-2 rounded-md bg-white shadow-md hover:shadow-inner hover:shadow-slate-500 mt-4 relative" onClick={() => {viewUpcomingDetailsStudent("Mon Jun 20, 2022", "attending", "SENG 310")}}>
                                    <h1 className="text-xl font-semibold">SENG 310 lecture</h1>
                                    <p className="text-md font-light mt-1">Mon Jun 20, 2022</p>
                                    <p className="text-md font-light">Status: Attending</p>
                                    <p className="absolute top-0 right-4 text-sm italic font-light mt-2">Click for details</p>
                                </div>
                                <div className="w-full px-4 py-2 rounded-md bg-white shadow-md hover:shadow-inner hover:shadow-slate-500 mt-4 relative" onClick={() => {viewUpcomingDetailsStudent("Thu Jun 23, 2022", "excused", "CSC 485C")}}>
                                    <h1 className="text-xl font-semibold">CSC 485C lecture</h1>
                                    <p className="text-md font-light mt-1">Thu Jun 23, 2022</p>
                                    <p className="text-md font-light">Status: Excused</p>
                                    <p className="absolute top-0 right-4 text-sm italic font-light mt-2">Click for details</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-11/12 mx-auto mt-4">
                            <h1 className="text-2xl font-bold">Recents</h1>
                            <div className="w-full mt-2">
                                <div className="w-full px-4 py-2 rounded-md bg-green-200 shadow-md hover:shadow-inner hover:shadow-slate-500 mt-4 relative">
                                    <h1 className="text-xl font-semibold">CSC 482A lecture</h1>
                                    <p className="text-md font-light mt-1">Thu Jun 17, 2022</p>
                                    <p className="text-md font-light">Status: Attended</p>
                                </div>
                                <div className="w-full px-4 py-2 rounded-md bg-red-200 shadow-md hover:shadow-inner hover:shadow-slate-500 mt-4 relative">
                                    <h1 className="text-xl font-semibold">CSC 445 lecture</h1>
                                    <p className="text-md font-light mt-1">Mon Jun 14, 2022</p>
                                    <p className="text-md font-light">Status: Absent</p>
                                </div>
                            </div>
                        </div>
                    </div>
                <LowerNav selected="home"/>
            </div>
        )
    }
    
}

export default HomePage