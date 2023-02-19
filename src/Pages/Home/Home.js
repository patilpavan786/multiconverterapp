import React from 'react'
import style from "./Home.module.css"
import { useNavigate } from 'react-router-dom'
import NavBar from '../../Component/NavBar/NavBar'
function Home() {
  let navigate = useNavigate()

  return (
    <div className={style.main}>
      <NavBar />
      <div onClick={()=> navigate("/Area")}><h1>Area converter</h1></div>
<div onClick={()=> navigate("/Currancy")}><h1>Currancy converter</h1></div>
<div onClick={()=> navigate("/Length")}><h1>Length converter</h1></div>
<div onClick={()=> navigate("/Pressure")}><h1>Pressure converter</h1></div>
<div onClick={()=> navigate("/Volume")}><h1>Volume converter</h1></div>
<div onClick={()=> navigate("/Weight")}><h1>Weight converter</h1> </div>

    </div>
  )
}

export default Home
