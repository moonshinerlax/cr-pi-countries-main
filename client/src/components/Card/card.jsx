/* eslint-disable react/prop-types */
//* CSS Import
import style from "./card.module.css"


const Card = (props) => {
    const {id, name, continent, flag, detailID, status} = props
    
    const handleOnClick = ()=>{
      detailID(id)
      status()
    }

  return (
    
      <div onClick={handleOnClick} className={ style.cardcontainer }>
        <img className={ style.flag } src={ flag } alt='' />
        <h2 className={ style.name }>{ name }</h2>
        <h2 className={ style.continent }>{ continent }</h2>
      </div>
    
  )
}

export default Card