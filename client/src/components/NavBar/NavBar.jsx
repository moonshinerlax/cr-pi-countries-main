//* Libraries
import {Link} from "react-router-dom"
//* CSS
import style from "./NavBar.module.css"
//* Components
import PATHROUTES from "../../helpers/PATHROUTES"

const NavBar = ()=>{
    return(
<div className={style.navBar}>
            <Link className={style.NavButton} to={PATHROUTES.HOME}><h2>Home</h2></Link>
            <Link className={style.NavButton} to={PATHROUTES.ACTIVITIES}><h2>Activities</h2></Link>
        </div>
    )
}

export default NavBar;
        