import React, { useState } from "react";
import style from "./Common.module.css";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";


function Weight() {
  const navigate = useNavigate()
  let data4 = [
    {
      srno: "1",
      unit1: "kg",
      unit2: "lbs",
      icon: <p onClick={()=> navigate("/KgTolbs") }>  <ArrowForwardIcon /></p>
    },
    {
      srno: "2",
      unit1: "grams",
      unit2: "pounds",
      icon: <p onClick={()=> navigate("/GmTopound") }>  <ArrowForwardIcon /></p>
    },
  
    {
      srno: "3",
      unit1: "gm",
      unit2: "kg",
      icon: <p onClick={()=> navigate("/GmTokg") }>  <ArrowForwardIcon /></p>
    },
    {
      srno: "4",
      unit1: "grams",
      unit2: "miligram",
      icon: <p onClick={()=> navigate("/GmTomiligm") }>  <ArrowForwardIcon /></p>
    },
    {
      srno: "5",
      unit1: "ton",
      unit2: "lbs",
      icon: <p onClick={()=> navigate("/ToneTolbs") }>  <ArrowForwardIcon /></p>
    },
    {
      srno: "6",
      unit1: "stone",
      unit2: "lbs",
      icon: <p onClick={()=> navigate("/StoneTolbs") }>  <ArrowForwardIcon /></p>
    },
   
  ];
  
  const [newdata, setNewData] = useState(data4);

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


export default Weight
