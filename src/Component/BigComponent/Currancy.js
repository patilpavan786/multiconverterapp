import React, { useState } from "react";
import style from "./Common.module.css";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

function Currancy() {
  const navigate = useNavigate()
  let data6 = [
    {
      srno: "1",
      unit1: "EUR",
      unit2: "USD",
      icon: <p onClick={()=> navigate("/EurTousd") }>  <ArrowForwardIcon /></p>
    },
    {
      srno: "2",
      unit1: "GBP",
      unit2: "USD",
      icon: <p onClick={()=> navigate("/GbpTousd") }>  <ArrowForwardIcon /></p>
    },
  
    {
      srno: "3",
      unit1: "MXN",
      unit2: "USD",
      icon: <p onClick={()=> navigate("/MxnTousd") }>  <ArrowForwardIcon /></p>
    },
    {
      srno: "4",
      unit1: "AUD",
      unit2: "USD",
      icon: <p onClick={()=> navigate("/AudTousd") }>  <ArrowForwardIcon /></p>
    },
    {
      srno: "5",
      unit1: "BRL",
      unit2: "USD",
      icon: <p onClick={()=> navigate("/BrlTousd") }>  <ArrowForwardIcon /></p>
    },
    {
      srno: "6",
      unit1: "CAD",
      unit2: "USD",
      icon: <p onClick={()=> navigate("/CadTousd") }>  <ArrowForwardIcon /></p>
    },
    {
      srno: "7",
      unit1: "CHF",
      unit2: "USD",
      icon: <p onClick={()=> navigate("/ChfTousd") }>  <ArrowForwardIcon /></p>
    },
    {
      srno: "8",
      unit1: "CNY",
      unit2: "USD",
      icon: <p onClick={()=> navigate("/CnyTousd") }>  <ArrowForwardIcon /></p>
    },
    {
      srno: "9",
      unit1: "INR",
      unit2: "USD",
      icon: <p onClick={()=> navigate("/InrTousd") }>  <ArrowForwardIcon /></p>
    },
    {
      srno: "10",
      unit1: "JPY",
      unit2: "USD",
      icon: <p onClick={()=> navigate("/JpyTousd") }>  <ArrowForwardIcon /></p>
    },
  ];
  
  const [newdata, setNewData] = useState(data6);
  return (
    <div>
      <NavBar />
      {newdata.map((x, index) => {
        return (
          <div key={x.index} className={style.containerArea}>
            <div  className={style.areaContainer}>
              <div className={style.areaContainer1}>
                <p>{x.srno}</p>
                <p>{x.unit1}</p>
                <CompareArrowsIcon />
                <p>{x.unit2}</p>
              </div>
              <p className={style.arrow}>
           {x.icon}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Currancy
