import React from 'react'
import style from "./Home.module.css"
import { useNavigate } from 'react-router-dom'
function Home() {
  let navigate = useNavigate()

  return (
    <div>
<h1>Area converter</h1>
<h1>Currancy converter</h1>
<h1>Length converter</h1>
<h1>Pressure converter</h1>
<h1>Volume converter</h1>
<h1>Weight converter</h1>  
    </div>
  )
}

export default Home
