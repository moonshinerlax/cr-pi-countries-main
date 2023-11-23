/* eslint-disable react/prop-types */
import {useDispatch, useSelector} from "react-redux"
import { useState } from "react";
//* CSS
import style from "./NavBar.module.css"
//* Helper
// import PATHROUTES from "../../helpers/PATHROUTES"
import SearchBar from "../SearchBar/SearchBar"
import OrderBar from "../Bars/OrderBar"
import Pagination from "../../helpers/pagination";
import FilterBar from "../Bars/FilterBar";
import { fillList } from "../../redux/actions";


const NavBar = ({onSearch, onClear, filterVal, orderVal, onPageChange, onPreviousPage, onNextPage})=>{
    const items = useSelector((state)=> state.pageItems)
    const [page, setPage] = useState(1)
    const dispatch = useDispatch()
    const [searchStatus, setSearchStatus] = useState(false)
    const itemsNum = items.length
    
    const handlePageChange = (selectedPage) => {
        setPage(selectedPage);
        onPageChange(selectedPage)
      };
        
          const nextPage = ()=>{
            onNextPage()
            setPage(page + 1)
          }
          const previousPage = ()=>{
            onPreviousPage()
            setPage(page - 1)
          }
    
          const getFilterValue = (data)=>{
          filterVal(data)
          }
    
          const updateOrder = (data) =>{
            orderVal(data)
          }
    
          const handleSearch = () => {
            setSearchStatus(true)
            onSearch()
        }
           
          const handleClear = () => {
            dispatch(fillList())
                setSearchStatus(false)
                onClear()
          }

    return(
        <div className={style.filters}>
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
                  {page === 1 ? <a></a> : <button className={style.navButton} onClick={previousPage}>&larr;</button>}
                  <Pagination
                    totalItems={itemsNum} 
                    currentPage={page}
                    onPageChange={handlePageChange}
                  />
                  {page >= itemsNum/10 ? <a></a> : <button className={style.navButton} onClick={nextPage}>&rarr;</button>}
              </div>
        </div>
    
        )
}

export default NavBar;
        