import React, {useState, useEffect} from 'react';
import UpperNav from './UpperNav';
import LowerNav from './LowerNav';

function HomePage() {
    const [className, setClassName] = useState("");
    
    useEffect(() => {
        setClassName(window.localStorage.getItem("class"))
    }, [])

    return (
        <div>
            <UpperNav className={className}/>

            <LowerNav/>
        </div>
    )
}

export default HomePage