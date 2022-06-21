import React from 'react'
import {useNavigate} from "react-router-dom";

function LowerNav({selected}) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row w-screen h-14 fixed bottom-0 left-0 bg-white shadow-[0 -10px -15px -3px rgb(0 0 0 / 0.1), 0 -4px -6px -4px rgb(0 0 0 / 0.1)] z-40">
        {selected === "home" ? (<div className="w-1/4 text-lg font-bold border-b-2 border-black text-center flex flex-col justify-center hover:bg-slate-300" onClick={() => {navigate("/home")}}>Home</div>) : (<div className="w-1/4 text-lg font-light text-center flex flex-col justify-center hover:bg-slate-300" onClick={() => {navigate("/home")}}>Home</div>)}
        {selected === "request" ? (<div className="w-1/4 text-lg font-bold border-b-2 border-black text-center flex flex-col justify-center hover:bg-slate-300" onClick={() => {navigate("/request")}}>Request</div>) : (<div className="w-1/4 text-lg font-light text-center flex flex-col justify-center hover:bg-slate-300" onClick={() => {navigate("/request")}}>Request</div>)}
        {selected === "schedule" ? (<div className="w-1/4 text-lg font-bold border-b-2 border-black text-center flex flex-col justify-center hover:bg-slate-300" onClick={() => {navigate("/schedule")}}>Schedule</div>) : (<div className="w-1/4 text-lg font-light text-center flex flex-col justify-center hover:bg-slate-300" onClick={() => {navigate("/schedule")}}>Schedule</div>)}
        {selected === "setting" ? (<div className="w-1/4 text-lg font-bold border-b-2 border-black text-center flex flex-col justify-center hover:bg-slate-300" onClick={() => {navigate("/")}}>Class</div>) : (<div className="w-1/4 text-lg font-light text-center flex flex-col justify-center hover:bg-slate-300" onClick={() => {navigate("/")}}>Class</div>)}
    </div>
  )
}
export default LowerNav