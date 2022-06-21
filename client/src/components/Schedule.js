import React, { useEffect, useState } from 'react'
import LowerNav from './LowerNav'
import UpperNav from './UpperNav'
import {useNavigate} from "react-router-dom";

function Schedule() {
    const months = [["January", 31], ["February", 28], ["March", 31], ["April", 30], ["May", 31], ["June", 30], ["July", 31], ["August", 31], ["September", 30], ["October", 31], ["November", 30], ["December", 31]]
    const [monthIndex, setMonthIndex] = useState(5);
    const [month, setMonth] = useState([]);
    const [showDateDetail, setShowDateDetail] = useState(false);
    const [dateSelected, setDateSelected] = useState(14);
    const navigate = useNavigate();

    useEffect(() => {
        setMonth(months[monthIndex]);
    }, [monthIndex])

    const moveLeft = () => {
        setMonthIndex(monthIndex > 0 ? monthIndex - 1 : 11);
    }

    const moveRight = () => {
        setMonthIndex(monthIndex < 11 ? monthIndex + 1 : 0);
    }

    const onDateClicked = date => {
        console.log("This function is called")
        setDateSelected(date);
        setShowDateDetail(true);
    }

    const onClassClicked = className => {
        window.localStorage.setItem("class", className);
        window.localStorage.setItem("PRclassdate", `${dateSelected % 7 === 6 ? "Mon" : "Thu"} ${dateSelected} ${month[0]}, 2022`)
        if (monthIndex < 5) {
            window.localStorage.setItem("PRattendingnum", 140);
            navigate("/schedule/recent-class");
        } else if (monthIndex > 5) {
            window.localStorage.setItem("PRattendingnum", 175);
            navigate("/schedule/upcoming-class");
        } else {
            if (dateSelected >= 20) {
                window.localStorage.setItem("PRattendingnum", 175);
                navigate("/schedule/upcoming-class");
            } else {
                window.localStorage.setItem("PRattendingnum", 140);
                navigate("/schedule/recent-class");
            }
        }
    }

  return (
    <div className="bg-slate-200 w-screen min-h-screen pb-20">
        <UpperNav className="Schedule"/>
        <div className="pt-20 w-full">
            <div className="flex flex-row bg-white border border-slate-300 shadow-md shadow-slate-300 h-fit">
                <div className="w-2/12 font-semibold text-black bg-slate-200 hover:bg-slate-300 text-2xl text-center py-3" onClick={moveLeft}>&#60;</div>
                <div className="w-8/12 font-semibold text-black text-2xl text-center py-3">{month[0]} 2022</div>
                <div className="w-2/12 font-semibold text-black bg-slate-200 hover:bg-slate-300 text-2xl text-center py-3" onClick={moveRight}>&#62;</div>
            </div>
            <p className="text-md italic mt-4 w-10/12 mx-auto">Underlined and bold dates are ones when you have one or more classes</p>
            <div className="mt-2 w-full flex flex-row flex-wrap justify-center">
                {Array(month[1]).fill(0).map((x, index) => (
                    (index + 1) % 7 === 6 || (index + 1) % 7 === 2 ? (<div key={index + 1} className="w-1/6 mr-1 mt-1 py-4 text-center bg-white hover:bg-slate-200 text-lg font-bold underline rounded-sm" onClick={() => {onDateClicked(index + 1)}}>{index + 1}</div>) : (<div key={index + 1} className="w-1/6 mr-1 mt-1 py-4 text-center bg-white hover:bg-slate-200 text-lg font-semilight rounded-sm" onClick={() => {onDateClicked(index + 1)}}>{index + 1}</div>)
                ))}
            </div>
        </div>
        {showDateDetail ? (<div className="absolute top-0 left-0 bg-black opacity-50 z-20 w-screen h-screen"></div>) : (<div></div>)}
        {showDateDetail ? (<div className="absolute top-48 left-0 right-0 mx-auto bg-slate-100 w-10/12 z-30 rounded-md h-fit">
            <p className="pt-3 ml-4 text-xl"><span className="font-semibold">Date:</span> {dateSelected} {month[0]}, 2022</p>
            <p className="mt-2 ml-4 text-xl"><span className="font-semibold">Classes:</span></p>
            {dateSelected % 7 === 6 || dateSelected % 7 === 2 ? (<p className="text-md font-light italic ml-4 text-base">(Click on a class container for details)</p>) : (<div></div>)}
            {dateSelected % 7 === 6 || dateSelected % 7 === 2 ? (<div className="mt-2 w-11/12 mx-auto h-fit mb-4">
                <div className="w-full text-center rounded-md bg-white flex flex-col justify-center text-lg border border-slate-200 shadow-slate-300 shadow-md py-2 hover:shadow-inner" onClick={() => {onClassClicked("SENG 310")}}>SENG 310 lecture</div>
                <div className="mt-2 w-full text-center rounded-md bg-white flex flex-col justify-center text-lg border border-slate-200 shadow-slate-300 shadow-md py-2 hover:shadow-inner" onClick={() => {onClassClicked("CSC 482A")}}>CSC 482A lecture</div>
                <div className="mt-2 w-full text-center rounded-md bg-white flex flex-col justify-center text-lg border border-slate-200 shadow-slate-300 shadow-md py-2 hover:shadow-inner" onClick={() => {onClassClicked("CSC 485C")}}>CSC 485C lecture</div>
                <div className="mt-2 w-full text-center rounded-md bg-white flex flex-col justify-center text-lg border border-slate-200 shadow-slate-300 shadow-md py-2 hover:shadow-inner" onClick={() => {onClassClicked("CSC 445")}}>CSC 445 lecture</div>
            </div>) : (<div className="mt-2 w-11/12 mx-auto h-fit mb-4 text-center">No class for this date</div>)}
            <div className="px-6 py-1 text-lg rounded-md bg-white border border-slate-200 shadow-slate-300 shadow-md hover:shadow-inner w-fit h-fit mb-4 ml-auto mr-4" onClick={() => {setShowDateDetail(false)}}>Close</div>
        </div>) : (<div></div>)}
        
        <LowerNav selected="schedule"/>
    </div>
  )
}

export default Schedule