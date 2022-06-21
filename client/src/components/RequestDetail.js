import React, {useState} from 'react'
import UpperNav from './UpperNav'
import LowerNav from './LowerNav'

function RequestDetail() {
    const [request, setRequest] = useState(JSON.parse(window.localStorage.getItem("PRrequest")));

    return (
        <div className="bg-slate-200 w-screen min-h-screen pb-20">
            <UpperNav className={window.localStorage.getItem("class")}/>
            <div className="pt-24">
                <div className="bg-white w-11/12 h-fit rounded-lg mx-auto px-4 py-3">
                    <h1 className="text-2xl font-bold">Request for absence</h1>
                    <p className="text-lg mt-6"><span className="font-semibold">Written by: </span>{request.name}</p>
                    <p className="text-lg mt-2"><span className="font-semibold">Date applied: </span>{request.date}</p>
                    <p className="text-lg mt-2"><span className="font-semibold">Reason: </span>{request.reason}</p>
                    <p className="text-lg mt-2"><span className="font-semibold">Details: </span>{request.details}</p>
                    <p className="text-lg mt-2"><span className="font-semibold">File attached: </span>{request.fileSource === "" ? "None": request.fileSource}</p>
                </div>
            </div>
            <div className="flex flex-row w-11/12 h-fit mx-auto mt-4">
                <div className="rounded-sm bg-green-500 hover:bg-green-700 w-1/2 text-white text-xl font-semilight flex flex-col justify-center text-center py-2 h-fit">Accept</div>
                <div className="rounded-sm bg-red-500 hover:bg-red-700 w-1/2 text-white text-xl font-semilight flex flex-col justify-center text-center py-2 h-fit">Decline</div>
            </div>
            <LowerNav selected="request"/>
        </div>
    )
}

export default RequestDetail