import React from 'react'
import UpperNav from './UpperNav'
import LowerNav from './LowerNav'

function Progress() {
  return (
    <div className="w-screen min-h-screen bg-slate-200 pb-20">
        <UpperNav className="Summary"/>
        <div className="pt-20 w-full">
            <div className="w-11/12 mx-auto">
                <h1 className="text-3xl font-bold">Attendance report</h1>
                <div className="w-full mt-4">
                    <div className="w-full px-4 py-2 rounded-md bg-white shadow-md hover:shadow-inner hover:shadow-slate-500">
                        <h1 className="text-xl font-bold">SENG 310 lecture</h1>
                        <p className="text-md font-semilight mt-1">Total classes: <span className="font-semibold text-lg">32</span></p>
                        <p className="text-md font-semilight">Total past classes: <span className="font-semibold text-lg">15</span></p>
                        <p className="text-md font-semilight">Total classes left: <span className="font-semibold text-lg">17</span></p>
                        <p className="text-md font-semilight">Total attended: <span className="font-semibold text-lg">13/15 (87%</span>)</p>
                        <p className="text-md font-semilight">Total absent: <span className="font-semibold text-lg">1/15 (6%)</span></p>
                        <p className="text-md font-semilight">Total excused: <span className="font-semibold text-lg">1/15 (6%)</span></p>
                    </div>
                </div>
                <div className="w-full mt-4">
                    <div className="w-full px-4 py-2 rounded-md bg-white shadow-md hover:shadow-inner hover:shadow-slate-500">
                        <h1 className="text-xl font-bold">CSC 485C lecture</h1>
                        <p className="text-md font-semilight mt-1">Total classes: <span className="font-semibold text-lg">32</span></p>
                        <p className="text-md font-semilight">Total past classes: <span className="font-semibold text-lg">15</span></p>
                        <p className="text-md font-semilight">Total classes left: <span className="font-semibold text-lg">17</span></p>
                        <p className="text-md font-semilight">Total attended: <span className="font-semibold text-lg">10/15 (67%</span>)</p>
                        <p className="text-md font-semilight">Total absent: <span className="font-semibold text-lg">3/15 (20%)</span></p>
                        <p className="text-md font-semilight">Total excused: <span className="font-semibold text-lg">2/15 (13%)</span></p>
                    </div>
                </div>
                <div className="w-full mt-4">
                    <div className="w-full px-4 py-2 rounded-md bg-white shadow-md hover:shadow-inner hover:shadow-slate-500">
                        <h1 className="text-xl font-bold">CSC 482A lecture</h1>
                        <p className="text-md font-semilight mt-1">Total classes: <span className="font-semibold text-lg">32</span></p>
                        <p className="text-md font-semilight">Total past classes: <span className="font-semibold text-lg">15</span></p>
                        <p className="text-md font-semilight">Total classes left: <span className="font-semibold text-lg">17</span></p>
                        <p className="text-md font-semilight">Total attended: <span className="font-semibold text-lg">11/15 (73%</span>)</p>
                        <p className="text-md font-semilight">Total absent: <span className="font-semibold text-lg">3/15 (20%)</span></p>
                        <p className="text-md font-semilight">Total excused: <span className="font-semibold text-lg">1/15 (7%)</span></p>
                    </div>
                </div>
                <div className="w-full mt-4">
                    <div className="w-full px-4 py-2 rounded-md bg-white shadow-md hover:shadow-inner hover:shadow-slate-500">
                        <h1 className="text-xl font-bold">CSC 445 lecture</h1>
                        <p className="text-md font-semilight mt-1">Total classes: <span className="font-semibold text-lg">32</span></p>
                        <p className="text-md font-semilight">Total past classes: <span className="font-semibold text-lg">15</span></p>
                        <p className="text-md font-semilight">Total classes left: <span className="font-semibold text-lg">17</span></p>
                        <p className="text-md font-semilight">Total attended: <span className="font-semibold text-lg">13/15 (87%</span>)</p>
                        <p className="text-md font-semilight">Total absent: <span className="font-semibold text-lg">1/15 (6%)</span></p>
                        <p className="text-md font-semilight">Total excused: <span className="font-semibold text-lg">1/15 (6%)</span></p>
                    </div>
                </div>
            </div>
        </div>
        <LowerNav selected="progress"/>
    </div>
  )
}

export default Progress