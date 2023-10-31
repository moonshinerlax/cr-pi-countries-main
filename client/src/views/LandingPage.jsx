import PATHROUTES from "../helpers/PATHROUTES";
import { useNavigate } from "react-router-dom";
import style from "./LandingPage.module.css"
import { useState } from "react";

const LandingPage = ()=>{
    const [transition, setTransition] = useState(false)
    const goTo = useNavigate()

    const startTransition = ()=>{
        setTransition(true)
        setTimeout(() => {
            goTo(PATHROUTES.HOME)
        }, 300);
    }

    return(
        <div className={`${style.landingRoot} ${transition ? style.slideOut : ""}`} >
        <div className={style.content}>
            <h1>Welcome, this is my Landing Page</h1>
            <button onClick={startTransition}>Enter</button>
        </div>
        </div>
    )
}

export default LandingPage;