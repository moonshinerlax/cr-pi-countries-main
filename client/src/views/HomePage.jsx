/* eslint-disable react-hooks/exhaustive-deps */
//* libraries imports
import {useDispatch, useSelector} from "react-redux"
import { useEffect, useState } from "react";
//* CSS style imports
import style from "./HomePage.module.css"
//* component imports
import Cards from "../components/Cards/Cards";
// import SearchBar from "../components/SearchBar/SearchBar";
// import Pagination from "../helpers/pagination";
// import FilterBar from "../components/Bars/FilterBar";
// import OrderBar from "../components/Bars/OrderBar";
//* functions import
import { clear, fillList, filter } from "../redux/actions";
import NavBar from "../components/NavBar/NavBar";
import { Link, useLocation } from "react-router-dom";

const HomePage = ()=>{
    const Countries = useSelector((state)=> state.countries1)
    // const items = useSelector((state)=> state.pageItems)
    const [transition, setTransition] = useState(false)
    const [page, setPage] = useState(1)
    const dispatch = useDispatch()
    const [filterBar, setFilterBar] = useState("")
    const [updateOrd, setUpdateOrd] = useState("")
    const [searchStatus, setSearchStatus] = useState(0)
    // const itemsNum = items.length

    useEffect(()=>{
      dispatch(fillList())
      setTransition(true);
    },[])

    useEffect(() => {
        dispatch(filter(page, filterBar))
        // dispatch(order(updateOrd))
      }
      , [page, filterBar, updateOrd, searchStatus]); 
      
  const handlePageChange = (selectedPage) => {
    setPage(selectedPage);
  };
    
      const nextPage = ()=>{
        setPage(page + 1)
      }
      const previousPage = ()=>{
        setPage(page - 1)
      }

      const getFilterValue = (data)=>{
      setFilterBar(data)
      setPage(1)
      }

      const updateOrder = (data) =>{
        setUpdateOrd(data)
        setPage(1)
      }

      const handleSearch = () => {
        setSearchStatus(searchStatus + 1)
      }
      const handleClear = () => {
        dispatch(clear())
        setSearchStatus(searchStatus - 1)
      }
      
      const location = useLocation()
      const home = location.pathname !== "/home"

      return(
        // <>
        // <div className={style.head}>
        <div className={`${style.rootHome} ${transition ? style.slideIn : ""} ${home ? style.slideSide : ""}` }>
        <NavBar
          className={style.filters}
          onSearch={handleSearch}
          onClear={handleClear}
          filterVal={getFilterValue}
          orderVal={updateOrder}
          onPageChange={handlePageChange}
          onNextPage={nextPage}
          onPreviousPage={previousPage}
        />
            <div className={style.title}>
            <Link to={"/home"}><h2 >World Countries</h2></Link>
            <Link to={"/activities"}><h2>Create Activity</h2></Link>
            </div>
            <Cards countries={Countries}
            onClear={handleClear}
            /> 
        </div>
       // </>
    )
}

export default HomePage;