//* labraries import
import { useNavigate } from "react-router-dom";
import { useState } from "react";
//* helpers import
import PATHROUTES from "../helpers/PATHROUTES";
//* CSS import
import style from "./LandingPage.module.css"

const LandingPage = ()=>{
    const [transition, setTransition] = useState(false)
    const [transition1, setTransition1] = useState(false)
    const goTo = useNavigate()

    const startTransition = ()=>{
        setTransition(true)
        setTimeout(()=>{setTransition1(true)}, 900)
        setTimeout(() => {
            goTo(PATHROUTES.HOME)
        }, 1500);
    }

    return(
        <div className={`${style.landingRoot} ${transition1 ? style.slideOut1 : ""}`} >
        <div className={`${style.content} ${transition ? style.slideOut : ""}`}>
            <h1>Welcome</h1>
            <h1>Countries by Ivan Nava</h1>
            <button onClick={startTransition}>Enter</button>
        </div>
        </div>
    )
}

export default LandingPage;