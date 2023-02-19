import React from 'react'
import style from "./NavBar.module.css"
import { useNavigate } from 'react-router-dom'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
function NavBar() {
    let nevigate = useNavigate()
  return (
    <div className={style.main} onClick={()=> nevigate('/')}>
      <h1 ><ArrowBackIcon />HOME</h1>
    </div>
  )
}

export default NavBar
