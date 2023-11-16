/* eslint-disable react-hooks/exhaustive-deps */
//* libraries imports
import {useDispatch, useSelector} from "react-redux"
import { useEffect, useState } from "react";
//* CSS style imports
import style from "./HomePage.module.css"
//* component imports
import Cards from "../components/Cards/Cards";
import SearchBar from "../components/SearchBar/SearchBar";
import Pagination from "../helpers/pagination";
import FilterBar from "../components/Bars/FilterBar";
import OrderBar from "../components/Bars/OrderBar";
//* functions import
import { fillList, filter } from "../redux/actions";

const HomePage = ()=>{
    const Countries = useSelector((state)=> state.countries1)
    const items = useSelector((state)=> state.pageItems)
    const [transition, setTransition] = useState(false)
    const [page, setPage] = useState(1)
    const dispatch = useDispatch()
    const [filterBar, setFilterBar] = useState("")
    const [updateOrd, setUpdateOrd] = useState("")
    const [searchStatus, setSearchStatus] = useState(false)
    const itemsNum = items.length

    useEffect(()=>{
      dispatch(fillList())
    },[])

    useEffect(() => {
      
        setTimeout(() => {
          setTransition(true);
        }, 0); 
        dispatch(filter(page, filterBar))
        
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
        setSearchStatus(true)
      }
      const handleClear = () => {
        dispatch(fillList())
        setSearchStatus(false)
      }
      
      return(
        <>
        <div className={style.head}>
              <div className={style.filters}>
                <FilterBar 
                  sendData={getFilterValue}
                />
                <OrderBar 
                  sendData={updateOrder}
                  />
              </div>
                <SearchBar             
                  onSearch={handleSearch}
                  onClear={handleClear}
                  searchStatus={searchStatus}
                   />
              <div className={style.pageNav}>
                  {page === 1 ? <a></a> : <button onClick={previousPage}>Previous</button>}
                  <Pagination
                    totalItems={itemsNum} 
                    currentPage={page}
                    onPageChange={handlePageChange}
                  />
                  {page >= itemsNum/10 ? <a></a> : <button onClick={nextPage}>Next</button>}
              </div>
            </div>
        <div className={`${style.rootHome} ${transition ? style.slideIn : ""}` }>
            <Cards countries={Countries}
            /> 
        </div></>
    )
}

export default HomePage;