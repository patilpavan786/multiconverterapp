import React, { useState } from "react";
import style from "./Common.module.css";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { useNavigate } from "react-router-dom";


function Pressure() {
  const navigate = useNavigate()
  let data5 = [
    {
      srno: "1",
      unit1: "bar",
      unit2: "psi",
      icon: <p onClick={()=> navigate("/Currancy") }>  <ArrowForwardIcon /></p>
    },
    {
      srno: "2",
      unit1: "kilopascal",
      unit2: "psi",
      icon: <p onClick={()=> navigate("/Currancy") }>  <ArrowForwardIcon /></p>
    },

  ];
  const [newdata, setNewData] = useState(data5);

  return (
    <div>
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

export default Pressure
