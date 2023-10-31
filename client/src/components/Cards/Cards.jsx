/* eslint-disable react/prop-types */
//* Component Imports
import Card from '../Card/card'
//* CSS Imports
import style from "./Cards.module.css"

const Cards = ({countries}) => {
    
  return (
    <div className={style.container}>
        {countries.map((country) => 
            <Card
            id={country.id}
            key={country.id}
            name={country.name}
            continent={country.continent}
            flag={country.flag}/>
            )}
    </div>
  )
}

export default Cards