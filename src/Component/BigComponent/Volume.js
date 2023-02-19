import React, { useState } from "react";
import style from "./Common.module.css";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";


function Volume() {
  const navigate = useNavigate()
  let data3 = [
    {
      srno: "1",
      unit1: "litres",
      unit2: "gallons",
      icon: <p onClick={()=> navigate("/LitTogallon") }>  <ArrowForwardIcon /></p>
    },
    {
      srno: "2",
      unit1: "ml",
      unit2: "cups",
      icon: <p onClick={()=> navigate("/MlTocups") }>  <ArrowForwardIcon /></p>
    },
  
    {
      srno: "3",
      unit1: "tablespoons",
      unit2: "cups",
      icon: <p onClick={()=> navigate("/TablespoonTocups") }>  <ArrowForwardIcon /></p>
    },
    {
      srno: "4",
      unit1: "ml",
      unit2: "liter",
      icon: <p onClick={()=> navigate("/MlTolitre") }>  <ArrowForwardIcon /></p>
    },
    {
      srno: "5",
      unit1: "cubic feet",
      unit2: "gallon",
      icon: <p onClick={()=> navigate("/CubicfeetTogallon") }>  <ArrowForwardIcon /></p>
    },
    {
      srno: "6",
      unit1: "gallon",
      unit2: "ml",
      icon: <p onClick={()=> navigate("/GallonToml") }>  <ArrowForwardIcon /></p>
    },
  
  ];
  const [newdata, setNewData] = useState(data3);

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

export default Volume
