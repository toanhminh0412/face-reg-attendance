import React from 'react'
import {IoExitOutline} from "react-icons/io5";
import {useNavigate} from "react-router-dom";

function UpperNav({className}) {
  const navigate = useNavigate();

  const goBack = () => {
    window.history.back();
  }

  const logOut = () => {
    window.localStorage.setItem("FRrole", "");
    window.localStorage.setItem("FRlogin", false);
    navigate("/login");
  }

  return (
    <div className="flex flex-row w-screen h-14 fixed top-0 left-0 shadow-lg shadow-slate-300 border-b border-slate-200 z-40">
        <div className="w-1/6 text-center flex flex-col justify-center text-3xl font-bold border-r-2 bg-slate-100 hover:bg-slate-300 hover:shadow-inner hover:shadow-slate-700" onClick={goBack}>&#x2190;</div>
        <div className="w-4/6 text-center flex flex-col justify-center text-2xl font-bold bg-white">{className}</div>
        <div className="w-1/6 text-center flex flex-col justify-center text-3xl font-bold border-r-2 bg-slate-100 hover:bg-slate-300 hover:shadow-inner hover:shadow-slate-700 text-center" onClick={logOut}><IoExitOutline className="mx-auto"/></div>
    </div>
  )
}

export default UpperNav