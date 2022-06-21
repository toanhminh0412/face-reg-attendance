import React, {useState, useEffect} from 'react';
import UpperNav from './UpperNav';
import LowerNav from './LowerNav';
import {useNavigate} from "react-router-dom";

function Request() {
  const [className, setClassName] = useState(window.localStorage.getItem("class"))
  const [requests, setRequests] = useState([{
    id:1,
    title: `${className} lecture`,
    name: "Minh To",
    date: "Mon Jun 20, 2022",
    reason: "Health issue",
    details: "Two days ago I felt really tired and started coughing pretty hard. A day later, I took a test for Covid 19 and got positive.",
    fileSource: ""
  },
  {
    id: 2,
    title: `${className} lecture`,
    name: "Thor",
    date: "Mon Jun 20, 2022",
    reason: "Other",
    details: "I'm feeling super lazy and just really like to stay at home",
    fileSource: ""
  },
  {
    id: 3,
    title: `${className} lecture`,
    name: "Captain America",
    date: "Mon Jun 20, 2022",
    reason: "Conflict appointment",
    details: "I will have a doctor appointment at 10am - 11:30pm, which means I won't be able to attend the lecture that day",
    fileSource: ""
  },
  {
    id: 4,
    title: `${className} lecture`,
    name: "Lionel Messi",
    date: "Mon Jun 23, 2022",
    reason: "Other",
    details: "On Thursday our football club will have a game in La Liga, I really cannot miss that. I have to carry the team. Sorry for the inconvenience.",
    fileSource: ""
  },
  {
    id: 5,
    title: `${className} lecture`,
    name: "Lionel Messi",
    date: "Mon Jun 23, 2022",
    reason: "Other",
    details: "On Thursday our football club will have a game in La Liga, I really cannot miss that. I have to carry the team. Sorry for the inconvenience.",
    fileSource: ""
  }])
  const [message, setMessage] = useState("") 
  const navigate = useNavigate();

  useEffect(() => {
    const login = window.localStorage.getItem("FRlogin");
    if (!login) {
        navigate("/login");
    }
})

  const acceptRequest = async(id) => {
    let newRequests = []
    for (let i = 0; i < requests.length; i++) {
      if (requests[i].id !== id) {
        newRequests.push(requests[i]);
      }
    }
    setRequests(newRequests);
    setMessage("Accept request successfully")
    await new Promise(r => setTimeout(r, 2000));
    setMessage("");
  }

  const declineRequest = async(id) => {
    let newRequests = []
    for (let i = 0; i < requests.length; i++) {
      if (requests[i].id !== id) {
        newRequests.push(requests[i]);
      }
    }
    setRequests(newRequests);
    setMessage("Decline request successfully")
    await new Promise(r => setTimeout(r, 2000));
    setMessage("");
  }

  const viewRequestDetail = req => {
    window.localStorage.setItem("PRrequest", JSON.stringify(req));
    navigate("/request/request-detail")
  }

  return (
    <div className="bg-slate-200 w-screen min-h-screen pb-20">
        <UpperNav className={window.localStorage.getItem("class")}/>
        <div className="pt-20 w-full">
          <div className="w-11/12 mx-auto">
            <h1 className="text-2xl font-bold">Requests for absence</h1>
            <div className="w-full mt-1">
              {requests.map((req, index) => (
                <div className="w-full px-4 py-2 rounded-md bg-white shadow-md mt-4 relative" key={index}>
                  <h1 className="text-xl font-semibold">{req.title}</h1>
                  <p className="text-md font-light">{req.name}</p>
                  <p className="text-md font-light"><span className="font-medium">Absent date:</span> {req.date}</p>
                  <p className="text-md font-light"><span className="font-medium">Reason: </span>{req.reason}</p>
                    <div className="flex flex-row mt-3">
                      <div className="bg-green-200 rounded-sm hover:bg-green-500 w-4/12 text-black text-lg font-semilight hover:text-black flex flex-col justify-center text-center py-1 h-fit" onClick={() => {acceptRequest(req.id)}}>Accept</div>
                      <div className="bg-red-200 rounded-sm hover:bg-red-500 w-4/12 text-black text-lg font-semilight hover:text-black flex flex-col justify-center text-center py-1 h-fit" onClick={() => {declineRequest(req.id)}}>Decline</div>
                      <div className="bg-yellow-200 rounded-sm hover:bg-yellow-500 w-4/12 text-black text-lg font-semilight hover:text-black flex flex-col justify-center text-center py-1 h-fit" onClick={() => {viewRequestDetail(req)}}>Details</div>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {message !== "" ? (<div className="fixed bottom-20 right-4 px-4 py-2 text-white text-lg font-semibold w-fit h-fit bg-sky-800 shadow-md shadow-slate-300 border-slate-300">{message}</div>): (<div></div>)}
        <LowerNav selected="request"/>
    </div>
  )
}

export default Request