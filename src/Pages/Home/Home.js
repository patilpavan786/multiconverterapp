import React from 'react'
import style from "./Home.module.css"
import { useNavigate } from 'react-router-dom'
import NavBar from '../../Component/NavBar/NavBar'
import Footer from '../../Component/Footer/Footer'
function Home() {
  let navigate = useNavigate()

  return (
    <>
    <div className={style.main}>
      <NavBar />
      <div onClick={()=> navigate("/Area")} className={style.txt}><h1>Area converter</h1></div>
<div onClick={()=> navigate("/Currancy")}  className={style.txt2}><h1>Currancy converter</h1></div>
<div onClick={()=> navigate("/Length")} className={style.txt}><h1>Length converter</h1></div>
<div onClick={()=> navigate("/Pressure")} className={style.txt2}><h1>Pressure converter</h1></div>
<div onClick={()=> navigate("/Volume")} className={style.txt}><h1>Volume converter</h1></div>
<div onClick={()=> navigate("/Weight")} className={style.txt2}><h1>Weight converter</h1> </div>
    </div>
   <div className={style.Footer}> <Footer  /></div>
    </>

  )
}

export default Home
