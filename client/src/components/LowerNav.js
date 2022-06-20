import React from 'react'

function LowerNav({selected}) {
  return (
    <div className="flex flex-row w-screen h-14 fixed bottom-0 left-0 bg-white shadow-[0 -10px -15px -3px rgb(0 0 0 / 0.1), 0 -4px -6px -4px rgb(0 0 0 / 0.1)]">
        {selected === "home" ? (<div className="w-1/4 text-lg font-bold border-b-2 border-black text-center flex flex-col justify-center hover:bg-slate-300">Home</div>) : (<div className="w-1/4 text-lg font-light text-center flex flex-col justify-center hover:bg-slate-300">Home</div>)}
        {selected === "request" ? (<div className="w-1/4 text-lg font-bold border-b-2 border-black text-center flex flex-col justify-center hover:bg-slate-300">Request</div>) : (<div className="w-1/4 text-lg font-light text-center flex flex-col justify-center hover:bg-slate-300">Request</div>)}
        {selected === "event" ? (<div className="w-1/4 text-lg font-bold border-b-2 border-black text-center flex flex-col justify-center hover:bg-slate-300">Event</div>) : (<div className="w-1/4 text-lg font-light text-center flex flex-col justify-center hover:bg-slate-300">Event</div>)}
        {selected === "setting" ? (<div className="w-1/4 text-lg font-bold border-b-2 border-black text-center flex flex-col justify-center hover:bg-slate-300">Setting</div>) : (<div className="w-1/4 text-lg font-light text-center flex flex-col justify-center hover:bg-slate-300">Setting</div>)}
    </div>
  )
}

export default LowerNav