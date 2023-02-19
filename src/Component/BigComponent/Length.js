import React, { useState } from "react";
import style from "./Common.module.css";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

function Length() {
  const navigate = useNavigate()
  let data1 = [
    {
      srno: "1.",
      unit1: "Centimeter",
      unit2: "inches",
      icon: <p onClick={()=> navigate("/CentiToInch") }>  <ArrowForwardIcon /></p>
     
    },
    {
      srno: "2.",
      unit1: "inches",
      unit2: "mm",
      icon: <p onClick={()=> navigate("/InchTomm") }>  <ArrowForwardIcon /></p>
    },

    {
      srno: "3.",
      unit1: "meter",
      unit2: "feet",
      icon: <p onClick={()=> navigate("/MeterTofeet") }>  <ArrowForwardIcon /></p>
    },
    {
      srno: "4.",
      unit1: "kilometer",
      unit2: "meters",
      icon: <p onClick={()=> navigate("/KmTom") }>  <ArrowForwardIcon /></p>
    },
    {
      srno: "5.",
      unit1: "kilometer",
      unit2: "miles",
      icon: <p onClick={()=> navigate("/KmTomile") }>  <ArrowForwardIcon /></p>
    },
    {
      srno: "6.",
      unit1: "cm",
      unit2: "feet",
      icon: <p onClick={()=> navigate("/CmTofoot") }>  <ArrowForwardIcon /></p>
    },
    {
      srno: "7.",
      unit1: "inches",
      unit2: "feet",
      icon: <p onClick={()=> navigate("/InchTofeet") }>  <ArrowForwardIcon /></p>
    },
    {
      srno: "8.",
      unit1: "meter",
      unit2: "yards",
      icon: <p onClick={()=> navigate("/MeterToyard") }>  <ArrowForwardIcon /></p>
    },
    {
      srno: "9.",
      unit1: "feet",
      unit2: "yard",
      icon: <p onClick={()=> navigate("/FeetToyard") }>  <ArrowForwardIcon /></p>
    },
    {
      srno: "10.",
      unit1: "inches",
      unit2: "meter",
      icon: <p onClick={()=> navigate("/InchTometer") }>  <ArrowForwardIcon /></p>
    },
  ];
  const [newdata, setNewData] = useState(data1);

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

export default Length
