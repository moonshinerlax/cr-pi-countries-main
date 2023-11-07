/* eslint-disable react/prop-types */
//* Libraries Import
import { useDispatch } from "react-redux"
import { order } from "../../redux/actions"


const OrderBar = (props) => {
  const dispatch = useDispatch()

  const handleOrd = (event)=>{
    const value = event.target.value
    dispatch(order(value))
    props.sendData(value)
  }

  return (
    <div>
        <select id="select" onChange={(event)=>{handleOrd(event)}}>
            <option value=""> Select Order </option>
            <option value="AName"> Ascend by Name</option>
            <option value="BName"> Descend by Name</option>
            <option value="APop"> Ascend by Population </option>
            <option value="BPop"> Descend by Population</option>
        </select>
    </div>
  )
}

export default OrderBar