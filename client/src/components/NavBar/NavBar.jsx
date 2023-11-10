//* Libraries
import {Link, useLocation } from "react-router-dom"
//* CSS
import style from "./NavBar.module.css"
//* Helper
import PATHROUTES from "../../helpers/PATHROUTES"

const NavBar = ()=>{
    const path = useLocation()
    
    return(
<div className={style.navBar}>
            <Link className={`${style.NavButton} ${path.pathname === "/home" ? style.active : ''}`} to={PATHROUTES.HOME}>Home</Link>
            <Link className={`${style.NavButton} ${path.pathname === "/activities" ? style.active : ''}`} to={PATHROUTES.ACTIVITIES}>Activities</Link>
        </div>
    )
}

export default NavBar;
        