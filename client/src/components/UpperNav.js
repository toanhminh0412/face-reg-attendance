import React from 'react'

function UpperNav({className}) {
  return (
    <div className="flex flex-row w-screen h-14 fixed top-0 left-0 shadow-lg border-b border-slate-200">
        <div className="w-1/6 text-center flex flex-col justify-center text-3xl font-bold border-r-2 bg-slate-100 hover:bg-slate-300 hover:shadow-inner hover:shadow-slate-700">&#x2190;</div>
        <div className="w-5/6 text-center flex flex-col justify-center text-2xl font-bold bg-slate-200">{className}</div>
    </div>
  )
}

export default UpperNav