//* Libraries
import {Link} from "react-router-dom"
//* CSS
import style from "./NavBar.module.css"
//* Components
import PATHROUTES from "../../helpers/PATHROUTES"

const NavBar = ()=>{
    return(
<div className={style.navBar}>
            <Link className={style.NavButton} to={PATHROUTES.HOME}><img className={style.svg} src="./src/images/home_FILL0_wght400_GRAD0_opsz24.svg" /></Link>
            <Link className={style.NavButton} to={PATHROUTES.ACTIVITIES}><img className={style.svg} src="./src/images/forest_FILL0_wght400_GRAD0_opsz24.svg" /></Link>
        </div>
    )
}

export default NavBar;
        