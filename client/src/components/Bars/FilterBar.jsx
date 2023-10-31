/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import style from "./FilterBar.module.css"
import { useState } from "react"


const FilterBar = (props) => {
  const [filterVal, setFitlerVal] = useState("All")

  const handleFilter = (event) => {
    const selectedValue = event.target.value;
    setFitlerVal(selectedValue)
    props.sendData(selectedValue);
  };

  return (
    <div className={style.filters}>
                <select id="select" value={filterVal} onChange={(event)=>{handleFilter(event)}}>
                  <option value="All">All</option>
                  <option value="Africa">Africa</option>
                  <option value="North America">North America</option>
                  <option value="South America">South America</option>
                  <option value="Europe">Europe</option>
                  <option value="Asia">Asia</option>
                  <option value="Oceania">Oceania</option>
                  <option value="Antarctica">Antarctica</option>
                </select>
              </div>
  )
}

export default FilterBar