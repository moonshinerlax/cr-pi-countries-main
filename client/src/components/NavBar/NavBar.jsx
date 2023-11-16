//* Libraries
import {Link, useLocation } from "react-router-dom"
//* CSS
import style from "./NavBar.module.css"
//* Helper
import PATHROUTES from "../../helpers/PATHROUTES"
import SearchBar from "../SearchBar/SearchBar"
import OrderBar from "../Bars/OrderBar"

const NavBar = ()=>{
    const path = useLocation()
    
    return(
        <div className={style.navBar}>
            {/* <Link className={`${style.NavButton} ${path.pathname === PATHROUTES.HOME ? style.active : ''}`} to={PATHROUTES.HOME}>Home</Link>
            <Link className={`${style.NavButton} ${path.pathname === PATHROUTES.ACTIVITIES ? style.active : ''}`} to={PATHROUTES.ACTIVITIES}>Activities</Link> */}
            <SearchBar/>
            <OrderBar/>
            
        
        </div>
    
        )
}

export default NavBar;
        