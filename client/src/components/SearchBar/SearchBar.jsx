/* eslint-disable react/prop-types */
//* Libraries Import
import { useEffect, useState } from "react"
import { search } from "../../redux/actions"
import { useDispatch } from "react-redux"
//* CSS import
import style from "./SearchBar.module.css"

const SearchBar = ({ onClear, onSearch, searchStatus }) => {
    const [name, setName] = useState("")
    const [status, setStatus] = useState(false)
    const dispatch = useDispatch()

    useEffect(()=>{
        setStatus(searchStatus)
    },[searchStatus])

    const handleChange = (event)=>{
        setName(event.target.value)
    }
    const handleSearch = ()=>{
        dispatch(search(name))
        onSearch()        
    }
    const handleClear = ()=>{
        onClear()
        setName("")
    }
    return(
        <div className={style.container}>
         <input id="inputSearch" value={name} onChange={handleChange} type="search" />
         <button onClick={handleSearch}>Search</button>
         {status ? <button onClick={handleClear}>clear search</button> : <a></a>}
      </div>
    )
}

export default SearchBar