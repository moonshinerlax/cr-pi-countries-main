/* eslint-disable react/prop-types */
//* CSS Import
import style from "./card.module.css"
//* Libraries
import {Link} from "react-router-dom"

const Card = (props) => {
    const {id, name, continent, flag} = props
  return (
    <Link to={`/countries/${id}`}>
    <div className={style.cardcontainer}>
    <img className={style.flag} src={flag} alt='' />
        <h2 className={style.name}>{name}</h2>
        <h2 className={style.continent}>{continent}</h2>
    </div>
    </Link>
  )
}

export default Card