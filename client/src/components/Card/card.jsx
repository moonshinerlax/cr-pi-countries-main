/* eslint-disable react/prop-types */
//* CSS Import
// import Detail from "../DetailCountry/Detail"
import { useState } from "react"
import Detail from "../DetailCountry/Detail"
import style from "./card.module.css"
//* Libraries
// import {Link} from "react-router-dom"

const Card = (props) => {
    const {id, name, continent, flag} = props
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleOnClick = ()=>{
      setIsModalOpen(true);
    }

    const closeModal = () => {
      setIsModalOpen(false);
    };

  return (
    <div>
      <div onClick={handleOnClick} className={ style.cardcontainer }>
        <img className={ style.flag } src={ flag } alt='' />
        <h2 className={ style.name }>{ name }</h2>
        <h2 className={ style.continent }>{ continent }</h2>
      </div><div>
        <Detail sendID={id} isOpen={isModalOpen} onClose={closeModal} />
      </div>
      </div>
  )
}

export default Card