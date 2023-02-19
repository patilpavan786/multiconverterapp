import React, { useState } from "react";
import style from "./Common.module.css";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

function Area() {

  const navigate = useNavigate()
  let data2 = [
    {
      srno: "1",
      unit1: "Acres",
      unit2: "SquareFeet",
      icon: <p onClick={()=> navigate("/AcresTosf") }>  <ArrowForwardIcon /></p>
    },
    {
      srno: "2",
      unit1: "Hectors",
      unit2: "Acres",
      icon: <p onClick={()=> navigate("/HectorToacre") }>  <ArrowForwardIcon /></p>
    },
  
    {
      srno: "3",
      unit1: "SquareMeter",
      unit2: "SquareFeet",
      icon: <p onClick={()=> navigate("/SqmTosqf") }>  <ArrowForwardIcon /></p>
    },
    {
      srno: "4",
      unit1: "Acres",
      unit2: "Square Miles",
      icon: <p onClick={()=> navigate("/AcresTosqmiles") }>  <ArrowForwardIcon /></p>
    },
    {
      srno: "5",
      unit1: "SquareFeet",
      unit2: "SquareYard",
      icon: <p onClick={()=> navigate("/SqfeetTosqyard") }>  <ArrowForwardIcon /></p>
    },
   
  ];
  
  const [newdata, setNewData] = useState(data2);

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

export default Area;
