import { useDispatch } from "react-redux"
import { fillList } from "../redux/actions"


const GetAllCountries = ()=>{
    const dispatch = useDispatch()
    dispatch(fillList())
}

export default GetAllCountries