import React from 'react'

function ClassSelect() {
    const classSelected = name => {
        window.localStorage.setItem("class", name);
    }

    return (
        <div>
            <h1 className="text-xl text-bold w-fit mx-auto pt-20">Select a class</h1>
            <div className="mt-8 w-7/12 mx-auto h-fit">
                <div className="w-full text-xl uppercase bg-slate-100 border-slate-300 shadow-lg hover:shadow-inner text-center flex flex-col justify-center h-12" onClick={() => {classSelected("SENG 310")}}>SENG 310</div>
                <div className="mt-5 w-full text-xl uppercase bg-slate-100 border-slate-300 shadow-lg hover:shadow-inner text-center flex flex-col justify-center h-12" onClick={() => {classSelected("CSC 482A")}}>CSC 482A</div>
                <div className="mt-5 w-full text-xl uppercase bg-slate-100 border-slate-300 shadow-lg hover:shadow-inner text-center flex flex-col justify-center h-12" onClick={() => {classSelected("CSC 485C")}}>CSC 485C</div>
                <div className="mt-5 w-full text-xl uppercase bg-slate-100 border-slate-300 shadow-lg hover:shadow-inner text-center flex flex-col justify-center h-12" onClick={() => {classSelected("CSC 445")}}>CSC 445</div>
            </div>
        </div>
    )
}

export default ClassSelect