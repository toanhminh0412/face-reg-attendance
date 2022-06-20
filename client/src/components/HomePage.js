import React, {useState, useEffect} from 'react';
import UpperNav from './UpperNav';
import LowerNav from './LowerNav';

function HomePage() {
    const [className, setClassName] = useState("");
    
    useEffect(() => {
        setClassName(window.localStorage.getItem("class"))
    }, [])

    return (
        <div className="w-screen min-h-screen bg-slate-200">
            <UpperNav className={className}/>
                <div className="pt-20 w-full">
                    <div className="w-11/12 mx-auto">
                        <h1 className="text-2xl font-bold">Upcomings</h1>
                        <div className="w-full mt-2">
                            <div className="w-full px-4 py-2 rounded-md bg-white shadow-md mt-4">
                                <h1 className="text-xl font-semibold">{className} lecture</h1>
                                <p className="text-md font-light mt-1">Mon Jun 20, 2022</p>
                                <p className="text-md font-light">Attending: 175 attendees</p>
                            </div>
                            <div className="w-full px-4 py-2 rounded-md bg-white shadow-md mt-4">
                                <h1 className="text-xl font-semibold">{className} lecture</h1>
                                <p className="text-md font-light mt-1">Mon Jun 24, 2022</p>
                                <p className="text-md font-light">Attending: 175 attendees</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-11/12 mx-auto mt-4">
                        <h1 className="text-2xl font-bold">Recents</h1>
                        <div className="w-full mt-2">
                            <div className="w-full px-4 py-2 rounded-md bg-white shadow-md mt-4">
                                <h1 className="text-xl font-semibold">{className} lecture</h1>
                                <p className="text-md font-light mt-1">Mon Jun 17, 2022</p>
                                <p className="text-md font-light">Attended: 140/175 (80%)</p>
                            </div>
                            <div className="w-full px-4 py-2 rounded-md bg-white shadow-md mt-4">
                                <h1 className="text-xl font-semibold">{className} lecture</h1>
                                <p className="text-md font-light mt-1">Mon Jun 14, 2022</p>
                                <p className="text-md font-light">Attended: 135/175 (77%)</p>
                            </div>
                        </div>
                    </div>
                </div>
            <LowerNav selected="home"/>
        </div>
    )
}

export default HomePage