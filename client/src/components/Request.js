import React, {useState, useEffect} from 'react';
import UpperNav from './UpperNav';
import LowerNav from './LowerNav';
import {useNavigate} from "react-router-dom";
import {BsFillPenFill} from "react-icons/bs";

function Request() {
  const [className, setClassName] = useState(window.localStorage.getItem("class"))
  const [role, setRole] = useState(window.localStorage.getItem("FRrole"));
  const [requests, setRequests] = useState(role === "teacher" ? [{
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
    reason: "Schedule conflict",
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
  }] : [
    {
      id: 1,
      title: `SENG 310 lecture`,
      name: "Archie To",
      status: "accepted",
      date: "Mon Jun 20, 2022",
      reason: "Health issue",
      details: "Two days ago I felt really tired and started coughing pretty hard. A day later, I took a test for Covid 19 and got positive.",
      fileSource: ""
    },
    {
      id: 2,
      title: `CSC485C lecture`,
      name: "Archie To",
      status: "pending",
      date: "Mon Jun 20, 2022",
      reason: "Health issue",
      details: "Two days ago I felt really tired and started coughing pretty hard. A day later, I took a test for Covid 19 and got positive.",
      fileSource: ""
    }, 
    {
      id: 3,
      title: `CSC 482A lecture`,
      name: "Archie To",
      status: "rejected",
      date: "Mon Jun 13, 2022",
      reason: "Other",
      details: "I'm feeling super lazy and just really like to stay at home",
      fileSource: ""
    }
  ])
  const [message, setMessage] = useState("") 
  const [showAddRequest, setShowAddRequest] = useState(false);
  const [requestMessage, setRequestMessage] = useState("");
  const [requestClass, setRequestClass] = useState("SENG 310 lecture");
  const [requestDate, setRequestDate] = useState("Mon Jun 20, 2022");
  const [reason, setReason] = useState("Health issue");
  const [details, setDetails] = useState("");
  const [file, setFile] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const login = window.localStorage.getItem("FRlogin");
    if (login === "false") {
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

  const viewRequestDetailStudent = req => {
    window.localStorage.setItem("PRrequest", JSON.stringify(req));
    navigate("/request/request-detail")
  }

  /** Functions for students to add requests **/
  const onClassChange = e => {
    setRequestClass(e.target.value);
  }

  const onDateChange = e => {
    setRequestDate(e.target.value);
  }

  const onReasonChange = e => {
    setReason(e.target.value);
  }

  const onDetailsChange = e => {
    setDetails(e.target.value);
  }

  const onFileChange = e => {
    // console.log(e.target.files[0]);
    setFile(e.target.files[0].name);
  }

  const submitRequestForm = e => {
    e.preventDefault();
    if (details === "") {
      setRequestMessage("Missing details")
    } else {
      const newRequest = {
        id: requests.length + 1,
        title: requestClass,
        name: "Archie To",
        status: "pending",
        date: requestDate,
        reason: reason,
        details: details,
        fileSource: file
      }
      let newRequests = requests;
      newRequests.unshift(newRequest);
      // console.log(newRequests)
      setRequests(newRequests);
      setRequestClass("SENG 310 lecture");
      setRequestDate("Mon Jun 20, 2022");
      setReason("Health issue");
      setDetails("");
      setFile("");
      setShowAddRequest(false);
      setMessage("Request sent successfully");
    }
  }

  if (role === "teacher") {
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
  } else {
    return (
      <div className="bg-slate-200 w-screen min-h-screen pb-20 relative">
          <UpperNav className="Absence Requests"/>
          <div className="pt-20 w-full">
            <div className="w-11/12 mx-auto">
              <h1 className="text-2xl font-bold">Requests for absence</h1>
              <div className="w-full mt-1">
                {requests.map((req, index) => (
                  <div className="w-full px-4 py-2 rounded-md bg-white shadow-md mt-4 relative" key={index}>
                    <h1 className="text-xl font-semibold">{req.title}</h1>
                    <p className="text-md font-light mt-1"><span className="font-medium">Professor:</span> {req.name}</p>
                    <p className="text-md font-light"><span className="font-medium">Absent date:</span> {req.date}</p>
                    <p className="text-md font-light"><span className="font-medium">Reason: </span>{req.reason}</p>
                    <p className="text-md font-light"><span className="font-medium">Status: </span><span className="font-bold text-xl">{req.status}</span></p>
                      <div className="flex flex-row mt-3">
                        <div className="bg-yellow-200 rounded-sm hover:bg-yellow-500 w-full text-black text-lg font-semilight hover:text-black flex flex-col justify-center text-center py-1 h-fit" onClick={() => {viewRequestDetailStudent(req)}}>Details</div>
                      </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {message !== "" ? (<div className="fixed bottom-20 left-4 px-4 py-2 text-white text-lg font-semibold w-fit h-fit bg-sky-800 shadow-md shadow-slate-300 border-slate-300">{message}</div>): (<div></div>)}
          <div className="bg-indigo-700 hover:bg-indigo-900 rounded-full w-12 h-12 fixed z-20 bottom-20 right-8 text-center text-white font-bold text-3xl flex flex-col justify-center" onClick={() => {setShowAddRequest(true)}}>+</div>
          {showAddRequest ? (<div className="absolute top-0 left-0 bg-black opacity-50 z-20 w-screen h-full"></div>) : (<div></div>)}
                {showAddRequest? (<form className="fixed top-20 left-0 right-0 mx-auto bg-slate-100 w-10/12 z-30 rounded-md h-fit px-4 py-3 text-lg" onSubmit={submitRequestForm}>
                    <h1 className="text-2xl font-bold">Request form</h1>
                    {requestMessage !== "" ? (<p className="mt-1 text-red-500">{requestMessage}</p>) : (<div></div>)}
                    <p className="mt-1">Class:</p>
                    <select className="px-2 py-1 rounded-sm border border-slate-200 shadow-md shadow-slate-300" defaultValue="SENG 310 lecture" onChange={onClassChange}>
                      <option value="SENG 310 lecture">SENG 310 lecture</option>
                      <option value="CSC 485C lecture">CSC 485C lecture</option>
                      <option value="CSC 482A lecture">CSC 482A lecture</option>
                      <option value="CSC 445 lecture">CSC 445 lecture</option>
                    </select>
                    <p className="mt-1">Date:</p>
                    <select className="px-2 py-1 rounded-sm border border-slate-200 shadow-md shadow-slate-300" defaultValue="Mon Jun 20, 2022" onChange={onDateChange}>
                      <option value="Mon Jun 20, 2022">Mon Jun 20, 2022</option>
                      <option value="Thu Jun 23, 2022">Thu Jun 23, 2022</option>
                      <option value="Mon Jun 27, 2022">Mon Jun 27, 2022</option>
                      <option value="Thu Jun 30, 2022">Thu Jun 30, 2022</option>
                      <option value="Mon Jul 4, 2022">Mon Jul 4, 2022</option>
                      <option value="Thu Jul 7, 2022">Thu Jul 7, 2022</option>
                      <option value="Mon Jul 11, 2022">Mon Jul 11, 2022</option>
                      <option value="Thu Jul 14, 2022">Thu Jul 14, 2022</option>
                    </select>
                    <p className="mt-1">Reason:</p>
                    <select className="px-2 py-1 rounded-sm border border-slate-200 shadow-md shadow-slate-300" defaultValue="Health issue" onChange={onReasonChange}>
                      <option value="Health issue">Health issue</option>
                      <option value="Schedule conflict">Schedule conflict</option>
                      <option value="Other">Other</option>
                    </select>
                    <p className="mt-1">Details:</p>
                    <textarea className="w-full h-20 px-2 py-1 rounded-sm border border-slate-300 shadow-md shadow-slate-300" maxLength="300" placeholder='Do not write over 300 characters' onChange={onDetailsChange}></textarea>
                    <p className="mt-1">Supporting File (optional):</p>
                    <input type="file" onChange={onFileChange}></input>
                    <div className="flex flex-row ml-auto w-fit mt-4">
                      <div className="px-6 py-1 text-lg rounded-md bg-white border border-slate-200 shadow-slate-300 shadow-md hover:shadow-inner w-fit h-fit mr-2" onClick={() => {setShowAddRequest(false)}}>Close</div>
                      <input className="px-6 py-1 text-lg rounded-md bg-white border border-slate-400 shadow-slate-300 shadow-md hover:shadow-inner w-fit h-fit" type="submit" value="Send"></input>
                    </div> 
                </form>) : (<div></div>)}
          <LowerNav selected="request"/>
      </div>
    )
  }
  
}

export default Request