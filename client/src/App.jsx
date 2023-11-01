//* Frameworks Import
import { Routes, Route, useLocation } from 'react-router-dom'
//* CSS Import
import style from "./App.module.css"
//* helpers Imports
import PATHROUTES from './helpers/PATHROUTES'
//* Components Imports
import HomePage from './views/HomePage'
import LandingPage from './views/LandingPage'
import NavBar from './components/NavBar/NavBar'
import Detail from './components/DetailCountry/Detail'
import CreateActivity from './components/CreateActivity/CreateActivity'


function App() {
  
  const location = useLocation();
  const showNavBar = location.pathname !== '/';
  
  return (
      <div className={style.root}>
        {showNavBar && <NavBar/>}
       <Routes>
        <Route path={PATHROUTES.LOGIN} element={<LandingPage/>}/>
        <Route path={PATHROUTES.HOME} element={<HomePage/>}/>
        <Route path={PATHROUTES.DETAIL} element={<Detail/>}/>
        <Route path={PATHROUTES.ACTIVITIES} element={<CreateActivity/>}/>
       </Routes>       
      </div>
    
  )
}

export default App
